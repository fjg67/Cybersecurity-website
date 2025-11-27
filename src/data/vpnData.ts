import type { VPN } from "@/types";

export const vpnList: VPN[] = [
  {
    id: "nordvpn",
    name: "NordVPN",
    logo: "/vpn/nordvpn.svg",
    rating: 4.7,
    price: {
      monthly: 12.99,
      yearly: 4.99,
    },
    features: {
      speed: 5,
      security: 5,
      streaming: true,
      noLogs: true,
      countries: 60,
      devices: 6,
    },
    pros: [
      "Excellent rapport qualité-prix",
      "Très rapide et stable",
      "Politique stricte de non-conservation des logs",
      "Double VPN et Onion over VPN",
      "Bloqueur de publicités intégré (CyberSec)",
    ],
    cons: [
      "Interface parfois complexe pour les débutants",
      "Basé au Panama (juridiction acceptable mais pas idéale)",
    ],
    platforms: ["windows", "macos", "ios", "android", "linux"],
  },
  {
    id: "protonvpn",
    name: "ProtonVPN",
    logo: "/vpn/protonvpn.svg",
    rating: 4.6,
    price: {
      monthly: 9.99,
      yearly: 4.99,
    },
    features: {
      speed: 4,
      security: 5,
      streaming: true,
      noLogs: true,
      countries: 67,
      devices: 10,
    },
    pros: [
      "Basé en Suisse avec excellente protection de la vie privée",
      "Version gratuite disponible (limitée)",
      "Open source et audité",
      "Secure Core (VPN multi-hop)",
      "Excellent pour la confidentialité",
    ],
    cons: [
      "Plus cher que certains concurrents",
      "Vitesses légèrement inférieures sur longue distance",
    ],
    platforms: ["windows", "macos", "ios", "android", "linux"],
  },
  {
    id: "mullvad",
    name: "Mullvad VPN",
    logo: "/vpn/mullvad.svg",
    rating: 4.5,
    price: {
      monthly: 5.0,
      yearly: 5.0,
    },
    features: {
      speed: 4,
      security: 5,
      streaming: false,
      noLogs: true,
      countries: 40,
      devices: 5,
    },
    pros: [
      "Prix fixe très compétitif (5€/mois)",
      "Anonymat maximal (pas besoin d'email)",
      "Open source et audité indépendamment",
      "Basé en Suède (bonnes lois sur la vie privée)",
      "Politique de confidentialité exemplaire",
    ],
    cons: [
      "Pas optimisé pour le streaming",
      "Moins de serveurs que les gros acteurs",
      "Interface minimaliste (peut être un pro pour certains)",
    ],
    platforms: ["windows", "macos", "ios", "android", "linux"],
  },
  {
    id: "surfshark",
    name: "Surfshark",
    logo: "/vpn/surfshark.svg",
    rating: 4.4,
    price: {
      monthly: 12.95,
      yearly: 2.49,
    },
    features: {
      speed: 4,
      security: 4,
      streaming: true,
      noLogs: true,
      countries: 100,
      devices: 999, // Illimité
    },
    pros: [
      "Connexions simultanées illimitées",
      "Excellent prix en abonnement long terme",
      "Interface très simple et intuitive",
      "Bon pour le streaming (Netflix, etc.)",
      "Fonctionnalités anti-tracking avancées",
    ],
    cons: [
      "Entreprise relativement jeune",
      "Vitesses variables selon les serveurs",
    ],
    platforms: ["windows", "macos", "ios", "android", "linux"],
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    logo: "/vpn/expressvpn.svg",
    rating: 4.6,
    price: {
      monthly: 12.95,
      yearly: 6.67,
    },
    features: {
      speed: 5,
      security: 5,
      streaming: true,
      noLogs: true,
      countries: 94,
      devices: 5,
    },
    pros: [
      "Vitesses excellentes et constantes",
      "Interface ultra-simple",
      "Excellent pour le streaming",
      "Support client réactif 24/7",
      "Serveurs dans le plus grand nombre de pays",
    ],
    cons: [
      "Plus cher que la concurrence",
      "Basé dans les îles Vierges britanniques",
      "Pas de version gratuite",
    ],
    platforms: ["windows", "macos", "ios", "android", "linux"],
  },
  {
    id: "vyprvpn",
    name: "VyprVPN",
    logo: "/vpn/vyprvpn.svg",
    rating: 4.3,
    price: {
      monthly: 10.0,
      yearly: 3.33,
    },
    features: {
      speed: 4,
      security: 5,
      streaming: true,
      noLogs: true,
      countries: 70,
      devices: 5,
    },
    pros: [
      "Possède et gère sa propre infrastructure (pas de tiers)",
      "Protocole Chameleon pour contourner la censure",
      "Audité indépendamment pour la politique no-logs",
      "Interface claire et performante",
    ],
    cons: [
      "Prix mensuel élevé",
      "Moins connu que les leaders du marché",
    ],
    platforms: ["windows", "macos", "ios", "android", "linux"],
  },
];

export const vpnCategories = {
  best_overall: {
    title: "Meilleur VPN global",
    description: "Le meilleur équilibre entre prix, sécurité et performance",
    vpnId: "nordvpn",
  },
  best_privacy: {
    title: "Meilleure confidentialité",
    description: "Pour l'anonymat et la protection maximale de la vie privée",
    vpnId: "mullvad",
  },
  best_streaming: {
    title: "Meilleur pour le streaming",
    description: "Débloquez Netflix, Disney+, etc. facilement",
    vpnId: "expressvpn",
  },
  best_value: {
    title: "Meilleur rapport qualité-prix",
    description: "Prix imbattable avec connexions illimitées",
    vpnId: "surfshark",
  },
};
