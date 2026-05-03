import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ============================================================================
// SUPABASE INITIALIZATION (SERVER-SIDE)
// ============================================================================
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ SUPABASE_URL ou SUPABASE_SERVICE_KEY manquant!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// ============================================================================
// MIDDLEWARE
// ============================================================================
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// ============================================================================
// API ROUTES
// ============================================================================

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Chatbot endpoint
app.post('/api/chatbot', async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message requis' });
    }

    // FAQ responses
    const faqResponses: Record<string, string> = {
      'qu\'est-ce que la sonothérapie': 'La sonothérapie est une thérapie holistique qui utilise les vibrations sonores pour favoriser la relaxation et l\'équilibre émotionnel.',
      'comment fonctionne le massage sonore': 'Le massage sonore utilise les bols tibétains pour créer des vibrations qui détendent les muscles et apaisent l\'esprit.',
      'y a-t-il des contre-indications': 'Oui, la sonothérapie est déconseillée pour les femmes enceintes et les personnes avec des implants métalliques.',
      'quel est le tarif': 'Tarif découverte: 59€. Cartes: 3 massages 195€, 5 massages 295€, 8 massages 440€.',
      'comment réserver': 'Vous pouvez réserver via Calendly intégré sur le site ou en remplissant le formulaire de contact.',
    };

    // Check FAQ
    const messageLower = message.toLowerCase();
    for (const [key, value] of Object.entries(faqResponses)) {
      if (messageLower.includes(key)) {
        return res.json({ response: value, type: 'faq' });
      }
    }

    // For professional questions, use a simple fallback
    if (messageLower.includes('sonothérapie') || messageLower.includes('massage') || messageLower.includes('séance')) {
      return res.json({
        response: 'Je vous invite à réserver une séance ou poser votre question via le formulaire de contact.',
        type: 'professional',
      });
    }

    // Off-topic
    return res.json({
      response: 'Je ne sais pas répondre à cette question. Pour plus d\'informations, remplissez le formulaire de contact en bas de la page FAQ.',
      type: 'fallback',
    });
  } catch (error) {
    console.error('Chatbot error:', error);
    res.status(500).json({
      response: 'Je vous invite à réserver une séance ou poser votre question via le formulaire de contact.',
      type: 'error',
    });
  }
});

// Contact form submission
app.post('/api/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const { data, error } = await supabase.from('contacts').insert([
      {
        name,
        email,
        phone: phone || null,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    res.json({ success: true, message: 'Contact enregistré avec succès' });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement' });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email requis' });
    }

    const { data, error } = await supabase.from('newsletters').insert([
      {
        email,
        subscribed_at: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    res.json({ success: true, message: 'Inscription à la newsletter réussie' });
  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ error: 'Erreur lors de l\'inscription' });
  }
});

// Quote request
app.post('/api/quote', async (req: Request, res: Response) => {
  try {
    const { name, email, company, serviceType, message } = req.body;

    if (!name || !email || !serviceType) {
      return res.status(400).json({ error: 'Champs requis manquants' });
    }

    const { data, error } = await supabase.from('quotes').insert([
      {
        name,
        email,
        company: company || null,
        service_type: serviceType,
        message: message || null,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    res.json({ success: true, message: 'Demande de devis enregistrée' });
  } catch (error) {
    console.error('Quote error:', error);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement' });
  }
});

// ============================================================================
// STATIC FILES & SPA FALLBACK
// ============================================================================

// Serve static files from Vite build
const clientDistPath = path.resolve(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// SPA fallback - serve index.html for all non-API routes
app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(clientDistPath, 'index.html'));
});

// ============================================================================
// ERROR HANDLING
// ============================================================================

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// ============================================================================
// START SERVER
// ============================================================================

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from: ${clientDistPath}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
});
