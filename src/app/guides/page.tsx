import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides et ressources | SecureWeb",
  description:
    "Découvrez nos guides pratiques sur la cybersécurité : protection des données, VPN, phishing, mots de passe et plus encore.",
};

const categories = [
  { id: "all", label: "Tous les guides", color: "primary" },
  { id: "phishing", label: "Phishing", color: "danger" },
  { id: "ransomware", label: "Ransomware", color: "warning" },
  { id: "privacy", label: "Vie privée", color: "secondary" },
  { id: "encryption", label: "Chiffrement", color: "accent" },
  { id: "general", label: "Général", color: "muted" },
];

export default function GuidesPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-secondary/10 p-2">
              <BookOpen className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold">Guides et ressources</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Apprenez à protéger vos données avec nos guides pratiques et
            accessibles. Du débutant à l'utilisateur avancé, trouvez toutes les
            informations pour sécuriser votre vie numérique.
          </p>
        </div>

        {/* Catégories */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  cat.id === "all"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Articles en vedette */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Articles en vedette</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => (
                <Link key={article.id} href={`/guides/${article.slug}`}>
                  <Card className="h-full hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded ${
                            article.category === "phishing"
                              ? "bg-danger/10 text-danger"
                              : article.category === "privacy"
                              ? "bg-secondary/10 text-secondary"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          {article.category}
                        </span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {article.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime} min</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-muted rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Autres articles */}
        {otherArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tous les guides</h2>
            <div className="space-y-6">
              {otherArticles.map((article) => (
                <Link key={article.id} href={`/guides/${article.slug}`}>
                  <Card className="hover:border-primary/50 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className={`px-2 py-1 text-xs font-semibold rounded ${
                                article.category === "phishing"
                                  ? "bg-danger/10 text-danger"
                                  : article.category === "privacy"
                                  ? "bg-secondary/10 text-secondary"
                                  : "bg-primary/10 text-primary"
                              }`}
                            >
                              {article.category}
                            </span>
                          </div>
                          <CardTitle className="text-2xl mb-2 hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="mb-4">
                            {article.excerpt}
                          </CardDescription>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{article.readTime} min de lecture</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(article.publishedAt)}</span>
                            </div>
                          </div>
                        </div>
                        <ArrowRight className="h-6 w-6 text-muted-foreground flex-shrink-0 ml-4" />
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="text-center py-12">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'aide personnalisée ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Utilisez nos outils interactifs pour évaluer votre sécurité et
              recevoir des recommandations adaptées à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" asChild>
                <Link href="/outils/audit">Faire l'audit de sécurité</Link>
              </Button>
              <Button variant="default" asChild>
                <Link href="/outils">Voir tous les outils</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
