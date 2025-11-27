# 🏗️ Architecture du projet SecureWeb

## Vue d'ensemble

SecureWeb est une application Next.js 16 utilisant l'App Router, TypeScript et Tailwind CSS. L'architecture privilégie la modularité, la réutilisabilité et la sécurité.

## Structure des dossiers

```
src/
├── app/                    # App Router (Pages et layouts)
├── components/             # Composants React
├── lib/                    # Logique métier et utilitaires
├── types/                  # Types TypeScript
└── data/                   # Données statiques
```

## Détail par dossier

### 📁 `src/app/` - Routing et Pages

```
app/
├── layout.tsx              # Layout racine (Header + Footer)
├── page.tsx                # Page d'accueil
├── globals.css             # Styles globaux et design tokens
├── outils/
│   ├── page.tsx            # Liste des outils
│   ├── password/page.tsx   # Générateur de mots de passe
│   ├── audit/page.tsx      # Audit de sécurité
│   └── ecard/page.tsx      # Générateur d'eCard
├── vpn/page.tsx            # Comparateur VPN
└── guides/
    ├── page.tsx            # Liste des guides
    └── [slug]/page.tsx     # Article dynamique
```

**Convention :**
- Chaque page exporte ses métadonnées (`export const metadata: Metadata`)
- Les pages sont des Server Components par défaut
- Les interactions utilisateur sont dans des Client Components

### 📁 `src/components/` - Composants React

```
components/
├── ui/                     # Composants UI réutilisables
│   ├── Button.tsx          # Bouton avec variants
│   ├── Card.tsx            # Carte avec sous-composants
│   └── Input.tsx           # Champ de texte
├── layout/                 # Composants de layout
│   ├── Header.tsx          # En-tête avec navigation
│   └── Footer.tsx          # Pied de page
└── tools/                  # Composants métier
    ├── PasswordGenerator.tsx
    ├── SecurityAudit.tsx
    ├── ECardGenerator.tsx
    └── VPNComparator.tsx
```

**Principes :**
- **ui/** : Composants purement visuels, sans logique métier
- **layout/** : Composants de structure (Header, Footer, etc.)
- **tools/** : Composants métier avec état et logique

**Pattern des composants UI :**
```typescript
interface ComponentProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Component = forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return <element className={cn(baseStyles, variantStyles)} {...props} />;
  }
);
```

### 📁 `src/lib/` - Logique et utilitaires

```
lib/
├── utils.ts                # Utilitaires généraux
│   └── cn()                # Fusion de classes Tailwind
│   └── copyToClipboard()   # Copie dans le presse-papier
│   └── formatDate()        # Formatage de dates
├── password.ts             # Logique du générateur de mots de passe
│   └── generatePassword()
│   └── evaluatePasswordStrength()
│   └── checkPasswordBreach()
└── audit.ts                # Logique de l'audit de sécurité
    └── calculateAuditResult()
    └── getLevelMessage()
```

**Principes :**
- Fonctions pures autant que possible
- Pas de side-effects
- Testables unitairement
- Documentation JSDoc

### 📁 `src/types/` - Types TypeScript

```typescript
// types/index.ts
export interface PasswordConfig { ... }
export interface SecurityAuditQuestion { ... }
export interface VPN { ... }
export interface Article { ... }
// etc.
```

**Convention :**
- Un seul fichier `index.ts` exporte tous les types
- Types nommés explicitement (pas de `type T = ...`)
- Interfaces préférées aux types pour les objets

### 📁 `src/data/` - Données statiques

```
data/
├── auditQuestions.ts       # Questions de l'audit (17)
├── vpnData.ts              # Base de données VPN (6)
└── articles.ts             # Articles du blog (3)
```

**Format :**
```typescript
export const items: Type[] = [
  { id: "unique-id", ... },
  // ...
];
```

## Design System

### Couleurs (CSS Variables)

```css
:root {
  --background: #0f172a;      /* Bleu nuit foncé */
  --foreground: #e2e8f0;      /* Gris clair */
  --primary: #06b6d4;         /* Cyan */
  --secondary: #10b981;       /* Vert */
  --warning: #f59e0b;         /* Orange */
  --danger: #ef4444;          /* Rouge */
  --muted: #475569;           /* Gris moyen */
  --border: #334155;          /* Bordure */
}
```

### Composants UI

Tous les composants UI suivent le même pattern :

1. **Variants** : `default`, `primary`, `secondary`, `danger`, `ghost`
2. **Sizes** : `sm`, `md`, `lg`
3. **States** : `disabled`, `hover`, `focus`, `active`
4. **Responsive** : Mobile-first

### Utilitaire `cn()`

Fusion intelligente de classes Tailwind :

```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  variant === "primary" && "primary-classes",
  className // Props externes
)} />
```

## Patterns de code

### Client Components

```typescript
"use client";

