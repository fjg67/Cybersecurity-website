import Link from "next/link";
import { Shield, Github, Twitter, Mail } from "lucide-react";

const footerLinks = {
  outils: [
    { name: "Générateur de mots de passe", href: "/outils/password" },
    { name: "Audit de sécurité", href: "/outils/audit" },
    { name: "Générateur eCard", href: "/outils/ecard" },
    { name: "Vérificateur de liens", href: "/outils/link-checker" },
  ],
  ressources: [
    { name: "Guides", href: "/guides" },
    { name: "Comparatif VPN", href: "/vpn" },
    { name: "Glossaire", href: "/glossaire" },
    { name: "Actualités", href: "/news" },
  ],
  legal: [
    { name: "À propos", href: "/a-propos" },
    { name: "Politique de confidentialité", href: "/privacy" },
    { name: "Mentions légales", href: "/legal" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">SecureWeb</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Votre guide pratique pour sécuriser vos données personnelles et
              naviguer en toute sécurité sur Internet.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/fjg67/Cybersecurity-website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@secureweb.example"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Outils */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Outils</h3>
            <ul className="space-y-3">
              {footerLinks.outils.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Ressources</h3>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Informations</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SecureWeb. Tous droits réservés.
            Fait avec passion pour votre sécurité.
          </p>
        </div>
      </div>
    </footer>
  );
}
