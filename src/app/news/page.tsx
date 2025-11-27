import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Actualités - SecureWeb",
  description: "Les dernières actualités en cybersécurité.",
};

// Exemples d'actualités (à remplacer par de vraies news)
const newsItems = [
  {
    id: 1,
    title: "Lancement de SecureWeb",
    date: "2025-01-01",
    category: "Annonce",
    excerpt: "SecureWeb est maintenant en ligne ! Découvrez nos outils gratuits pour améliorer votre sécurité numérique.",
    slug: "#"
  },
  {
    id: 2,
    title: "Nouveau générateur d'eCard sécurisée",
    date: "2025-01-15",
    category: "Outil",
    excerpt: "Créez votre carte de visite numérique avec support PGP et export PNG/PDF. 100% local et sécurisé.",
    slug: "#"
  },
  {
    id: 3,
    title: "Guide complet : Choisir son VPN en 2025",
    date: "2025-01-20",
    category: "Guide",
    excerpt: "Notre guide détaillé pour comprendre les VPN et choisir le meilleur service selon vos besoins.",
    slug: "/guides/comment-choisir-vpn-2025"
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Newspaper className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Actualités</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Les dernières nouvelles et mises à jour de SecureWeb
          </p>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {newsItems.map((news) => (
            <Card key={news.id} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                        {news.category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {new Date(news.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span>
                    </div>
                    <CardTitle className="text-2xl">{news.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                {news.slug !== "#" && (
                  <Link
                    href={news.slug}
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    Lire la suite
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <Card className="mt-12 border-dashed">
          <CardContent className="pt-6 text-center">
            <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Plus d'actualités à venir</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Restez informé des dernières tendances en cybersécurité, des nouvelles menaces
              et des mises à jour de SecureWeb.
            </p>
            <p className="text-sm text-muted-foreground">
              En attendant, consultez nos{" "}
              <Link href="/guides" className="text-primary hover:underline">
                guides pratiques
              </Link>{" "}
              pour améliorer votre sécurité dès maintenant.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
