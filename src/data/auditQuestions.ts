import type { SecurityAuditQuestion } from "@/types";

export const auditQuestions: SecurityAuditQuestion[] = [
  // Catégorie : Mots de passe
  {
    id: "pwd-1",
    category: "passwords",
    question: "Combien de mots de passe différents utilisez-vous ?",
    options: [
      {
        label: "Le même partout ou presque",
        value: "same",
        points: 0,
      },
      {
        label: "3-5 mots de passe que je réutilise",
        value: "few",
        points: 5,
      },
      {
        label: "Un mot de passe unique pour chaque site important",
        value: "unique",
        points: 15,
      },
      {
        label: "Un mot de passe unique partout avec un gestionnaire",
        value: "manager",
        points: 20,
      },
    ],
  },
  {
    id: "pwd-2",
    category: "passwords",
    question: "Comment créez-vous vos mots de passe ?",
    options: [
      {
        label: "Dates, prénoms ou mots simples",
        value: "simple",
        points: 0,
      },
      {
        label: "Mots avec quelques chiffres",
        value: "medium",
        points: 5,
      },
      {
        label: "Combinaisons complexes que je mémorise",
        value: "complex",
        points: 10,
      },
      {
        label: "Générés aléatoirement par un outil",
        value: "generated",
        points: 20,
      },
    ],
  },
  {
    id: "pwd-3",
    category: "passwords",
    question: "Utilisez-vous l'authentification à deux facteurs (2FA) ?",
    options: [
      {
        label: "Jamais",
        value: "never",
        points: 0,
      },
      {
        label: "Sur 1-2 comptes importants",
        value: "few",
        points: 10,
      },
      {
        label: "Sur la plupart de mes comptes importants",
        value: "most",
        points: 15,
      },
      {
        label: "Partout où c'est disponible",
        value: "everywhere",
        points: 20,
      },
    ],
  },
  {
    id: "pwd-4",
    category: "passwords",
    question: "Où stockez-vous vos mots de passe ?",
    options: [
      {
        label: "Dans ma tête uniquement",
        value: "memory",
        points: 5,
      },
      {
        label: "Sur papier ou fichier texte",
        value: "paper",
        points: 0,
      },
      {
        label: "Dans le navigateur",
        value: "browser",
        points: 10,
      },
      {
        label: "Gestionnaire de mots de passe dédié",
        value: "manager",
        points: 20,
      },
    ],
  },

  // Catégorie : Navigation
  {
    id: "nav-1",
    category: "navigation",
    question: "Comment vérifiez-vous qu'un site est sécurisé ?",
    options: [
      {
        label: "Je ne vérifie pas vraiment",
        value: "none",
        points: 0,
      },
      {
        label: "Je regarde l'URL rapidement",
        value: "url",
        points: 5,
      },
      {
        label: "Je vérifie le cadenas HTTPS",
        value: "https",
        points: 15,
      },
      {
        label: "Je vérifie HTTPS + certificat + URL complète",
        value: "full",
        points: 20,
      },
    ],
  },
  {
    id: "nav-2",
    category: "navigation",
    question: "Utilisez-vous un bloqueur de publicités et de trackers ?",
    options: [
      {
        label: "Non",
        value: "no",
        points: 0,
      },
      {
        label: "Bloqueur de pub uniquement",
        value: "adblock",
        points: 10,
      },
      {
        label: "Bloqueur de pub + anti-tracking",
        value: "full",
        points: 20,
      },
    ],
  },
  {
    id: "nav-3",
    category: "navigation",
    question: "Utilisez-vous un VPN ?",
    options: [
      {
        label: "Jamais",
        value: "never",
        points: 0,
      },
      {
        label: "Parfois sur WiFi public",
        value: "public",
        points: 10,
      },
      {
        label: "Régulièrement",
        value: "regular",
        points: 15,
      },
      {
        label: "Systématiquement",
        value: "always",
        points: 20,
      },
    ],
  },

  // Catégorie : Réseaux sociaux
  {
    id: "social-1",
    category: "social",
    question: "Quel est le niveau de confidentialité de vos profils sociaux ?",
    options: [
      {
        label: "Tout est public",
        value: "public",
        points: 0,
      },
      {
        label: "Partiellement restreint",
        value: "partial",
        points: 10,
      },
      {
        label: "Privé, sauf amis",
        value: "friends",
        points: 15,
      },
      {
        label: "Très restreint avec vérification",
        value: "strict",
        points: 20,
      },
    ],
  },
  {
    id: "social-2",
    category: "social",
    question: "Partagez-vous des informations personnelles sensibles en ligne ?",
    options: [
      {
        label: "Oui régulièrement (adresse, téléphone, etc.)",
        value: "often",
        points: 0,
      },
      {
        label: "Parfois sans trop réfléchir",
        value: "sometimes",
        points: 5,
      },
      {
        label: "Rarement et avec prudence",
        value: "rarely",
        points: 15,
      },
      {
        label: "Jamais",
        value: "never",
        points: 20,
      },
    ],
  },
  {
    id: "social-3",
    category: "social",
    question: "Vérifiez-vous les permissions des applications tierces ?",
    options: [
      {
        label: "Non, j'accepte tout",
        value: "accept",
        points: 0,
      },
      {
        label: "Parfois",
        value: "sometimes",
        points: 10,
      },
      {
        label: "Toujours avant d'autoriser",
        value: "always",
        points: 20,
      },
    ],
  },

  // Catégorie : Appareils
  {
    id: "device-1",
    category: "devices",
    question: "Comment protégez-vous vos appareils (PC, smartphone) ?",
    options: [
      {
        label: "Pas de verrouillage",
        value: "none",
        points: 0,
      },
      {
        label: "Code PIN simple",
        value: "pin",
        points: 5,
      },
      {
        label: "Mot de passe ou schéma complexe",
        value: "password",
        points: 15,
      },
      {
        label: "Biométrie + mot de passe fort",
        value: "biometric",
        points: 20,
      },
    ],
  },
  {
    id: "device-2",
    category: "devices",
    question: "Faites-vous les mises à jour système et applications ?",
    options: [
      {
        label: "Rarement ou jamais",
        value: "never",
        points: 0,
      },
      {
        label: "Quand je pense à le faire",
        value: "sometimes",
        points: 5,
      },
      {
        label: "Régulièrement",
        value: "regular",
        points: 15,
      },
      {
        label: "Automatiquement et immédiatement",
        value: "auto",
        points: 20,
      },
    ],
  },
  {
    id: "device-3",
    category: "devices",
    question: "Avez-vous un antivirus/antimalware ?",
    options: [
      {
        label: "Non",
        value: "no",
        points: 0,
      },
      {
        label: "Celui fourni avec le système",
        value: "default",
        points: 15,
      },
      {
        label: "Antivirus professionnel à jour",
        value: "pro",
        points: 20,
      },
    ],
  },

  // Catégorie : Sauvegardes
  {
    id: "backup-1",
    category: "backups",
    question: "Faites-vous des sauvegardes de vos données importantes ?",
    options: [
      {
        label: "Jamais",
        value: "never",
        points: 0,
      },
      {
        label: "Rarement",
        value: "rarely",
        points: 5,
      },
      {
        label: "Régulièrement (mensuel)",
        value: "monthly",
        points: 15,
      },
      {
        label: "Automatiquement et fréquemment",
        value: "auto",
        points: 20,
      },
    ],
  },
  {
    id: "backup-2",
    category: "backups",
    question: "Où sont stockées vos sauvegardes ?",
    options: [
      {
        label: "Pas de sauvegarde",
        value: "none",
        points: 0,
      },
      {
        label: "Sur le même appareil",
        value: "same",
        points: 5,
      },
      {
        label: "Disque externe ou cloud",
        value: "external",
        points: 15,
      },
      {
        label: "Multiple emplacements (règle 3-2-1)",
        value: "multiple",
        points: 20,
      },
    ],
  },
  {
    id: "backup-3",
    category: "backups",
    question: "Vos sauvegardes sont-elles chiffrées ?",
    options: [
      {
        label: "Je ne sais pas",
        value: "unknown",
        points: 0,
      },
      {
        label: "Non",
        value: "no",
        points: 5,
      },
      {
        label: "Partiellement",
        value: "partial",
        points: 10,
      },
      {
        label: "Oui, entièrement chiffrées",
        value: "yes",
        points: 20,
      },
    ],
  },
];

export const categoryNames = {
  passwords: "Mots de passe",
  navigation: "Navigation web",
  social: "Réseaux sociaux",
  devices: "Appareils",
  backups: "Sauvegardes",
};