import { useState } from "react";

export default function Component() {
  const [state, setState] = useState();

  return <div>...</div>;
}
```

**Utiliser "use client" uniquement si :**
- Besoin d'hooks React (useState, useEffect, etc.)
- Gestion d'événements (onClick, onChange, etc.)
- Accès au DOM (useRef)

### Server Components (par défaut)

```typescript
// Pas de "use client"

export default function Page() {
  return <div>...</div>;
}
```

**Avantages :**
- Pas de JS côté client
- SEO optimal
- Performance maximale

### Métadonnées dynamiques

```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: `${data.title} | SecureWeb`,
    description: data.excerpt,
  };
}
```

## Sécurité

### Traitement local

Tous les outils fonctionnent côté client :

```typescript
// ❌ Mauvais
async function generatePassword() {
  const response = await fetch('/api/password');
  return response.json();
}

// ✅ Bon
function generatePassword(config: PasswordConfig): string {
  // Traitement local avec crypto.getRandomValues()
  return password;
}
```

### Validation des entrées

```typescript
// Utilisation de Zod (optionnel)
import { z } from "zod";

const schema = z.object({
  length: z.number().min(8).max(128),
  // ...
});
```

### Pas de données sensibles

```typescript
// ❌ Ne jamais stocker
localStorage.setItem('password', password);

// ✅ Seulement en mémoire
const [password, setPassword] = useState("");
```

## Performance

### Code Splitting

Next.js split automatiquement par route :

```
page.tsx        → /
outils/page.tsx → /outils
```

### Images

```typescript
import Image from "next/image";

<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority // Pour les images above-the-fold
/>
```

### Fonts

```typescript
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

## Conventions de code

### Nommage

- **Components** : PascalCase (`PasswordGenerator`)
- **Functions** : camelCase (`generatePassword`)
- **Constants** : UPPER_SNAKE_CASE (`MAX_LENGTH`)
- **Files** : kebab-case pour data (`audit-questions.ts`), PascalCase pour components (`Button.tsx`)

### Imports

```typescript
// 1. React
import { useState, useEffect } from "react";

// 2. Next.js
import Link from "next/link";
import Image from "next/image";

// 3. Librairies externes
import { Copy } from "lucide-react";

// 4. Composants internes
import Button from "@/components/ui/Button";

// 5. Lib et utils
import { cn } from "@/lib/utils";

// 6. Types
import type { PasswordConfig } from "@/types";
```

### Commentaires

```typescript
/**
 * Génère un mot de passe sécurisé selon la configuration
 *
 * @param config - Configuration du mot de passe
 * @returns Le mot de passe généré
 */
export function generatePassword(config: PasswordConfig): string {
  // Implementation
}
```

## Déploiement

### Build

```bash
npm run build
```

Génère :
- `.next/` - Build optimisé
- `out/` - Export statique (si configuré)

### Variables d'environnement

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.example.com
```

**Convention :**
- `NEXT_PUBLIC_*` : Exposé au client
- Sans préfixe : Serveur uniquement

## Tests (à implémenter)

### Structure recommandée

```
__tests__/
├── components/
│   └── Button.test.tsx
├── lib/
│   └── password.test.ts
└── e2e/
    └── audit.spec.ts
```

### Outils suggérés

- **Unit** : Jest + React Testing Library
- **E2E** : Playwright ou Cypress
- **Type-checking** : TypeScript strict mode

## Ressources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Patterns](https://reactpatterns.com)

---

**Cette architecture privilégie :**
- ✅ Simplicité
- ✅ Maintenabilité
- ✅ Performance
- ✅ Sécurité
- ✅ Scalabilité
