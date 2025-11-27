import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Scale } from "lucide-react";

export const metadata = {
  title: "Mentions légales - SecureWeb",
  description: "Mentions légales et informations sur SecureWeb.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Scale className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Mentions légales</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Informations légales concernant le site SecureWeb
          </p>
        </div>

        {/* Éditeur */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Éditeur du site</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Nom :</strong> SecureWeb</p>
            <p><strong>Type :</strong> Projet personnel à but éducatif</p>
            <p><strong>Responsable de la publication :</strong> Florian Jove Garcia</p>
            <p>
              <strong>Contact :</strong>{" "}
              <a href="mailto:florian.jove.garcia@gmail.com" className="text-primary hover:underline">
                florian.jove.garcia@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Hébergement */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Hébergement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p><strong>Hébergeur :</strong> Vercel Inc.</p>
            <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
            <p>
              <strong>Site web :</strong>{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                vercel.com
              </a>
            </p>
          </CardContent>
        </Card>

        {/* Propriété intellectuelle */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Propriété intellectuelle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Code source</h3>
              <p className="text-sm text-muted-foreground">
                Le code source de SecureWeb est disponible sous licence open-source sur{" "}
                <a
                  href="https://github.com/fjg67/Cybersecurity-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                . Vous êtes libre de l'utiliser, le modifier et le distribuer conformément
                aux termes de la licence.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Contenu éditorial</h3>
              <p className="text-sm text-muted-foreground">
                Les textes, articles et guides publiés sur SecureWeb sont la propriété de leurs auteurs.
                Toute reproduction ou utilisation non autorisée est interdite sans accord préalable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Marques et logos</h3>
              <p className="text-sm text-muted-foreground">
                Le nom "SecureWeb" et le logo associé sont des marques déposées. Les marques et logos
                de tiers mentionnés sur le site appartiennent à leurs propriétaires respectifs.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Données personnelles */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Protection des données personnelles</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              SecureWeb ne collecte aucune donnée personnelle. Tous les outils fonctionnent
              localement dans votre navigateur.
            </p>
            <p className="text-sm text-muted-foreground">
              Pour plus d'informations, consultez notre{" "}
              <a href="/privacy" className="text-primary hover:underline">
                politique de confidentialité
              </a>
              .
            </p>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Cookies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              SecureWeb n'utilise aucun cookie de tracking, de publicité ou d'analyse.
              Seules des données techniques locales (préférences utilisateur) peuvent être
              stockées dans votre navigateur via le localStorage, et restent uniquement sur
              votre appareil.
            </p>
          </CardContent>
        </Card>

        {/* Responsabilité */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>6. Limitation de responsabilité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Usage éducatif</h3>
              <p className="text-sm text-muted-foreground">
                SecureWeb est un projet à but éducatif. Les informations et outils fournis le sont
                à titre indicatif. Nous nous efforçons de fournir des informations exactes et à jour,
                mais ne pouvons garantir l'exhaustivité ou l'exactitude de tous les contenus.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Utilisation des outils</h3>
              <p className="text-sm text-muted-foreground">
                L'utilisation des outils mis à disposition est sous votre seule responsabilité.
                SecureWeb ne saurait être tenu responsable de tout dommage direct ou indirect
                résultant de l'utilisation du site ou de ses outils.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Liens externes</h3>
              <p className="text-sm text-muted-foreground">
                SecureWeb peut contenir des liens vers des sites externes. Nous n'avons aucun
                contrôle sur le contenu de ces sites et déclinons toute responsabilité quant
                à leur contenu ou leur politique de confidentialité.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Disponibilité</h3>
              <p className="text-sm text-muted-foreground">
                Nous nous efforçons de maintenir le site accessible 24h/24, 7j/7. Cependant,
                nous ne pouvons garantir une disponibilité totale et nous nous réservons le droit
                d'interrompre l'accès temporairement pour maintenance ou mise à jour.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Droit applicable */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7. Droit applicable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              et après tentative de recherche d'une solution amiable, les tribunaux français seront
              seuls compétents.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>8. Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Pour toute question concernant ces mentions légales :
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>Email :</strong>{" "}
                <a href="mailto:florian.jove.garcia@gmail.com" className="text-primary hover:underline">
                  florian.jove.garcia@gmail.com
                </a>
              </p>
              <p className="text-sm">
                <strong>GitHub :</strong>{" "}
                <a
                  href="https://github.com/fjg67/Cybersecurity-website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/fjg67/Cybersecurity-website
                </a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Date */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}</p>
        </div>
      </div>
    </div>
  );
}
