import { Key } from "lucide-react";
import PasswordGenerator from "@/components/tools/PasswordGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur de mots de passe | SecureWeb",
  description:
    "Générez des mots de passe forts et sécurisés gratuitement. Personnalisez la longueur, les caractères et vérifiez si votre mot de passe a été compromis.",
};

export default function PasswordPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Key className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">
              Générateur de mots de passe
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Créez des mots de passe robustes et sécurisés en quelques clics.
            Tous les mots de passe sont générés localement dans votre
            navigateur et ne sont jamais envoyés à nos serveurs.
          </p>
        </div>

        <PasswordGenerator />

        <div className="mt-12 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">
            Pourquoi utiliser un mot de passe fort ?
          </h2>
          <p className="text-muted-foreground mb-4">
            Un mot de passe fort est votre première ligne de défense contre les
            cyberattaques. Les hackers utilisent des techniques automatisées
            pour deviner les mots de passe faibles en quelques secondes.
          </p>

          <h3 className="text-xl font-semibold mb-3">
            Qu'est-ce qu'un bon mot de passe ?
          </h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>Au moins 12 caractères</strong> : Plus c'est long, mieux
              c'est
            </li>
            <li>
              <strong>Mélange de caractères</strong> : Majuscules, minuscules,
              chiffres et symboles
            </li>
            <li>
              <strong>Unique</strong> : Un mot de passe différent pour chaque
              compte
            </li>
            <li>
              <strong>Aléatoire</strong> : Évitez les mots du dictionnaire et
              les informations personnelles
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            Comment gérer tous vos mots de passe ?
          </h3>
          <p className="text-muted-foreground">
            Utiliser un gestionnaire de mots de passe comme{" "}
            <strong>Bitwarden</strong>, <strong>1Password</strong> ou{" "}
            <strong>KeePassXC</strong> vous permet de stocker tous vos mots de
            passe de manière sécurisée et de n'avoir qu'un seul mot de passe
            maître à retenir.
          </p>
        </div>
      </div>
    </div>
  );
}
