import Link from "next/link";
import {
  Key,
  CheckCircle2,
  CreditCard,
  Shield,
  Wrench,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outils de sécurité gratuits | SecureWeb",
  description:
    "Découvrez nos outils gratuits de cybersécurité : générateur de mots de passe, audit de sécurité, générateur d'eCard et comparateur VPN.",
};

const tools = [
  {
    icon: Key,
    title: "Générateur de mots de passe",
    description:
      "Créez des mots de passe robustes et sécurisés. Vérifiez si vos mots de passe ont été compromis et générez des phrases de passe mémorisables.",
    href: "/outils/password",
    color: "text-primary",
    features: [
      "Paramètres personnalisables",
      "Vérification HIBP",
      "Phrases de passe",
      "Évaluation de force",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Audit de sécurité personnel",
    description:
      "Évaluez vos pratiques de sécurité avec un questionnaire interactif. Recevez un score détaillé et des recommandations personnalisées.",
    href: "/outils/audit",
    color: "text-secondary",
    features: [
      "17 questions ciblées",
      "5 catégories de sécurité",
      "Score détaillé",
      "Recommandations sur mesure",
    ],
  },
  {
    icon: CreditCard,
    title: "Générateur d'eCard",
    description:
      "Créez votre carte d'identité numérique sécurisée. Incluez vos contacts, clé PGP et exportez en PNG, PDF ou QR Code.",
    href: "/outils/ecard",
    color: "text-accent",
    features: [
      "Design personnalisable",
      "Clé PGP intégrée",
      "Export multi-format",
      "QR Code inclus",
    ],
  },
];

const additionalResources = [
  {
    icon: Shield,
    title: "Comparateur VPN",
    description: "Comparez les meilleurs VPN du marché",
    href: "/vpn",
  },
  {
    icon: Wrench,
    title: "Guides pratiques",
    description: "Apprenez les bonnes pratiques de sécurité",
    href: "/guides",
  },
];

export default function OutilsPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Outils de sécurité gratuits
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Protégez vos données avec nos outils interactifs. Tous nos outils
            sont gratuits, sans publicité et traitent vos données localement
            dans votre navigateur.
          </p>
        </div>

        {/* Outils principaux */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card
                key={tool.title}
                className={`flex flex-col ${
                  index === 0 ? "border-2 border-primary" : ""
                }`}
              >
                <CardHeader>
                  <div className="mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-card border border-border">
                      <Icon className={`h-8 w-8 ${tool.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{tool.title}</CardTitle>
                  <CardDescription className="text-base">
                    {tool.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3">
                      Fonctionnalités :
                    </h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant={index === 0 ? "primary" : "default"}
                    className="w-full mt-auto"
                    asChild
                  >
                    <Link href={tool.href}>
                      Utiliser l'outil
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ressources additionnelles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Ressources complémentaires</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {additionalResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Link key={resource.title} href={resource.href}>
                  <Card className="hover:border-primary/50 transition-all h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-card border border-border">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {resource.title}
                          </CardTitle>
                          <CardDescription>
                            {resource.description}
                          </CardDescription>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground ml-auto" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Garanties de confidentialité */}
        <Card className="bg-card/50 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Vos données restent privées
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-secondary">
                  Traitement local
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tous nos outils fonctionnent directement dans votre
                  navigateur. Vos données ne quittent jamais votre appareil.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-secondary">
                  Pas de collecte
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nous ne collectons, ne stockons et ne partageons aucune
                  donnée personnelle. Zéro tracking, zéro analytics intrusif.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-secondary">
                  Open source
                </h3>
                <p className="text-sm text-muted-foreground">
                  Notre code est transparent et auditable. Vous pouvez vérifier
                  par vous-même comment fonctionnent nos outils.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ rapide */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Les outils sont-ils vraiment gratuits ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, tous nos outils sont 100% gratuits sans limitation. Pas
                  de compte requis, pas de carte bancaire, pas de publicité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Mes données sont-elles sécurisées ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Absolument. Tous les traitements se font localement dans
                  votre navigateur. Aucune donnée n'est envoyée à nos serveurs.
                  Vous pouvez même utiliser les outils hors ligne.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Puis-je utiliser ces outils sur mobile ?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oui, tous nos outils sont responsive et fonctionnent
                  parfaitement sur smartphone et tablette.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
