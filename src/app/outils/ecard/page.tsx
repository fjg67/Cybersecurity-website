import { CreditCard } from "lucide-react";
import ECardGenerator from "@/components/tools/ECardGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Générateur d'eCard sécurisée | SecureWeb",
  description:
    "Créez votre carte d'identité numérique sécurisée. Partagez vos informations de contact de manière professionnelle et chiffrée.",
};

export default function ECardPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-accent/10 p-2">
              <CreditCard className="h-8 w-8 text-accent" />
            </div>
            <h1 className="text-4xl font-bold">
              Générateur d'eCard sécurisée
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Créez une carte d'identité numérique personnalisée et sécurisée.
            Partagez vos coordonnées professionnelles de manière élégante avec
            QR Code, clé PGP et plus encore.
          </p>
        </div>

        <ECardGenerator />

        <div className="mt-12 prose prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4">
            Qu'est-ce qu'une eCard sécurisée ?
          </h2>
          <p className="text-muted-foreground mb-4">
            Une eCard (carte électronique) est une version numérique de votre
            carte de visite qui peut inclure des informations de contact
            sécurisées, une clé de chiffrement PGP, et d'autres données
            professionnelles.
          </p>

          <h3 className="text-xl font-semibold mb-3">Cas d'usage</h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li>
              <strong>Networking professionnel</strong> : Partagez vos
              coordonnées lors d'événements
            </li>
            <li>
              <strong>Communications sécurisées</strong> : Incluez votre clé PGP
              pour les échanges chiffrés
            </li>
            <li>
              <strong>Signature email</strong> : Ajoutez votre eCard à votre
              signature
            </li>
            <li>
              <strong>Profil en ligne</strong> : Partagez via QR Code sur vos
              réseaux sociaux
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">
            Qu'est-ce que PGP/GPG ?
          </h3>
          <p className="text-muted-foreground">
            PGP (Pretty Good Privacy) est un système de chiffrement de bout en
            bout. En incluant votre clé publique PGP sur votre eCard, vous
            permettez à vos contacts de vous envoyer des messages chiffrés que
            vous seul pouvez déchiffrer.
          </p>
        </div>
      </div>
    </div>
  );
}
