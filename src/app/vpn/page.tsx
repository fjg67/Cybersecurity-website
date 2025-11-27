import { Shield, Lock, Zap, Eye, Globe } from "lucide-react";
import VPNComparator from "@/components/tools/VPNComparator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparatif VPN 2025 | SecureWeb",
  description:
    "Comparez les meilleurs VPN du marché. Découvrez nos recommandations basées sur la sécurité, la vitesse et le rapport qualité-prix.",
};

export default function VPNPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">Guide et comparatif VPN 2025</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Choisissez le meilleur VPN pour protéger votre vie privée en ligne.
            Comparez les fonctionnalités, prix et performances des VPN les plus
            fiables du marché.
          </p>
        </div>

        {/* Qu'est-ce qu'un VPN */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Qu'est-ce qu'un VPN ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Lock className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Chiffrement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Protège vos données en les chiffrant, empêchant les hackers
                  et votre FAI de voir votre activité.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Anonymat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Masque votre adresse IP réelle, rendant votre navigation
                  anonyme et difficile à tracer.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Géolocalisation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Accédez à du contenu géo-restreint en changeant
                  virtuellement votre localisation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Sécurité</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Protège vos données sensibles sur les réseaux WiFi publics
                  non sécurisés.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pourquoi utiliser un VPN */}
        <Card className="mb-12 bg-card/50">
          <CardHeader>
            <CardTitle>Pourquoi utiliser un VPN ?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-secondary">
                  Cas d'usage courants
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Protection sur WiFi public (café, hôtel, aéroport)</li>
                  <li>• Accès à du contenu géo-bloqué (Netflix, etc.)</li>
                  <li>• Contournement de la censure internet</li>
                  <li>• Protection contre le tracking publicitaire</li>
                  <li>• Sécurisation du télétravail</li>
                  <li>• Téléchargement anonyme et sécurisé</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2 text-warning">
                  Attention aux idées reçues
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    • Un VPN ne rend pas totalement anonyme (navigation,
                    cookies, etc.)
                  </li>
                  <li>
                    • Les VPN gratuits sont souvent risqués (revente de
                    données)
                  </li>
                  <li>• Un VPN peut ralentir légèrement votre connexion</li>
                  <li>
                    • Tous les VPN ne permettent pas le P2P ou le streaming
                  </li>
                  <li>
                    • La localisation du VPN et sa juridiction sont importantes
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparateur */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Comparatif des meilleurs VPN
          </h2>
          <VPNComparator />
        </div>

        {/* Guide d'installation */}
        <Card>
          <CardHeader>
            <CardTitle>Comment installer et utiliser un VPN ?</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    Choisissez un fournisseur VPN
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Comparez les offres ci-dessus et choisissez celle qui
                    correspond à vos besoins. Privilégiez un VPN payant avec
                    une politique no-logs claire.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    Créez un compte et abonnez-vous
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Inscrivez-vous sur le site du VPN. Les abonnements annuels
                    sont généralement beaucoup plus avantageux. La plupart
                    offrent une garantie satisfait ou remboursé.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    Téléchargez et installez l'application
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Téléchargez l'application pour votre système
                    (Windows/Mac/iOS/Android/Linux) depuis le site officiel.
                    Installez et connectez-vous avec vos identifiants.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    Connectez-vous à un serveur
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Choisissez un serveur dans le pays de votre choix et
                    cliquez sur "Connecter". Pour la meilleure vitesse,
                    choisissez un serveur proche géographiquement.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  5
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    Naviguez en toute sécurité
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Une fois connecté, votre trafic est chiffré et votre IP
                    masquée. Vous pouvez vérifier votre IP sur des sites comme
                    whatismyip.com pour confirmer le changement.
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
