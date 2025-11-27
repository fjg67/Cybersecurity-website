import type { SecurityAuditResult } from "@/types";

interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
}

/**
 * Calcule le résultat de l'audit de sécurité
 */
export function calculateAuditResult(
  categoryScores: CategoryScore[]
): SecurityAuditResult {
  const totalScore = categoryScores.reduce((sum, cat) => sum + cat.score, 0);
  const maxScore = categoryScores.reduce((sum, cat) => sum + cat.maxScore, 0);
  const percentage = Math.round((totalScore / maxScore) * 100);

  // Déterminer le niveau
  let level: SecurityAuditResult["level"];
  if (percentage < 20) level = "critique";
  else if (percentage < 40) level = "faible";
  else if (percentage < 60) level = "moyen";
  else if (percentage < 80) level = "bon";
  else level = "excellent";

  // Générer les recommandations
  const recommendations = generateRecommendations(categoryScores, level);

  return {
    score: percentage,
    category: getBestCategory(categoryScores),
    recommendations,
    level,
  };
}

/**
 * Trouve la catégorie avec le meilleur score
 */
function getBestCategory(categoryScores: CategoryScore[]): string {
  const best = categoryScores.reduce((best, current) => {
    const currentPercent = (current.score / current.maxScore) * 100;
    const bestPercent = (best.score / best.maxScore) * 100;
    return currentPercent > bestPercent ? current : best;
  });
  return best.category;
}

/**
 * Génère des recommandations basées sur les scores
 */
function generateRecommendations(
  categoryScores: CategoryScore[],
  level: SecurityAuditResult["level"]
): string[] {
  const recommendations: string[] = [];
  const allRecommendations = {
    passwords: [
      "Utilisez un gestionnaire de mots de passe comme Bitwarden ou 1Password",
      "Activez l'authentification à deux facteurs (2FA) sur tous vos comptes importants",
      "Générez des mots de passe uniques pour chaque service",
      "Vérifiez si vos mots de passe ont été compromis sur haveibeenpwned.com",
    ],
    navigation: [
      "Installez un bloqueur de publicités et de trackers (uBlock Origin)",
      "Vérifiez toujours le certificat HTTPS avant de saisir des informations sensibles",
      "Utilisez un VPN de confiance, surtout sur les réseaux WiFi publics",
      "Activez la protection anti-phishing de votre navigateur",
    ],
    social: [
      "Vérifiez et limitez vos paramètres de confidentialité sur les réseaux sociaux",
      "Ne partagez jamais d'informations personnelles sensibles publiquement",
      "Révisez régulièrement les applications tierces connectées à vos comptes",
      "Activez les notifications de connexion inhabituelle",
    ],
    devices: [
      "Activez le verrouillage automatique avec un mot de passe fort ou biométrie",
      "Maintenez votre système et vos applications à jour",
      "Installez et configurez un antivirus/antimalware fiable",
      "Chiffrez le disque dur de vos appareils",
    ],
    backups: [
      "Mettez en place une stratégie de sauvegarde 3-2-1 (3 copies, 2 supports, 1 hors site)",
      "Automatisez vos sauvegardes pour ne pas les oublier",
      "Chiffrez vos sauvegardes pour protéger vos données",
      "Testez régulièrement la restauration de vos sauvegardes",
    ],
  };

  // Ajouter des recommandations pour les catégories les plus faibles
  const sortedCategories = [...categoryScores].sort((a, b) => {
    const aPercent = (a.score / a.maxScore) * 100;
    const bPercent = (b.score / b.maxScore) * 100;
    return aPercent - bPercent;
  });

  // Prendre les 3 catégories les plus faibles
  const weakCategories = sortedCategories.slice(0, 3);

  weakCategories.forEach((cat) => {
    const catRecommendations = allRecommendations[cat.category as keyof typeof allRecommendations];
    if (catRecommendations) {
      // Ajouter 2 recommandations par catégorie faible
      recommendations.push(...catRecommendations.slice(0, 2));
    }
  });

  // Ajouter des recommandations générales selon le niveau
  if (level === "critique" || level === "faible") {
    recommendations.push(
      "Consultez nos guides pour améliorer rapidement votre sécurité",
      "Commencez par les bases : mots de passe forts et 2FA"
    );
  } else if (level === "moyen") {
    recommendations.push(
      "Vous êtes sur la bonne voie, continuez à améliorer vos pratiques"
    );
  }

  // Limiter à 8 recommandations max
  return recommendations.slice(0, 8);
}

/**
 * Obtient le message de niveau
 */
export function getLevelMessage(level: SecurityAuditResult["level"]): {
  title: string;
  description: string;
  color: string;
} {
  const messages = {
    critique: {
      title: "Sécurité critique",
      description:
        "Votre sécurité est actuellement très vulnérable. Il est urgent de prendre des mesures.",
      color: "text-danger",
    },
    faible: {
      title: "Sécurité faible",
      description:
        "Votre sécurité présente des failles importantes. Suivez nos recommandations pour vous protéger.",
      color: "text-warning",
    },
    moyen: {
      title: "Sécurité moyenne",
      description:
        "Vous avez mis en place certaines bonnes pratiques, mais il reste des améliorations à faire.",
      color: "text-yellow-500",
    },
    bon: {
      title: "Bonne sécurité",
      description:
        "Vos pratiques de sécurité sont globalement bonnes. Quelques ajustements permettraient d'atteindre l'excellence.",
      color: "text-secondary",
    },
    excellent: {
      title: "Excellente sécurité",
      description:
        "Bravo ! Vous avez adopté d'excellentes pratiques de sécurité. Continuez ainsi !",
      color: "text-secondary",
    },
  };

  return messages[level];
}
