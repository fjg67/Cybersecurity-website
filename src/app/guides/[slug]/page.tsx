import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Article non trouvé | SecureWeb",
    };
  }

  return {
    title: `${article.title} | SecureWeb`,
    description: article.excerpt,
    keywords: article.tags,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.category === article.category ||
          a.tags.some((tag) => article.tags.includes(tag)))
    )
    .slice(0, 3);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Link href="/guides">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux guides
          </Button>
        </Link>

        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span
                className={`px-3 py-1 text-sm font-semibold rounded ${
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

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {article.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} min de lecture</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Par {article.author}</span>
              </div>
            </div>

            {article.tags.length > 0 && (
              <div className="flex items-center gap-2 mt-6">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-muted rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </header>

          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold mb-4 mt-8">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold mb-3 mt-8">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold mb-2 mt-6">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="mb-4 text-muted-foreground leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside mb-4 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-muted-foreground">{children}</li>
                ),
                code: ({ children, className }) => {
                  const isBlock = className?.includes("language-");
                  if (isBlock) {
                    return (
                      <code className="block bg-card border border-border rounded-lg p-4 my-4 overflow-x-auto font-mono text-sm">
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code className="bg-card border border-border rounded px-2 py-1 font-mono text-sm">
                      {children}
                    </code>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-foreground">
                    {children}
                  </strong>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>

          {relatedArticles.length > 0 && (
            <Card className="mt-12">
              <CardHeader>
                <CardTitle>Articles similaires</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      href={`/guides/${related.slug}`}
                      className="block p-4 rounded-lg border border-border hover:border-primary transition-all"
                    >
                      <h3 className="font-semibold mb-2 hover:text-primary">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span>{related.readTime} min</span>
                        <span>{formatDate(related.publishedAt)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </article>
      </div>
    </div>
  );
}
