"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Copy, RefreshCw, Check, AlertCircle } from "lucide-react";
import {
  generatePassword,
  evaluatePasswordStrength,
  generatePassphrase,
  checkPasswordBreach,
} from "@/lib/password";
import { copyToClipboard } from "@/lib/utils";
import type { PasswordConfig } from "@/types";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  const [checking, setChecking] = useState(false);
  const [breached, setBreached] = useState<{ breached: boolean; count: number } | null>(null);
  const [mode, setMode] = useState<"password" | "passphrase">("password");

  const [config, setConfig] = useState<PasswordConfig>({
    length: 16,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
    excludeAmbiguous: true,
  });

  const strength = password ? evaluatePasswordStrength(password) : null;

  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGenerate = () => {
    const newPassword =
      mode === "password" ? generatePassword(config) : generatePassphrase(4);
    setPassword(newPassword);
    setCopied(false);
    setBreached(null);
  };

  const handleCopy = async () => {
    const success = await copyToClipboard(password);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleCheckBreach = async () => {
    if (!password) return;
    setChecking(true);
    const result = await checkPasswordBreach(password);
    setBreached(result);
    setChecking(false);
  };

  const handleConfigChange = (key: keyof PasswordConfig, value: any) => {
    const newConfig = { ...config, [key]: value };
    setConfig(newConfig);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Mode de génération</CardTitle>
          <CardDescription>
            Choisissez entre un mot de passe complexe ou une phrase de passe
            mémorisable
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              variant={mode === "password" ? "primary" : "default"}
              onClick={() => setMode("password")}
            >
              Mot de passe
            </Button>
            <Button
              variant={mode === "passphrase" ? "primary" : "default"}
              onClick={() => setMode("passphrase")}
            >
              Phrase de passe
            </Button>
          </div>
        </CardContent>
      </Card>

      {mode === "password" && (
        <Card>
          <CardHeader>
            <CardTitle>Configuration</CardTitle>
            <CardDescription>
              Personnalisez les paramètres de votre mot de passe
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Longueur: {config.length} caractères
              </label>
              <input
                type="range"
                min="8"
                max="128"
                value={config.length}
                onChange={(e) =>
                  handleConfigChange("length", parseInt(e.target.value))
                }
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>8</span>
                <span>128</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.uppercase}
                  onChange={(e) =>
                    handleConfigChange("uppercase", e.target.checked)
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">Majuscules (A-Z)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.lowercase}
                  onChange={(e) =>
                    handleConfigChange("lowercase", e.target.checked)
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">Minuscules (a-z)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.numbers}
                  onChange={(e) =>
                    handleConfigChange("numbers", e.target.checked)
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">Chiffres (0-9)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.symbols}
                  onChange={(e) =>
                    handleConfigChange("symbols", e.target.checked)
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">Symboles (!@#$...)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer md:col-span-2">
                <input
                  type="checkbox"
                  checked={config.excludeAmbiguous}
                  onChange={(e) =>
                    handleConfigChange("excludeAmbiguous", e.target.checked)
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">
                  Exclure les caractères ambigus (0, O, l, 1, I)
                </span>
              </label>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Mot de passe généré</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              value={password}
              readOnly
              className="font-mono text-lg"
              placeholder="Cliquez sur Générer"
            />
            <Button variant="default" onClick={handleCopy} title="Copier">
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </Button>
            <Button variant="primary" onClick={handleGenerate} title="Régénérer">
              <RefreshCw className="h-5 w-5" />
            </Button>
          </div>

          {strength && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Force du mot de passe</span>
                <span className={`text-sm font-semibold ${strength.color}`}>
                  {strength.label}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all ${
                    strength.score === 0
                      ? "bg-danger"
                      : strength.score === 1
                      ? "bg-warning"
                      : strength.score === 2
                      ? "bg-yellow-500"
                      : "bg-secondary"
                  }`}
                  style={{ width: `${(strength.score / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              variant="default"
              size="sm"
              onClick={handleCheckBreach}
              disabled={!password || checking}
            >
              {checking ? "Vérification..." : "Vérifier si compromis"}
            </Button>
          </div>

          {breached && (
            <div
              className={`p-4 rounded-md ${
                breached.breached
                  ? "bg-danger/10 border border-danger"
                  : "bg-secondary/10 border border-secondary"
              }`}
            >
              <div className="flex items-start gap-2">
                <AlertCircle
                  className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                    breached.breached ? "text-danger" : "text-secondary"
                  }`}
                />
                <div>
                  {breached.breached ? (
                    <>
                      <p className="font-semibold text-danger">
                        Mot de passe compromis !
                      </p>
                      <p className="text-sm mt-1">
                        Ce mot de passe a été trouvé {breached.count} fois dans
                        des bases de données de mots de passe compromis. Ne
                        l'utilisez pas !
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-semibold text-secondary">
                        Mot de passe sécurisé
                      </p>
                      <p className="text-sm mt-1">
                        Ce mot de passe n'a pas été trouvé dans les bases de
                        données de mots de passe compromis.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="bg-card/50">
        <CardHeader>
          <CardTitle className="text-lg">Conseils de sécurité</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
              <span>
                Utilisez un gestionnaire de mots de passe pour stocker vos mots
                de passe de manière sécurisée
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
              <span>
                Ne réutilisez jamais le même mot de passe sur plusieurs sites
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
              <span>
                Activez l'authentification à deux facteurs (2FA) partout où
                c'est possible
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
              <span>
                Changez vos mots de passe régulièrement, surtout pour les
                comptes sensibles
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
