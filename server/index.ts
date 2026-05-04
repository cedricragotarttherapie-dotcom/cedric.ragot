import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

// ============================================================
// FIX RENDER / ESBUILD
// ============================================================
const __dirname = process.cwd();

// ============================================================
// APP INIT
// ============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================
// SUPABASE INITIALIZATION
// ============================================================
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ SUPABASE_URL ou SUPABASE_SERVICE_KEY manquant!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// ============================================================
// MIDDLEWARE
// ============================================================
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ============================================================
// API ROUTES
// ============================================================

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================================
// DEBUG SUPABASE (TEMPORAIRE)
// ============================================================
app.get('/api/debug-supabase', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .limit(1);

    if (error) {
      console.error('❌ DEBUG ERROR:', JSON.stringify(error, null, 2));
      return res.status(500).json({ error });
    }

    console.log('✅ DEBUG DATA:', data);
    res.json({ data });
  } catch (err) {
    console.error('❌ DEBUG CRASH:', err);
    res.status(500).json({ error: 'Debug failed' });
  }
});

// ============================================================
// CHATBOT
// ============================================================
app.post('/api/chatbot', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message requis' });
    }

    const faqResponses: Record<string, string> = {
      'sonothérapie': 'La sonothérapie utilise les vibrations sonores pour favoriser la relaxation et l’équilibre émotionnel.',
      'massage': 'Le massage sonore utilise les bols tibétains pour induire une détente profonde.',
      'tarif': 'Tarif découverte: 59€. Cartes disponibles à partir de 195€.',
      'réserver': 'Vous pouvez réserver via Calendly ou le formulaire de contact.',
    };

    const messageLower = message.toLowerCase();

    for (const [key, value] of Object.entries(faqResponses)) {
      if (messageLower.includes(key)) {
        return res.json({ response: value, type: 'faq' });
      }
    }

    return res.json({
      response:
        "Je ne sais pas répondre à cette question. Veuillez utiliser le formulaire de contact pour plus d'informations.",
      type: 'fallback',
    });

  } catch (error) {
    console.error('❌ Chatbot error:', error);
    res.status(500).json({
      response: 'Erreur serveur. Veuillez réessayer.',
      type: 'error',
    });
  }
});

// ============================================================
// CONTACT
// ============================================================
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          message,
        },
      ])
      .select();

    if (error) {
      console.error('❌ SUPABASE CONTACT ERROR:', JSON.stringify(error, null, 2));
      return res.status(500).json({ error: error.message });
    }

    console.log('✅ CONTACT INSERTED:', data);

    res.json({ success: true });
  } catch (error) {
    console.error('❌ Contact crash:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ============================================================
// NEWSLETTER
// ============================================================
app.post('/api/newsletter', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email requis' });
    }

    const { data, error } = await supabase
      .from('newsletters')
      .insert([
        {
          email,
        },
      ])
      .select();

    if (error) {
      console.error('❌ NEWSLETTER ERROR:', JSON.stringify(error, null, 2));
      return res.status(500).json({ error: error.message });
    }

    console.log('✅ NEWSLETTER INSERTED:', data);

    res.json({ success: true });
  } catch (error) {
    console.error('❌ Newsletter crash:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ============================================================
// STATIC FRONTEND (RENDER SAFE)
// ============================================================
const clientDistPath = path.join(process.cwd(), 'client', 'dist');

app.use(express.static(clientDistPath));

// SPA fallback
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// ============================================================
// ERROR HANDLER
// ============================================================
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('❌ GLOBAL ERROR:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ============================================================
// START SERVER
// ============================================================
app.listen(PORT, () => {
  console.log('🚀 Server running on port', PORT);
  console.log('📁 Static path:', clientDistPath);
});