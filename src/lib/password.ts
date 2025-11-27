import type { PasswordConfig, PasswordStrength } from "@/types";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const AMBIGUOUS = "il1Lo0O";

/**
 * Génère un mot de passe sécurisé selon la configuration
 */
export function generatePassword(config: PasswordConfig): string {
  let chars = "";
  let password = "";

  // Construire le jeu de caractères
  if (config.lowercase) chars += LOWERCASE;
  if (config.uppercase) chars += UPPERCASE;
  if (config.numbers) chars += NUMBERS;
  if (config.symbols) chars += SYMBOLS;

  // Exclure les caractères ambigus si demandé
  if (config.excludeAmbiguous) {
    chars = chars
      .split("")
      .filter((char) => !AMBIGUOUS.includes(char))
      .join("");
  }

  // Si aucun caractère n'est sélectionné, utiliser les lettres minuscules par défaut
  if (chars.length === 0) {
    chars = LOWERCASE;
  }

  // Générer le mot de passe
  const array = new Uint32Array(config.length);
  crypto.getRandomValues(array);

  for (let i = 0; i < config.length; i++) {
    password += chars[array[i] % chars.length];
  }

  // S'assurer qu'au moins un caractère de chaque type sélectionné est présent
  password = ensureComplexity(password, config);

  return password;
}

/**
 * S'assure que le mot de passe contient au moins un caractère de chaque type sélectionné
 */
function ensureComplexity(
  password: string,
  config: PasswordConfig
): string {
  const requirements: { chars: string; required: boolean }[] = [
    { chars: LOWERCASE, required: config.lowercase },
    { chars: UPPERCASE, required: config.uppercase },
    { chars: NUMBERS, required: config.numbers },
    { chars: SYMBOLS, required: config.symbols },
  ];

  let result = password;

  for (const req of requirements) {
    if (req.required && !hasCharFrom(result, req.chars)) {
      // Remplacer un caractère aléatoire par un caractère du type requis
      const randomIndex = Math.floor(Math.random() * result.length);
      const randomChar = req.chars[Math.floor(Math.random() * req.chars.length)];
      result = result.substring(0, randomIndex) + randomChar + result.substring(randomIndex + 1);
    }
  }

  return result;
}

/**
 * Vérifie si la chaîne contient au moins un caractère de l'ensemble
 */
function hasCharFrom(str: string, chars: string): boolean {
  return str.split("").some((char) => chars.includes(char));
}

/**
 * Évalue la force d'un mot de passe
 */
export function evaluatePasswordStrength(password: string): PasswordStrength {
  let score = 0;

  // Longueur
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (password.length >= 16) score++;

  // Complexité
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  // Normaliser le score sur 4
  const normalizedScore = Math.min(Math.floor(score / 2), 4);

  const labels: PasswordStrength["label"][] = [
    "Très faible",
    "Faible",
    "Moyen",
    "Fort",
    "Très fort",
  ];

  const colors = [
    "text-danger",
    "text-warning",
    "text-yellow-500",
    "text-secondary",
    "text-secondary",
  ];

  return {
    score: normalizedScore,
    label: labels[normalizedScore],
    color: colors[normalizedScore],
  };
}

/**
 * Génère une phrase de passe mémorisable
 */
export function generatePassphrase(wordCount: number = 4): string {
  const words = [
    "correct", "horse", "battery", "staple", "mountain", "river", "ocean",
    "forest", "cloud", "thunder", "lightning", "rainbow", "sunrise", "sunset",
    "keyboard", "monitor", "coffee", "table", "chair", "window", "door",
    "garden", "flower", "tree", "bird", "dragon", "phoenix", "tiger", "eagle",
    "castle", "tower", "bridge", "valley", "island", "desert", "jungle",
    "crystal", "diamond", "emerald", "ruby", "sapphire", "silver", "golden",
    "magic", "wizard", "knight", "prince", "queen", "king", "warrior",
  ];

  const selected: string[] = [];
  const array = new Uint32Array(wordCount);
  crypto.getRandomValues(array);

  for (let i = 0; i < wordCount; i++) {
    selected.push(words[array[i] % words.length]);
  }

  return selected.join("-");
}

/**
 * Vérifie si un mot de passe a été compromis (via HIBP API)
 * Note: Cette fonction utilise le k-anonymity model pour protéger la vie privée
 */
export async function checkPasswordBreach(password: string): Promise<{
  breached: boolean;
  count: number;
}> {
  try {
    // Calculer le SHA-1 du mot de passe
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase();

    // Envoyer seulement les 5 premiers caractères
    const prefix = hashHex.substring(0, 5);
    const suffix = hashHex.substring(5);

    const response = await fetch(
      `https://api.pwnedpasswords.com/range/${prefix}`
    );

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const text = await response.text();
    const hashes = text.split("\n");

    for (const line of hashes) {
      const [hash, count] = line.split(":");
      if (hash === suffix) {
        return {
          breached: true,
          count: parseInt(count, 10),
        };
      }
    }

    return {
      breached: false,
      count: 0,
    };
  } catch (error) {
    console.error("Error checking password breach:", error);
    // En cas d'erreur, on retourne false pour ne pas bloquer l'utilisateur
    return {
      breached: false,
      count: 0,
    };
  }
}
