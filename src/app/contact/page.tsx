import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Mail, Github, MessageSquare, AlertCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Contact - SecureWeb",
  description: "Contactez-nous pour toute question ou suggestion.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Mail className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question, une suggestion ou un problème ? Nous sommes là pour vous aider.
          </p>
        </div>

        {/* Moyens de contact */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Email
              </CardTitle>
              <CardDescription>
                Pour toute question générale ou demande d'information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:florian.jove.garcia@gmail.com"
                className="text-primary hover:underline font-mono text-sm break-all"
              >
                florian.jove.garcia@gmail.com
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                Délai de réponse : généralement sous 48h
              </p>
            </CardContent>
          </Card>

          {/* GitHub */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Github className="h-6 w-6 text-primary" />
                GitHub
              </CardTitle>
              <CardDescription>
                Pour signaler un bug ou proposer une amélioration
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="primary" className="w-full" asChild>
                <a
                  href="https://github.com/fjg67/Cybersecurity-website/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Ouvrir une issue
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Le meilleur moyen pour les questions techniques
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Types de demandes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-primary" />
              Comment nous contacter ?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-2">🐛 Signaler un bug</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Vous avez trouvé un problème technique sur le site ?
                </p>
                <p className="text-sm">
                  → Ouvrez une issue sur{" "}
                  <a
                    href="https://github.com/fjg67/Cybersecurity-website/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>{" "}
                  en décrivant le problème rencontré.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold mb-2">💡 Proposer une fonctionnalité</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Vous avez une idée pour améliorer SecureWeb ?
                </p>
                <p className="text-sm">
                  → Ouvrez une issue sur GitHub avec le tag "enhancement" ou contactez-nous par email.
                </p>
              </div>

              <div className="border-l-4 border-warning pl-4">
                <h3 className="font-semibold mb-2">❓ Poser une question</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Vous avez besoin d'aide pour utiliser un outil ?
                </p>
                <p className="text-sm">
                  → Consultez d'abord nos{" "}
                  <a href="/guides" className="text-primary hover:underline">
                    guides
                  </a>{" "}
                  ou envoyez-nous un email.
                </p>
              </div>

              <div className="border-l-4 border-danger pl-4">
                <h3 className="font-semibold mb-2">🔒 Signaler une faille de sécurité</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Vous avez découvert une vulnérabilité ?
                </p>
                <p className="text-sm">
                  → Contactez-nous directement par email à{" "}
                  <a
                    href="mailto:florian.jove.garcia@gmail.com"
                    className="text-primary hover:underline"
                  >
                    florian.jove.garcia@gmail.com
                  </a>{" "}
                  (ne pas publier sur GitHub).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ rapide */}
        <Card>
          <CardHeader>
            <CardTitle>Questions fréquentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">SecureWeb est-il vraiment gratuit ?</h3>
                <p className="text-sm text-muted-foreground">
                  Oui, 100% gratuit et sans publicité. SecureWeb est un projet open-source
                  dont le but est de rendre la cybersécurité accessible à tous.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Mes données sont-elles collectées ?</h3>
                <p className="text-sm text-muted-foreground">
                  Non. Tous nos outils fonctionnent 100% en local dans votre navigateur.
                  Aucune donnée n'est envoyée à nos serveurs. Voir notre{" "}
                  <a href="/privacy" className="text-primary hover:underline">
                    politique de confidentialité
                  </a>
                  .
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Puis-je contribuer au projet ?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolument ! Le projet est open-source sur GitHub. Vous pouvez proposer
                  des améliorations, signaler des bugs ou même contribuer au code.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Proposez-vous du consulting en cybersécurité ?</h3>
                <p className="text-sm text-muted-foreground">
                  Non, SecureWeb est un projet éducatif et ne propose pas de services de consulting.
                  Nos outils sont conçus pour vous aider à améliorer votre sécurité par vous-même.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Note importante */}
        <div className="mt-8 p-6 bg-warning/10 border border-warning/30 rounded-lg">
          <div className="flex gap-3">
            <AlertCircle className="h-6 w-6 text-warning shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-warning mb-2">Note importante</h3>
              <p className="text-sm text-muted-foreground">
                SecureWeb est un projet personnel à but éducatif. Pour des problèmes de sécurité
                critiques nécessitant une intervention professionnelle, nous vous recommandons de
                contacter un expert en cybersécurité certifié.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
