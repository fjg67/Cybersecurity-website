import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Glossaire - SecureWeb",
  description: "Tous les termes de cybersécurité expliqués simplement.",
};

const glossaryTerms = [
  {
    letter: "A",
    terms: [
      {
        term: "Authentification",
        definition: "Processus de vérification de l'identité d'un utilisateur, généralement par un nom d'utilisateur et un mot de passe."
      },
      {
        term: "Attaque par force brute",
        definition: "Méthode d'attaque consistant à tester toutes les combinaisons possibles de mots de passe jusqu'à trouver la bonne."
      },
      {
        term: "Antivirus",
        definition: "Logiciel conçu pour détecter, bloquer et supprimer les logiciels malveillants (virus, trojans, etc.)."
      },
    ]
  },
  {
    letter: "B",
    terms: [
      {
        term: "Backdoor",
        definition: "Porte dérobée permettant à un attaquant d'accéder à un système en contournant les mesures de sécurité normales."
      },
      {
        term: "Backup (Sauvegarde)",
        definition: "Copie de sécurité de vos données permettant de les restaurer en cas de perte ou d'attaque."
      },
    ]
  },
  {
    letter: "C",
    terms: [
      {
        term: "Chiffrement",
        definition: "Technique de sécurité qui transforme des données lisibles en données codées, illisibles sans la clé de déchiffrement."
      },
      {
        term: "Cookie",
        definition: "Petit fichier stocké par un site web sur votre ordinateur pour mémoriser vos préférences ou vous suivre."
      },
      {
        term: "CORS (Cross-Origin Resource Sharing)",
        definition: "Mécanisme de sécurité qui contrôle les requêtes entre différents domaines web."
      },
      {
        term: "Credential Stuffing",
        definition: "Attaque utilisant des identifiants volés sur un site pour tenter de se connecter à d'autres sites."
      },
    ]
  },
  {
    letter: "D",
    terms: [
      {
        term: "DDoS (Distributed Denial of Service)",
        definition: "Attaque visant à rendre un service indisponible en le submergeant de requêtes provenant de multiples sources."
      },
      {
        term: "DNS (Domain Name System)",
        definition: "Système qui traduit les noms de domaine (exemple.com) en adresses IP."
      },
    ]
  },
  {
    letter: "E",
    terms: [
      {
        term: "Exploitation",
        definition: "Technique permettant de profiter d'une faille de sécurité dans un logiciel pour obtenir un accès non autorisé."
      },
      {
        term: "End-to-End Encryption (E2EE)",
        definition: "Chiffrement de bout en bout garantissant que seuls l'émetteur et le destinataire peuvent lire les messages."
      },
    ]
  },
  {
    letter: "F",
    terms: [
      {
        term: "Firewall (Pare-feu)",
        definition: "Système de sécurité qui surveille et contrôle le trafic réseau entrant et sortant."
      },
      {
        term: "Fuite de données",
        definition: "Incident de sécurité où des données sensibles sont exposées à des personnes non autorisées."
      },
    ]
  },
  {
    letter: "H",
    terms: [
      {
        term: "Hash",
        definition: "Fonction cryptographique transformant des données en une empreinte numérique unique et irréversible."
      },
      {
        term: "HTTPS",
        definition: "Version sécurisée du protocole HTTP, chiffrant les communications entre votre navigateur et un site web."
      },
    ]
  },
  {
    letter: "K",
    terms: [
      {
        term: "Keylogger",
        definition: "Logiciel malveillant enregistrant toutes les frappes au clavier pour voler des mots de passe."
      },
      {
        term: "K-Anonymity",
        definition: "Technique de protection de la vie privée garantissant qu'une donnée ne peut être distinguée de k-1 autres données similaires."
      },
    ]
  },
  {
    letter: "M",
    terms: [
      {
        term: "Malware",
        definition: "Terme générique désignant tout logiciel malveillant (virus, trojan, ransomware, spyware, etc.)."
      },
      {
        term: "Man-in-the-Middle (MITM)",
        definition: "Attaque où un pirate intercepte les communications entre deux parties à leur insu."
      },
      {
        term: "Multi-Factor Authentication (MFA / 2FA)",
        definition: "Méthode d'authentification nécessitant plusieurs preuves d'identité (mot de passe + code SMS, par exemple)."
      },
    ]
  },
  {
    letter: "P",
    terms: [
      {
        term: "Phishing",
        definition: "Technique d'arnaque consistant à se faire passer pour une entité de confiance pour voler des informations sensibles."
      },
      {
        term: "PGP (Pretty Good Privacy)",
        definition: "Système de chiffrement permettant de sécuriser les emails et de vérifier l'authenticité de l'expéditeur."
      },
      {
        term: "Patch",
        definition: "Mise à jour logicielle corrigeant des bugs ou des failles de sécurité."
      },
    ]
  },
  {
    letter: "R",
    terms: [
      {
        term: "Ransomware",
        definition: "Logiciel malveillant qui chiffre vos fichiers et exige une rançon pour les déverrouiller."
      },
      {
        term: "RGPD",
        definition: "Règlement Général sur la Protection des Données - loi européenne protégeant les données personnelles."
      },
    ]
  },
  {
    letter: "S",
    terms: [
      {
        term: "Spyware",
        definition: "Logiciel malveillant espionnant vos activités et collectant vos informations personnelles."
      },
      {
        term: "SSL/TLS",
        definition: "Protocoles de sécurité chiffrant les communications sur Internet (visible avec le cadenas dans le navigateur)."
      },
      {
        term: "Social Engineering",
        definition: "Manipulation psychologique visant à tromper les gens pour qu'ils divulguent des informations confidentielles."
      },
    ]
  },
  {
    letter: "T",
    terms: [
      {
        term: "Trojan (Cheval de Troie)",
        definition: "Logiciel malveillant déguisé en programme légitime pour tromper l'utilisateur."
      },
      {
        term: "Two-Factor Authentication (2FA)",
        definition: "Voir MFA - Authentification à deux facteurs (mot de passe + code temporaire)."
      },
    ]
  },
  {
    letter: "V",
    terms: [
      {
        term: "VPN (Virtual Private Network)",
        definition: "Réseau privé virtuel qui chiffre votre connexion Internet et masque votre adresse IP."
      },
      {
        term: "Vulnérabilité",
        definition: "Faille dans un système ou un logiciel pouvant être exploitée par des attaquants."
      },
      {
        term: "Virus",
        definition: "Programme malveillant capable de se reproduire et d'infecter d'autres fichiers."
      },
    ]
  },
  {
    letter: "Z",
    terms: [
      {
        term: "Zero-day",
        definition: "Vulnérabilité inconnue des développeurs, exploitée par des pirates avant qu'un correctif soit disponible."
      },
      {
        term: "Zero Trust",
        definition: "Modèle de sécurité qui ne fait confiance à personne par défaut, même à l'intérieur du réseau."
      },
    ]
  },
];

export default function GlossairePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <BookOpen className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Glossaire Cybersécurité</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tous les termes de cybersécurité expliqués simplement
          </p>
        </div>

        {/* Glossaire */}
        <div className="space-y-8">
          {glossaryTerms.map((section) => (
            <Card key={section.letter}>
              <CardHeader>
                <CardTitle className="text-3xl text-primary">{section.letter}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {section.terms.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary/30 pl-4">
                      <h3 className="font-bold text-lg mb-2">{item.term}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <Card className="mt-12">
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">
              Un terme manque ? N'hésitez pas à nous le suggérer sur{" "}
              <a
                href="https://github.com/fjg67/Cybersecurity-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
