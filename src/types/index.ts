// Types pour le générateur de mots de passe
export interface PasswordConfig {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeAmbiguous: boolean;
}

export interface PasswordStrength {
  score: number; // 0-4
  label: "Très faible" | "Faible" | "Moyen" | "Fort" | "Très fort";
  color: string;
}

// Types pour l'audit de sécurité
export interface SecurityAuditQuestion {
  id: string;
  category: "passwords" | "navigation" | "social" | "devices" | "backups";
  question: string;
  options: {
    label: string;
    value: string;
    points: number;
  }[];
}

export interface SecurityAuditResult {
  score: number; // 0-100
  category: string;
  recommendations: string[];
  level: "critique" | "faible" | "moyen" | "bon" | "excellent";
}

// Types pour le guide VPN
export interface VPN {
  id: string;
  name: string;
  logo: string;
  rating: number;
  price: {
    monthly: number;
    yearly: number;
  };
  features: {
    speed: number; // 1-5
    security: number; // 1-5
    streaming: boolean;
    noLogs: boolean;
    countries: number;
    devices: number;
  };
  pros: string[];
  cons: string[];
  platforms: ("windows" | "macos" | "ios" | "android" | "linux")[];
  affiliate?: string;
}

export interface VPNFilters {
  maxPrice?: number;
  streaming?: boolean;
  noLogs?: boolean;
  minCountries?: number;
}

// Types pour l'eCard
export interface ECard {
  username: string;
  avatar?: string;
  pgpKey?: string;
  contacts: {
    type: "email" | "signal" | "matrix" | "custom";
    value: string;
    label?: string;
  }[];
  bio?: string;
  encrypted: boolean;
}

// Types pour les articles
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: "phishing" | "ransomware" | "privacy" | "encryption" | "general";
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
  readTime: number; // en minutes
  featured?: boolean;
}

// Types pour la navigation
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}
