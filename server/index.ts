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

    res.json({ data });
  } catch (err) {
    console.error('❌ DEBUG CRASH:', err);
    res.status(500).json({ error: 'Debug failed' });
  }
});


// ============================================================
// 🤖 BOTPRESS HANDOVER (REMPLACE ANCIEN CHATBOT)
// ============================================================
app.post('/api/chatbot', (req: Request, res: Response) => {
  // On ne gère plus le chatbot ici
  res.json({
    response: "Assistant déplacé vers Botpress. Merci d'utiliser le chat en bas à droite.",
    type: "botpress"
  });
});


// ============================================================
// CONTACT
// ============================================================
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    console.log('📩 CONTACT BODY:', req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])
      .select();

    if (error) {
      console.error('❌ CONTACT ERROR:', error);
      return res.status(500).json({ error });
    }

    console.log('✅ CONTACT INSERTED:', data);
    res.json({ success: true });

  } catch (error) {
    console.error('❌ Contact crash:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ============================================================
// QUOTE ENTREPRISES
// ============================================================
app.post('/api/quote', async (req: Request, res: Response) => {
  try {
    console.log('📊 QUOTE BODY:', req.body);

    const { name, email, company, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const { data, error } = await supabase
      .from('quotes')
      .insert([
        {
          name,
          email,
          company: company || null,
          message,
        },
      ])
      .select();

    if (error) {
      console.error('❌ QUOTE ERROR:', error);
      return res.status(500).json({ error });
    }

    console.log('✅ QUOTE INSERTED:', data);
    res.json({ success: true });

  } catch (error) {
    console.error('❌ Quote crash:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ============================================================
// NEWSLETTER
// ============================================================
app.post('/api/newsletter', async (req: Request, res: Response) => {
  try {
    console.log('📧 NEWSLETTER BODY:', req.body);

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email requis' });
    }

    const { data, error } = await supabase
      .from('newsletters')
      .insert([{ email }])
      .select();

    if (error) {
      console.error('❌ NEWSLETTER ERROR:', error);
      return res.status(500).json({ error });
    }

    console.log('✅ NEWSLETTER INSERTED:', data);
    res.json({ success: true });

  } catch (error) {
    console.error('❌ Newsletter crash:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

// ============================================================
// STATIC FRONTEND
// ============================================================
const clientDistPath = path.join(process.cwd(), "dist", "client");

app.use(express.static(clientDistPath));

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