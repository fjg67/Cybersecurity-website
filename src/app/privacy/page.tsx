import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Shield, CheckCircle2, XCircle } from "lucide-react";

export const metadata = {
  title: "Politique de confidentialité - SecureWeb",
  description: "Comment SecureWeb protège vos données personnelles.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Politique de confidentialité</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparence totale sur la collecte et l'utilisation de vos données
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Résumé */}
        <Card className="mb-8 border-primary/50">
          <CardHeader>
            <CardTitle>En résumé</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <div>
                  <p className="font-semibold">Traitement 100% local</p>
                  <p className="text-sm text-muted-foreground">Tous les outils fonctionnent dans votre navigateur</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <div>
                  <p className="font-semibold">Zéro collecte de données</p>
                  <p className="text-sm text-muted-foreground">Nous ne stockons aucune information personnelle</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <div>
                  <p className="font-semibold">Pas de cookies tiers</p>
                  <p className="text-sm text-muted-foreground">Aucun tracker publicitaire ou analytique</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0" />
                <div>
                  <p className="font-semibold">Conformité RGPD</p>
                  <p className="text-sm text-muted-foreground">Respect total de vos droits</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Collecte de données */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>1. Collecte de données personnelles</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-danger" />
                Ce que nous NE collectons PAS
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-7">
                <li>Vos mots de passe générés ou testés</li>
                <li>Vos résultats d'audit de sécurité</li>
                <li>Vos eCards ou informations personnelles</li>
                <li>Votre adresse IP</li>
                <li>Votre historique de navigation</li>
                <li>Vos données de localisation</li>
                <li>Toute information d'identification</li>
              </ul>
            </div>

            <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
              <p className="text-sm font-semibold text-secondary mb-2">Pourquoi ?</p>
              <p className="text-sm text-muted-foreground">
                Tous nos outils fonctionnent entièrement dans votre navigateur (côté client).
                Les données que vous saisissez ou générez ne quittent jamais votre appareil.
                Elles ne sont ni transmises à nos serveurs, ni stockées, ni analysées.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>2. Cookies et technologies similaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              SecureWeb n'utilise aucun cookie de tracking, de publicité ou d'analyse.
            </p>

            <div>
              <h3 className="font-semibold mb-2">Cookies techniques (optionnels)</h3>
              <p className="text-sm text-muted-foreground">
                Votre navigateur peut stocker localement vos préférences (thème, langue)
                via le <code className="bg-card px-1 py-0.5 rounded">localStorage</code>.
                Ces données restent uniquement sur votre appareil et peuvent être effacées à tout moment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Services tiers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>3. Services tiers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Have I Been Pwned (HIBP)</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Notre générateur de mots de passe utilise l'API HIBP pour vérifier si un mot de passe
                a été compromis dans une fuite de données.
              </p>
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-3">
                <p className="text-sm font-semibold text-primary mb-1">Protection de la vie privée</p>
                <p className="text-sm text-muted-foreground">
                  Nous utilisons la méthode <strong>k-anonymity</strong> : seuls les 5 premiers caractères
                  du hash SHA-1 de votre mot de passe sont envoyés à l'API. Votre mot de passe complet
                  n'est jamais transmis.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Hébergement (Vercel)</h3>
              <p className="text-sm text-muted-foreground">
                SecureWeb est hébergé sur Vercel. Vercel peut collecter des données de navigation
                anonymisées (pages visitées, temps de chargement) pour assurer le bon fonctionnement
                de la plateforme. Consultez la{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  politique de confidentialité de Vercel
                </a>
                .
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Vos droits */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>4. Vos droits (RGPD)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-4 border-primary pl-3">
                <h4 className="font-semibold text-sm">Droit d'accès</h4>
                <p className="text-sm text-muted-foreground">Accéder aux données vous concernant</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <h4 className="font-semibold text-sm">Droit de rectification</h4>
                <p className="text-sm text-muted-foreground">Corriger vos données inexactes</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <h4 className="font-semibold text-sm">Droit à l'effacement</h4>
                <p className="text-sm text-muted-foreground">Supprimer vos données</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <h4 className="font-semibold text-sm">Droit d'opposition</h4>
                <p className="text-sm text-muted-foreground">Vous opposer au traitement</p>
              </div>
            </div>

            <div className="bg-secondary/10 border border-secondary/30 rounded-lg p-4">
              <p className="text-sm font-semibold text-secondary mb-2">Dans le cas de SecureWeb</p>
              <p className="text-sm text-muted-foreground">
                Comme nous ne collectons aucune donnée personnelle, il n'y a rien à consulter,
                rectifier ou supprimer. Vos données restent sous votre contrôle total.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sécurité */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>5. Sécurité</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Même si nous ne collectons aucune donnée, nous prenons la sécurité très au sérieux :
            </p>

            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span><strong>HTTPS obligatoire</strong> - Toutes les communications sont chiffrées</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span><strong>Code open-source</strong> - Vous pouvez vérifier exactement ce que fait notre code</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span><strong>Pas de serveur</strong> - Le traitement local élimine les risques de fuite de données</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                <span><strong>Mises à jour régulières</strong> - Correction rapide des éventuelles failles de sécurité</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>6. Contact</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Pour toute question concernant cette politique de confidentialité ou vos données :
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

        {/* Modifications */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Modifications de cette politique :</strong> Nous nous réservons le droit de modifier
            cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette
            page avec une nouvelle date de mise à jour.
          </p>
        </div>
      </div>
    </div>
  );
}
