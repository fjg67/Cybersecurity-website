import { CheckCircle2 } from "lucide-react";
import SecurityAudit from "@/components/tools/SecurityAudit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Audit de sécurité personnel | SecureWeb",
  description:
    "Évaluez votre niveau de sécurité avec notre questionnaire gratuit. Recevez des recommandations personnalisées pour protéger vos données.",
};

export default function AuditPage() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-lg bg-secondary/10 p-2">
              <CheckCircle2 className="h-8 w-8 text-secondary" />
            </div>
            <h1 className="text-4xl font-bold">Audit de sécurité personnel</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Répondez à notre questionnaire pour évaluer vos pratiques de
            sécurité et recevez des recommandations personnalisées. Toutes les
            réponses sont traitées localement, rien n'est envoyé à nos serveurs.
          </p>
        </div>

        <SecurityAudit />
      </div>
    </div>
  );
}
