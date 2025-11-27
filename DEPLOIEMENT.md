# 🚀 Guide de déploiement

## Option 1 : Vercel (Recommandé) ⭐

Vercel est la plateforme officielle de Next.js et offre un déploiement gratuit.

### Étapes :

1. **Créez un compte Vercel**
   - Allez sur https://vercel.com
   - Connectez-vous avec votre compte GitHub

2. **Importez le projet**
   - Cliquez sur "Add New..." → "Project"
   - Sélectionnez le dépôt `Cybersecurity-website`
   - Cliquez sur "Import"

3. **Configurez le projet**
   - Framework Preset : **Next.js** (détecté automatiquement)
   - Build Command : `npm run build` (par défaut)
   - Output Directory : `.next` (par défaut)
   - Install Command : `npm install` (par défaut)

4. **Déployez**
   - Cliquez sur "Deploy"
   - Attendez 2-3 minutes
   - Votre site sera disponible sur `https://votre-projet.vercel.app`

### Avantages Vercel :
✅ Déploiement automatique à chaque push sur GitHub
✅ HTTPS gratuit
✅ CDN mondial ultra-rapide
✅ Preview deployments pour chaque PR
✅ 100% gratuit pour les projets personnels

---

## Option 2 : Netlify

### Étapes :

1. **Créez un compte Netlify**
   - Allez sur https://netlify.com
   - Connectez-vous avec votre compte GitHub

2. **Importez le projet**
   - Cliquez sur "Add new site" → "Import an existing project"
   - Choisissez GitHub et sélectionnez `Cybersecurity-website`

3. **Configurez le build**
   - Build command : `npm run build`
   - Publish directory : `.next`
   - **IMPORTANT** : Ajoutez ces variables d'environnement :
     - `NODE_VERSION` = `18`

4. **Déployez**
   - Cliquez sur "Deploy site"
   - Votre site sera disponible sur `https://votre-projet.netlify.app`

---

## Option 3 : GitHub Pages (Export statique)

⚠️ **Limitation** : Next.js nécessite un serveur Node.js pour certaines fonctionnalités. GitHub Pages ne supporte que les sites statiques.

Pour utiliser GitHub Pages, vous devez exporter le site en mode statique :

### Étapes :

1. **Modifiez `next.config.ts`** :
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  }
};
```

2. **Buildez le site** :
```bash
npm run build
```

3. **Configurez GitHub Pages** :
   - Allez dans Settings → Pages
   - Source : Deploy from a branch
   - Branch : `main` / `out` folder
   - Save

⚠️ **Note** : Certaines fonctionnalités Next.js ne fonctionneront pas en mode statique (API routes, ISR, etc.)

---

## Recommandation finale

**Utilisez Vercel** 🎯 - C'est la solution la plus simple et la plus performante pour Next.js.

Le déploiement prend littéralement 2 minutes et vous obtiendrez :
- Une URL publique immédiatement
- HTTPS automatique
- Déploiements automatiques à chaque push
- 100% gratuit

### Lien de déploiement rapide Vercel :
👉 https://vercel.com/new/clone?repository-url=https://github.com/fjg67/Cybersecurity-website

---

## Support

Si vous rencontrez des problèmes :
- Documentation Vercel : https://vercel.com/docs
- Documentation Next.js : https://nextjs.org/docs/deployment
