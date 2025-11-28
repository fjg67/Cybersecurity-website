import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Newspaper, Calendar, ArrowRight, AlertTriangle, TrendingUp, Lightbulb, Scale, Cpu } from "lucide-react";
import Link from "next/link";
import newsArticles from "@/data/news";

export const metadata = {
  title: "Actualités Cybersécurité - SecureWeb",
  description: "Les dernières actualités, menaces et tendances en cybersécurité.",
};

const categoryIcons = {
  "Menace": AlertTriangle,
  "Tendance": TrendingUp,
  "Conseil": Lightbulb,
  "Réglementation": Scale,
  "Technologie": Cpu,
};

const categoryColors = {
  "Menace": "text-danger bg-danger/10 border-danger/30",
  "Tendance": "text-primary bg-primary/10 border-primary/30",
  "Conseil": "text-secondary bg-secondary/10 border-secondary/30",
  "Réglementation": "text-warning bg-warning/10 border-warning/30",
  "Technologie": "text-primary bg-primary/10 border-primary/30",
};

const severityLabels = {
  low: { text: "Faible", color: "text-secondary" },
  medium: { text: "Modéré", color: "text-warning" },
  high: { text: "Élevé", color: "text-danger" },
  critical: { text: "Critique", color: "text-danger font-bold" },
};

export default function NewsPage() {
  const sortedNews = [...newsArticles].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
            <Newspaper className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Actualités Cybersécurité</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Les dernières menaces, tendances et conseils pour protéger vos données
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <span className="text-sm text-muted-foreground">Catégories :</span>
          {Object.entries(categoryIcons).map(([category, Icon]) => (
            <div
              key={category}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[category as keyof typeof categoryColors]}`}
            >
              <Icon className="h-3.5 w-3.5" />
              {category}
            </div>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-6">
          {sortedNews.map((news) => {
            const Icon = categoryIcons[news.category];
            const severityInfo = news.severity ? severityLabels[news.severity] : null;

            return (
              <Card key={news.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold border ${categoryColors[news.category]}`}>
                          <Icon className="h-3.5 w-3.5" />
                          {news.category}
                        </span>

                        {severityInfo && (
                          <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${severityInfo.color}`}>
                            <AlertTriangle className="h-3 w-3" />
                            Niveau : {severityInfo.text}
                          </span>
                        )}

                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(news.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric"
                          })}
                        </span>
                      </div>
                      <CardTitle className="text-2xl mb-2">{news.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{news.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {news.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/news/${news.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
                  >
                    Lire l'article complet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-12 border-primary/30 bg-primary/5">
          <CardContent className="pt-6 text-center">
            <Newspaper className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Restez informé</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Consultez régulièrement cette page pour rester à jour sur les dernières menaces
              et tendances en cybersécurité.
            </p>
            <p className="text-sm text-muted-foreground">
              Retrouvez aussi nos{" "}
              <Link href="/guides" className="text-primary hover:underline font-semibold">
                guides pratiques
              </Link>{" "}
              pour améliorer votre sécurité au quotidien.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
