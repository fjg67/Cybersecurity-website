import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Shield, Target, Heart, Users, Code, Lock } from "lucide-react";

export const metadata = {
  title: "À propos - SecureWeb",
  description: "Découvrez SecureWeb, votre plateforme éducative dédiée à la cybersécurité grand public.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">À propos de SecureWeb</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Votre allié pour une navigation sécurisée et une vie numérique protégée
          </p>
        </div>

        {/* Mission */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Notre Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              SecureWeb est né d'un constat simple : la cybersécurité est souvent perçue comme
              complexe et réservée aux experts. Pourtant, chacun de nous est confronté quotidiennement
              à des risques numériques : mots de passe faibles, phishing, données personnelles exposées...
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Notre mission est de <span className="text-primary font-semibold">démocratiser la cybersécurité</span> en
              rendant les bonnes pratiques accessibles à tous, quel que soit le niveau technique.
              Nous croyons que la sécurité numérique est un droit fondamental dans notre société connectée.
            </p>
          </CardContent>
        </Card>

        {/* Valeurs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-secondary" />
              Nos Valeurs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Lock className="h-5 w-5 text-primary" />
                  Confidentialité d'abord
                </h3>
                <p className="text-sm text-muted-foreground">
                  Tous nos outils fonctionnent 100% en local. Aucune donnée n'est collectée,
                  stockée ou transmise à nos serveurs. Votre vie privée est sacrée.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Accessibilité
                </h3>
                <p className="text-sm text-muted-foreground">
                  Des outils simples, gratuits et sans publicité. La cybersécurité ne doit pas
                  être un luxe réservé à ceux qui peuvent se payer des solutions payantes.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Éducation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nous ne nous contentons pas de fournir des outils. Nous expliquons les risques,
                  les bonnes pratiques et comment se protéger efficacement.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Transparence
                </h3>
                <p className="text-sm text-muted-foreground">
                  Notre code est ouvert et documenté. Vous pouvez vérifier exactement ce que
                  font nos outils et comment ils protègent vos données.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ce que nous proposons */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Ce que nous proposons</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-1">Outils pratiques</h3>
                <p className="text-sm text-muted-foreground">
                  Générateur de mots de passe sécurisés, audit de sécurité personnalisé,
                  comparateur VPN, créateur d'eCard chiffrée... Des outils concrets pour
                  améliorer votre sécurité au quotidien.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold mb-1">Guides éducatifs</h3>
                <p className="text-sm text-muted-foreground">
                  Articles détaillés et accessibles sur les menaces actuelles (phishing,
                  ransomware), les bonnes pratiques et les solutions pour vous protéger.
                </p>
              </div>

              <div className="border-l-4 border-warning pl-4">
                <h3 className="font-semibold mb-1">Recommandations personnalisées</h3>
                <p className="text-sm text-muted-foreground">
                  Notre audit de sécurité analyse vos pratiques et vous fournit des
                  recommandations sur mesure pour améliorer votre protection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Engagement */}
        <Card>
          <CardHeader>
            <CardTitle>Notre Engagement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
              <h3 className="font-semibold text-primary mb-2">100% Gratuit</h3>
              <p className="text-sm text-muted-foreground">
                SecureWeb est et restera toujours gratuit. Pas d'abonnement caché,
                pas de version premium. La sécurité numérique est un droit, pas un produit.
              </p>
            </div>

            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4">
              <h3 className="font-semibold text-secondary mb-2">Sans Publicité</h3>
              <p className="text-sm text-muted-foreground">
                Aucune publicité, aucun tracker, aucun partenariat commercial.
                Notre seul objectif est de vous aider à vous protéger.
              </p>
            </div>

            <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
              <h3 className="font-semibold text-warning mb-2">Respect de la Vie Privée</h3>
              <p className="text-sm text-muted-foreground">
                Conformité RGPD totale. Nous ne collectons aucune donnée personnelle.
                Même les outils fonctionnent entièrement dans votre navigateur.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact/Footer */}
        <div className="text-center mt-12 p-6 bg-card rounded-lg border border-border">
          <h3 className="font-semibold mb-2">Une Question ? Un Problème ?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            SecureWeb est un projet open-source. Pour toute question, suggestion ou
            signalement de bug, n'hésitez pas à ouvrir une issue sur GitHub.
          </p>
          <a
            href="https://github.com/fjg67/Cybersecurity-website"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <Code className="h-4 w-4" />
            Voir le projet sur GitHub
          </a>
        </div>

        {/* Version */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>SecureWeb v1.0 - 2025</p>
          <p className="mt-1">
            Fait avec ❤️ pour un web plus sûr
          </p>
        </div>
      </div>
    </div>
  );
}
