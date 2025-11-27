"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { CheckCircle2, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { auditQuestions, categoryNames } from "@/data/auditQuestions";
import { calculateAuditResult, getLevelMessage } from "@/lib/audit";
import type { SecurityAuditResult } from "@/types";

export default function SecurityAudit() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<SecurityAuditResult | null>(null);

  const currentQuestion = auditQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / auditQuestions.length) * 100;

  const handleAnswer = (points: number) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: points,
    };
    setAnswers(newAnswers);

    if (currentQuestionIndex < auditQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculer le résultat
      const categoryScores = Object.entries(categoryNames).map(([key, name]) => {
        const questions = auditQuestions.filter((q) => q.category === key);
        const score = questions.reduce(
          (sum, q) => sum + (newAnswers[q.id] || 0),
          0
        );
        const maxScore = questions.reduce(
          (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
          0
        );
        return { category: key, score, maxScore };
      });

      const auditResult = calculateAuditResult(categoryScores);
      setResult(auditResult);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  };

  // Grouper les questions par catégorie pour afficher les scores
  const getCategoryScores = () => {
    return Object.entries(categoryNames).map(([key, name]) => {
      const questions = auditQuestions.filter((q) => q.category === key);
      const score = questions.reduce(
        (sum, q) => sum + (answers[q.id] || 0),
        0
      );
      const maxScore = questions.reduce(
        (sum, q) => sum + Math.max(...q.options.map((o) => o.points)),
        0
      );
      const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
      return { category: name, score, maxScore, percentage };
    });
  };

  if (result) {
    const levelInfo = getLevelMessage(result.level);
    const categoryScores = getCategoryScores();

    return (
      <div className="space-y-6">
        <Card className="border-2 border-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-3xl mb-2">
                  Score : {result.score}/100
                </CardTitle>
                <CardDescription className={`text-lg ${levelInfo.color}`}>
                  {levelInfo.title}
                </CardDescription>
              </div>
              <div className="text-6xl font-bold text-primary">
                {result.score}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{levelInfo.description}</p>
            <div className="mt-4 w-full bg-muted rounded-full h-4">
              <div
                className={`h-4 rounded-full transition-all ${
                  result.level === "critique" || result.level === "faible"
                    ? "bg-danger"
                    : result.level === "moyen"
                    ? "bg-warning"
                    : "bg-secondary"
                }`}
                style={{ width: `${result.score}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Scores par catégorie</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {categoryScores.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{cat.category}</span>
                    <span className="text-sm text-muted-foreground">
                      {cat.score}/{cat.maxScore} ({cat.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        cat.percentage < 40
                          ? "bg-danger"
                          : cat.percentage < 70
                          ? "bg-warning"
                          : "bg-secondary"
                      }`}
                      style={{ width: `${cat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recommandations prioritaires</CardTitle>
            <CardDescription>
              Voici les actions à mettre en place pour améliorer votre sécurité
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button variant="primary" onClick={handleRestart} className="flex-1">
            Refaire l'audit
          </Button>
          <Button variant="default" asChild className="flex-1">
            <a href="/guides">Consulter les guides</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardDescription>
              Question {currentQuestionIndex + 1} sur {auditQuestions.length}
            </CardDescription>
            <CardDescription>
              {categoryNames[currentQuestion.category as keyof typeof categoryNames]}
            </CardDescription>
          </div>
          <div className="w-full bg-muted rounded-full h-2 mb-4">
            <div
              className="h-2 rounded-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <CardTitle className="text-2xl">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.points)}
                className={`p-4 text-left rounded-lg border-2 transition-all hover:border-primary hover:bg-primary/5 ${
                  answers[currentQuestion.id] === option.points
                    ? "border-primary bg-primary/10"
                    : "border-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {answers[currentQuestion.id] === option.points ? (
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    ) : (
                      <div className="h-5 w-5 rounded-full border-2 border-border" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{option.label}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            {currentQuestionIndex > 0 && (
              <Button
                variant="default"
                onClick={handlePrevious}
                className="flex-1"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Précédent
              </Button>
            )}
            {answers[currentQuestion.id] !== undefined && (
              <Button
                variant="primary"
                onClick={() => handleAnswer(answers[currentQuestion.id])}
                className="flex-1"
              >
                {currentQuestionIndex === auditQuestions.length - 1
                  ? "Voir les résultats"
                  : "Suivant"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="text-lg">À propos de cet audit</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Cet audit évalue vos pratiques de sécurité dans 5 catégories clés :
            mots de passe, navigation web, réseaux sociaux, appareils et
            sauvegardes. Vos réponses sont traitées localement et ne sont jamais
            envoyées à nos serveurs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
