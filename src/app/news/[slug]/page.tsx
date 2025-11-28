"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, AlertTriangle, TrendingUp, Lightbulb, Scale, Cpu, Clock, Share2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import newsArticles from "@/data/news";
import ReactMarkdown from "react-markdown";
import { use } from "react";

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
  low: { text: "Faible", color: "bg-secondary/20 text-secondary border-secondary/30" },
  medium: { text: "Modéré", color: "bg-warning/20 text-warning border-warning/30" },
  high: { text: "Élevé", color: "bg-danger/20 text-danger border-danger/30" },
  critical: { text: "Critique", color: "bg-danger text-danger-foreground border-danger" },
};

export default function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const Icon = categoryIcons[article.category];
  const severityInfo = article.severity ? severityLabels[article.severity] : null;

  // Calcul du temps de lecture (estimation)
  const wordsPerMinute = 200;
  const wordCount = article.content.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Barre de navigation sticky */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux actualités
          </Link>
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-4 py-12">
        {/* En-tête avec hero */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold border-2 ${categoryColors[article.category]}`}>
              <Icon className="h-4 w-4" />
              {article.category}
            </span>

            {severityInfo && (
              <span className={`inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold border-2 ${severityInfo.color}`}>
                <AlertTriangle className="h-4 w-4" />
                {severityInfo.text}
              </span>
            )}

            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(article.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </span>

            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              {readTime} min de lecture
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            {article.title}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light max-w-4xl">
            {article.excerpt}
          </p>

          {/* Divider décoratif */}
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
        </header>

        {/* Contenu principal avec sidebar */}
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          {/* Contenu de l'article */}
          <div className="order-2 lg:order-1">
            <Card className="border-2 shadow-xl">
              <CardContent className="pt-8 pb-8 px-8">
                <div className="prose prose-lg dark:prose-invert max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h1:pb-4 prose-h1:border-b prose-h1:border-border
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-secondary
                  prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                  prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                  prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                  prose-strong:text-foreground prose-strong:font-bold prose-strong:text-primary
                  prose-em:text-muted-foreground prose-em:italic
                  prose-ul:my-6 prose-ul:list-none prose-ul:pl-0
                  prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                  prose-li:text-foreground/90 prose-li:mb-3 prose-li:pl-2 prose-li:relative
                  prose-li:before:content-['→'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-primary prose-li:before:font-bold
                  prose-code:text-primary prose-code:bg-primary/10 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-primary/20
                  prose-pre:bg-muted/50 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:border prose-pre:border-border prose-pre:shadow-inner
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:italic prose-blockquote:rounded-r-lg prose-blockquote:my-6
                  prose-hr:my-12 prose-hr:border-border prose-hr:border-t-2
                  prose-table:border-collapse prose-table:w-full prose-table:my-6
                  prose-th:bg-muted prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:border prose-th:border-border
                  prose-td:p-3 prose-td:border prose-td:border-border
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                ">
                  <ReactMarkdown
                    components={{
                      h2: ({ children }) => (
                        <h2 className="flex items-center gap-3">
                          <span className="w-1.5 h-8 bg-primary rounded-full"></span>
                          {children}
                        </h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="flex items-center gap-2">
                          <span className="w-1 h-6 bg-secondary rounded-full"></span>
                          {children}
                        </h3>
                      ),
                    }}
                  >
                    {article.content}
                  </ReactMarkdown>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="order-1 lg:order-2 lg:sticky lg:top-24 h-fit space-y-6">
            {/* Tags */}
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-muted-foreground">
                  <Tag className="h-4 w-4" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors font-medium cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Partage */}
            <Card className="border-2 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="pt-6">
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2 uppercase tracking-wider text-muted-foreground">
                  <Share2 className="h-4 w-4" />
                  Partager
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Partagez cet article avec votre équipe pour sensibiliser à cette menace.
                </p>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: article.title,
                        text: article.excerpt,
                        url: window.location.href,
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Lien copié dans le presse-papier !");
                    }
                  }}
                  className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
                >
                  Partager l'article
                </button>
              </CardContent>
            </Card>

            {/* Info box */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <h3 className="text-sm font-bold mb-3 text-primary">
                  💡 Bon à savoir
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Les informations contenues dans cet article sont vérifiées et proviennent de sources officielles en cybersécurité.
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>

        {/* Articles connexes */}
        <section className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            <h2 className="text-3xl font-bold">Articles connexes</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
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
                    className="block group"
                  >
                    <Card className="h-full border-2 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                      <CardContent className="pt-6 pb-6">
                        <div className="flex items-center gap-2 mb-4">
                          <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-semibold border ${categoryColors[relatedArticle.category]}`}>
                            <RelatedIcon className="h-3 w-3" />
                            {relatedArticle.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(relatedArticle.date).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "short"
                            })}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                          {relatedArticle.excerpt}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </section>

        {/* Navigation footer */}
        <div className="mt-16 pt-8 border-t-2 border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              Toutes les actualités
            </Link>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ↑ Retour en haut
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
