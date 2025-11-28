import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, AlertTriangle, TrendingUp, Lightbulb, Scale, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import newsArticles from "@/data/news";
import ReactMarkdown from "react-markdown";

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

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    return {
      title: "Article non trouvé - SecureWeb",
    };
  }

  return {
    title: `${article.title} - SecureWeb`,
    description: article.excerpt,
  };
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  const article = newsArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const Icon = categoryIcons[article.category];
  const severityInfo = article.severity ? severityLabels[article.severity] : null;

  return (
    <div className="min-h-screen py-12">
      <article className="max-w-4xl mx-auto px-4">
        {/* Bouton retour */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux actualités
        </Link>

        {/* En-tête de l'article */}
        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full font-semibold border ${categoryColors[article.category]}`}>
              <Icon className="h-3.5 w-3.5" />
              {article.category}
            </span>

            {severityInfo && (
              <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${severityInfo.color}`}>
                <AlertTriangle className="h-3 w-3" />
                Niveau : {severityInfo.text}
              </span>
            )}

            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {/* Contenu de l'article */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mb-4
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-bold
              prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-foreground prose-li:mb-2
              prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-muted prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
              prose-hr:my-8 prose-hr:border-border
            ">
              <ReactMarkdown>{article.content}</ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Tags */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Articles connexes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Articles connexes</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {newsArticles
              .filter((a) => a.id !== article.id)
              .filter((a) =>
                a.category === article.category ||
                a.tags.some(tag => article.tags.includes(tag))
              )
              .slice(0, 2)
              .map((relatedArticle) => {
                const RelatedIcon = categoryIcons[relatedArticle.category];
                return (
                  <Link
                    key={relatedArticle.id}
                    href={`/news/${relatedArticle.slug}`}
                    className="block"
                  >
                    <Card className="h-full hover:border-primary/50 transition-colors">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full font-semibold border ${categoryColors[relatedArticle.category]}`}>
                            <RelatedIcon className="h-3 w-3" />
                            {relatedArticle.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(relatedArticle.date).toLocaleDateString("fr-FR")}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-2 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedArticle.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </section>

        {/* CTA retour */}
        <div className="mt-12 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            Voir toutes les actualités
          </Link>
        </div>
      </article>
    </div>
  );
}
