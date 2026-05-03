# 🚀 Guide de Déploiement sur Render

## ⚡ Configuration Render

### Build Command
```bash
pnpm install && pnpm run build
```

### Start Command
```bash
node dist/server/index.mjs
```

### Environment Variables

Ajouter ces variables d'environnement dans le dashboard Render :

```
NODE_ENV=production
PORT=3000

# Supabase Server (Backend)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key

# Supabase Client (Frontend)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

---

## 📋 Étapes de Déploiement

### 1. Préparer le code

```bash
# Cloner le repository
git clone https://github.com/your-username/cedric-ragot-render.git
cd cedric-ragot-render

# Installer les dépendances
pnpm install

# Tester localement
pnpm run dev
```

### 2. Créer un repository GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/cedric-ragot-render.git
git branch -M main
git push -u origin main
```

### 3. Créer un service Render

1. Aller sur https://render.com
2. Cliquer "New +" → "Web Service"
3. Connecter votre repository GitHub
4. Remplir les informations :
   - **Name** : `cedric-ragot-sonotherapie`
   - **Environment** : `Node`
   - **Region** : Europe (Frankfurt)
   - **Branch** : `main`

### 4. Configurer le Build

- **Build Command** : `pnpm install && pnpm run build`
- **Start Command** : `node dist/server/index.mjs`

### 5. Ajouter les Variables d'Environnement

Dans le dashboard Render :
1. Aller à "Environment"
2. Ajouter toutes les variables du fichier `.env.example`

### 6. Déployer

Cliquer "Create Web Service" et attendre le déploiement (~5-10 minutes)

---

## 🔍 Vérification Post-Déploiement

### 1. Tester l'API
```bash
curl https://your-render-url.onrender.com/api/health
```

Réponse attendue :
```json
{"status":"ok","timestamp":"2024-01-15T10:30:00.000Z"}
```

### 2. Tester le Frontend
Aller sur `https://your-render-url.onrender.com` et vérifier :
- ✅ Page d'accueil charge correctement
- ✅ Navigation fonctionne (Accueil, Particuliers, Entreprises, FAQ)
- ✅ Chatbot apparaît en bas à droite
- ✅ Formulaires fonctionnent

### 3. Tester le Chatbot
Cliquer sur le chatbot et poser une question :
```
"Qu'est-ce que la sonothérapie?"
```

Réponse attendue :
```
"La sonothérapie est une thérapie holistique..."
```

---

## 🐛 Troubleshooting

### Erreur : "Cannot find module"
- Vérifier que `pnpm install` a bien exécuté
- Vérifier les dépendances dans `package.json`

### Erreur : "SUPABASE_URL is missing"
- Vérifier que les variables d'environnement sont bien configurées
- Vérifier l'orthographe exacte des clés

### Frontend affiche du code au lieu du site
- Vérifier que `client/dist` existe après le build
- Vérifier le chemin dans `server/index.ts` : `path.resolve(__dirname, '../client/dist')`

### Chatbot ne répond pas
- Vérifier que `/api/chatbot` est accessible
- Vérifier les logs Render : "Logs" dans le dashboard

---

## 📊 Structure Finale

```
cedric-ragot-render/
├── server/
│   └── index.ts                 # Express backend
├── client/
│   ├── src/
│   │   ├── pages/              # Pages React
│   │   ├── components/         # Composants
│   │   ├── lib/                # Utilitaires
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.ts
│   └── tsconfig.json
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── .env.example
└── RENDER_DEPLOYMENT.md
```

---

## ✅ Checklist Pré-Déploiement

- [ ] Code poussé sur GitHub
- [ ] Variables d'environnement configurées dans Render
- [ ] Build command correct : `pnpm install && pnpm run build`
- [ ] Start command correct : `node dist/server/index.mjs`
- [ ] Supabase credentials valides
- [ ] Pas d'erreurs TypeScript : `pnpm run type-check`
- [ ] Tests passants : `pnpm run test`

---

## 🎉 Après le Déploiement

1. **Domaine personnalisé** (optionnel)
   - Aller à "Settings" → "Custom Domain"
   - Ajouter votre domaine

2. **SSL/TLS**
   - Automatique sur Render ✅

3. **Monitoring**
   - Vérifier les logs régulièrement
   - Configurer les alertes si nécessaire

---

## 📞 Support

Pour toute question :
- Vérifier les logs Render
- Consulter la documentation Render : https://render.com/docs
- Vérifier la documentation Supabase : https://supabase.com/docs
