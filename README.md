# SecureWeb - Site Web de Cybersécurité

Un site web éducatif et pratique dédié à la cybersécurité grand public. L'objectif est d'accompagner les utilisateurs dans la sécurisation de leurs données personnelles à travers des outils interactifs, des guides pédagogiques et des recommandations concrètes.

## 🚀 Fonctionnalités

### ✅ Modules implémentés

#### 1. Page d'accueil
- Hero section avec présentation claire
- Mise en avant des 4 outils principaux
- Section "Pourquoi nous choisir" avec arguments clés
- Call-to-action vers l'audit de sécurité
- Design responsive et moderne

#### 2. Générateur de mots de passe
- **Génération** : Mots de passe aléatoires avec paramètres personnalisables
  - Longueur de 8 à 128 caractères
  - Majuscules, minuscules, chiffres, symboles
  - Exclusion des caractères ambigus (0/O, 1/l)
- **Évaluation** : Force du mot de passe en temps réel (5 niveaux)
- **Vérification** : Check de compromission via API Have I Been Pwned (k-anonymity)
- **Phrases de passe** : Génération de passphrases mémorisables
- **Export** : Copie en un clic
- **Conseils** : Guide des bonnes pratiques intégré

#### 3. Audit de sécurité personnel
- **Questionnaire** : 17 questions réparties en 5 catégories
  - Mots de passe (4 questions)
  - Navigation web (3 questions)
  - Réseaux sociaux (3 questions)
  - Appareils (3 questions)
  - Sauvegardes (3 questions)
- **Scoring** : Score sur 100 avec 5 niveaux (critique à excellent)
- **Analyse** : Scores détaillés par catégorie
- **Recommandations** : Jusqu'à 8 recommandations personnalisées
- **Confidentialité** : Traitement 100% local (aucune donnée envoyée)

#### 4. Comparateur VPN
- **Base de données** : 6 VPN majeurs analysés
  - NordVPN, ProtonVPN, Mullvad, Surfshark, ExpressVPN, VyprVPN
- **Critères** : Note, prix, vitesse, sécurité, pays, streaming, no-logs
- **Filtres** : Compatible streaming, politique no-logs, tri par note/prix
- **Détails** : Avantages/inconvénients, fonctionnalités, plateformes
- **Guide** : Tutoriel d'installation et conseils d'utilisation

#### 5. Générateur d'eCard sécurisée
- **Personnalisation** :
  - Pseudonyme/nom
  - Avatar : **Upload d'image depuis l'ordinateur** (JPG, PNG, GIF - Max 5MB) ✨
  - Bio/description
  - Clé PGP publique
  - Contacts multiples (email, Signal, Matrix, custom)
- **Prévisualisation** : Rendu en temps réel de la carte avec avatar
- **Gestion d'image** :
  - Upload via explorateur de fichiers
  - Prévisualisation instantanée
  - Bouton pour changer ou supprimer l'image
  - Traitement 100% local (aucun upload serveur)
- **Export** :
  - PNG haute résolution (avec avatar)
  - PDF professionnel
  - QR Code avec vos informations
  - JSON (données brutes)
- **Options** : Badge "chiffré" optionnel

#### 6. Centre de ressources
- **Articles** : 3 guides détaillés pré-rédigés
  - "Comment choisir son VPN en 2025" (8 min)
  - "Les 10 erreurs qui compromettent vos mots de passe" (6 min)
  - "Phishing : comment reconnaître une arnaque" (7 min)
- **Catégories** : Phishing, ransomware, vie privée, chiffrement, général
- **Tags** : Système de tags pour navigation facile
- **Markdown** : Rendu professionnel avec react-markdown
- **Navigation** : Articles similaires suggérés
- **Métadonnées** : Temps de lecture, date de publication, auteur

#### 7. Design System complet
- **Palette** : Couleurs cybersécurité (bleu nuit, cyan, vert, orange, rouge)
- **Composants UI** : Button, Card, Input, tous personnalisables
- **Layout** : Header et Footer responsive avec menu mobile
- **Typographie** : Police Inter optimisée
- **Scrollbar** : Personnalisée avec couleurs du thème
- **Accessibilité** : Focus states, labels, contraste

