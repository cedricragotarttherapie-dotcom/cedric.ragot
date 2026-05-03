# 🎵 Cédric Ragot - Sonothérapie

Site professionnel de sonothérapie et massage sonore, production-ready pour Render avec Supabase.

## 🚀 Stack Technique

- **Frontend** : React 18 + TypeScript + Vite + Tailwind CSS
- **Backend** : Express + Node 20
- **Database** : Supabase (PostgreSQL)
- **Deployment** : Render
- **Build** : esbuild + Vite

## 📦 Installation

```bash
# Installer les dépendances
pnpm install

# Développement
pnpm run dev

# Build production
pnpm run build

# Démarrer le serveur production
pnpm start
```

## 🌍 Environnement

Créer un fichier `.env` à la racine :

```
NODE_ENV=production
PORT=3000

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key

VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## 📋 Pages

- **Accueil** : Présentation générale
- **Particuliers** : Services et tarifs pour particuliers
- **Entreprises** : Services et tarifs pour entreprises
- **FAQ** : Questions fréquentes et formulaire de contact

## 🤖 Chatbot

Chatbot IA intelligent :
- Répond aux questions FAQ
- Utilise Supabase pour les données
- Fallback professionnel pour les questions hors sujet
- Accessible en coin inférieur droit

## 🚀 Déploiement Render

Voir [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md) pour les instructions complètes.

**Build Command** :
```bash
pnpm install && pnpm run build
```

**Start Command** :
```bash
node dist/server/index.mjs
```

## 📊 Structure

```
├── server/          # Backend Express
├── client/          # Frontend React + Vite
│   ├── src/
│   │   ├── pages/   # Pages React
│   │   ├── components/
│   │   └── lib/
│   └── dist/        # Build output
├── package.json
└── RENDER_DEPLOYMENT.md
```

## ✅ Vérification

```bash
# Type checking
pnpm run type-check

# Tests
pnpm run test

# Linting
pnpm run lint
```

## 📞 Support

Pour les problèmes de déploiement, voir [RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md#troubleshooting)

---

**Version** : 1.0.0  
**Dernière mise à jour** : 2024-01-15
"# cedric.ragot" 
