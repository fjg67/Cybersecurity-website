import Link from "next/link";
import {
  Shield,
  Lock,
  Key,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Zap,
  BookOpen,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const tools = [
  {
    icon: Key,
    title: "Générateur de mots de passe",
    description:
      "Créez des mots de passe robustes et sécurisés en quelques clics.",
    href: "/outils/password",
    color: "text-primary",
  },
  {
    icon: CheckCircle2,
    title: "Audit de sécurité",
    description: "Évaluez votre niveau de sécurité avec notre questionnaire.",
    href: "/outils/audit",
    color: "text-secondary",
  },
  {
    icon: CreditCard,
    title: "Générateur eCard",
    description:
      "Créez votre carte d'identité numérique sécurisée et personnalisée.",
    href: "/outils/ecard",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Guide VPN",
    description: "Comparez et choisissez le meilleur VPN pour vos besoins.",
    href: "/vpn",
    color: "text-warning",
  },
];

const features = [
  {
    title: "100% Gratuit",
    description: "Tous nos outils sont gratuits et sans publicité.",
  },
  {
    title: "Confidentialité totale",
    description: "Aucune donnée n'est collectée ou stockée sur nos serveurs.",
  },
  {
    title: "Open Source",
    description: "Code transparent et auditable par tous.",
  },
  {
    title: "Pédagogique",
    description: "Des guides clairs pour comprendre et agir.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-10 w-10 text-primary" />
                <span className="text-sm font-semibold text-primary">
                  SÉCURITÉ POUR TOUS
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                Protégez vos{" "}
                <span className="text-primary">données personnelles</span>{" "}
                simplement
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Des outils gratuits et des guides pratiques pour sécuriser
                votre vie numérique. Pas de jargon, juste des solutions
                concrètes et accessibles à tous.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" asChild>
                  <Link href="/outils/audit">
                    Tester ma sécurité
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="default" size="lg" asChild>
                  <Link href="/guides">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explorer les guides
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full"></div>
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <Lock className="h-12 w-12 text-primary" />
                    <Zap className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Votre sécurité en 3 étapes
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Évaluez vos pratiques actuelles
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Utilisez nos outils gratuits
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">
                        Adoptez les bonnes pratiques
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outils Section */}
      <section className="py-24 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Outils gratuits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos outils interactifs pour améliorer votre sécurité en
              ligne dès maintenant.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link key={tool.title} href={tool.href}>
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardHeader>
                      <Icon className={`h-12 w-12 mb-4 ${tool.color}`} />
                      <CardTitle className="text-xl">{tool.title}</CardTitle>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Pourquoi choisir SecureWeb ?
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à sécuriser votre vie numérique ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Commencez par évaluer votre niveau de sécurité avec notre audit
            gratuit.
          </p>
          <Button variant="primary" size="lg" asChild>
            <Link href="/outils/audit">
              Démarrer l'audit de sécurité
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