### 🔨 Évolutions futures possibles

- Outils complémentaires (vérificateur de liens, analyseur d'en-têtes)
- Plus d'articles et guides
- Glossaire cybersécurité
- Newsletter sécurité
- Système de recherche
- Mode hors-ligne (PWA)

## 🛠️ Technologies utilisées

- **Framework** : Next.js 16 (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS avec design tokens personnalisés
- **Icônes** : Lucide React
- **Utilitaires** : clsx, tailwind-merge, date-fns
- **Markdown** : react-markdown (affichage des articles)
- **Export** : html2canvas, jspdf (export d'eCard)
- **QR Code** : qrcode (génération de QR codes)

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## 📁 Structure du projet

```
cybersecurity-website/
├── src/
│   ├── app/                    # Pages Next.js (App Router)
│   │   ├── layout.tsx          # Layout principal avec Header/Footer
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── outils/
│   │   │   ├── page.tsx        # Liste des outils
│   │   │   ├── password/       # Générateur de mots de passe
│   │   │   ├── audit/          # Audit de sécurité
│   │   │   └── ecard/          # Générateur d'eCard
│   │   ├── vpn/                # Comparateur VPN
│   │   └── guides/             # Centre de ressources
│   │       ├── page.tsx        # Liste des guides
│   │       └── [slug]/         # Article individuel
│   ├── components/
│   │   ├── ui/                 # Composants UI réutilisables
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/             # Composants de layout
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── tools/              # Composants d'outils
│   │       ├── PasswordGenerator.tsx
│   │       ├── SecurityAudit.tsx
│   │       ├── ECardGenerator.tsx
│   │       └── VPNComparator.tsx
│   ├── lib/                    # Fonctions utilitaires
│   │   ├── utils.ts
│   │   ├── password.ts
│   │   └── audit.ts
│   ├── types/                  # Types TypeScript
│   │   └── index.ts
│   └── data/                   # Données statiques
│       ├── auditQuestions.ts   # Questions de l'audit
│       ├── vpnData.ts          # Base de données VPN
│       └── articles.ts         # Articles du blog
├── public/                     # Fichiers statiques
└── README.md
```

## 🎨 Design System

### Palette de couleurs

- **Background** : `#0f172a` (Bleu nuit foncé)
- **Foreground** : `#e2e8f0` (Gris clair)
- **Primary** : `#06b6d4` (Cyan - éléments positifs)
- **Secondary** : `#10b981` (Vert - succès)
- **Warning** : `#f59e0b` (Orange - alertes)
- **Danger** : `#ef4444` (Rouge - erreurs)

### Composants UI

Tous les composants UI sont créés avec Tailwind CSS et supportent les variants, tailles et états personnalisés.

## 🔒 Sécurité

- **HTTPS** : Certificat TLS obligatoire en production
- **Confidentialité** : Aucune donnée générée par les outils n'est stockée côté serveur
- **K-Anonymity** : Vérification des mots de passe compromis sans exposer le mot de passe complet
- **CSP** : Content Security Policy à configurer en production
- **Conformité RGPD** : Politique de confidentialité et mentions légales à ajouter

## 🎯 Pages disponibles

Une fois le serveur lancé, vous pouvez accéder à :

- **Accueil** : http://localhost:3000
- **Tous les outils** : http://localhost:3000/outils
- **Générateur de mots de passe** : http://localhost:3000/outils/password
- **Audit de sécurité** : http://localhost:3000/outils/audit
- **Générateur d'eCard** : http://localhost:3000/outils/ecard
- **Comparateur VPN** : http://localhost:3000/vpn
- **Centre de ressources** : http://localhost:3000/guides
- **Articles** :
  - http://localhost:3000/guides/comment-choisir-vpn-2025
  - http://localhost:3000/guides/10-erreurs-mots-de-passe
  - http://localhost:3000/guides/phishing-reconnaitre-arnaque

## 🤝 Contribution

Ce projet est en cours de développement. Les contributions sont les bienvenues !

## 📄 License

Tous droits réservés - 2025

## 🔗 Liens utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Have I Been Pwned API](https://haveibeenpwned.com/API/v3)
