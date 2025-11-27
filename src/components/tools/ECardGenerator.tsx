"use client";

import { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import {
  CreditCard,
  Download,
  Copy,
  Plus,
  X,
  QrCode,
  Lock,
  Image as ImageIcon,
  Upload,
} from "lucide-react";
import type { ECard } from "@/types";
import QRCodeLib from "qrcode";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function ECardGenerator() {
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [copied, setCopied] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const [card, setCard] = useState<ECard>({
    username: "",
    avatar: "",
    pgpKey: "",
    contacts: [{ type: "email", value: "", label: "Email" }],
    bio: "",
    encrypted: false,
  });

  const handleAddContact = () => {
    setCard({
      ...card,
      contacts: [
        ...card.contacts,
        { type: "custom", value: "", label: "" },
      ],
    });
  };

  const handleRemoveContact = (index: number) => {
    const newContacts = card.contacts.filter((_, i) => i !== index);
    setCard({ ...card, contacts: newContacts });
  };

  const handleContactChange = (
    index: number,
    field: "type" | "value" | "label",
    value: string
  ) => {
    const newContacts = [...card.contacts];
    newContacts[index] = { ...newContacts[index], [field]: value };
    setCard({ ...card, contacts: newContacts });
  };

  const generateQRCode = async () => {
    try {
      const cardData = {
        username: card.username,
        contacts: card.contacts.filter((c) => c.value),
        bio: card.bio,
      };
      const dataUrl = await QRCodeLib.toDataURL(JSON.stringify(cardData), {
        width: 300,
        margin: 2,
        color: {
          dark: "#06b6d4",
          light: "#0f172a",
        },
      });
      setQrCodeUrl(dataUrl);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleExportPNG = async () => {
    if (!cardRef.current) {
      alert("Erreur : Impossible de trouver la carte");
      return;
    }

    if (!card.username) {
      alert("Veuillez remplir au moins votre nom avant d'exporter");
      return;
    }

    try {
      // Options pour html2canvas avec gestion CORS
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      // Créer le lien de téléchargement
      canvas.toBlob((blob) => {
        if (!blob) {
          alert("Erreur lors de la création de l'image");
          return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = `ecard-${card.username || "secure"}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, "image/png");
    } catch (error) {
      console.error("Error exporting PNG:", error);
      const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
      alert(`Erreur lors de l'export PNG:\n${errorMessage}\n\nDétails dans la console (F12)`);
    }
  };

  const handleExportPDF = async () => {
    if (!cardRef.current) {
      alert("Erreur : Impossible de trouver la carte");
      return;
    }

    if (!card.username) {
      alert("Veuillez remplir au moins votre nom avant d'exporter");
      return;
    }

    try {
      // Options pour html2canvas avec gestion CORS
      const canvas = await html2canvas(cardRef.current, {
        backgroundColor: null,
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/png");

      // Créer le PDF
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      // Calculer les dimensions pour centrer l'image
      const pdfWidth = 297; // A4 landscape width in mm
      const pdfHeight = 210; // A4 landscape height in mm
      const imgWidth = pdfWidth - 20; // Marges de 10mm de chaque côté
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Centrer verticalement si l'image est plus petite que la page
      const yPosition = imgHeight < pdfHeight ? (pdfHeight - imgHeight) / 2 : 10;

      pdf.addImage(imgData, "PNG", 10, yPosition, imgWidth, imgHeight);
      pdf.save(`ecard-${card.username || "secure"}.pdf`);
    } catch (error) {
      console.error("Error exporting PDF:", error);
      const errorMessage = error instanceof Error ? error.message : "Erreur inconnue";
      alert(`Erreur lors de l'export PDF:\n${errorMessage}\n\nDétails dans la console (F12)`);
    }
  };

  const handleCopyData = () => {
    const cardData = JSON.stringify(card, null, 2);
    navigator.clipboard.writeText(cardData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Vérifier que c'est une image
    if (!file.type.startsWith("image/")) {
      alert("Veuillez sélectionner une image valide");
      return;
    }

    // Vérifier la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("L'image ne doit pas dépasser 5MB");
      return;
    }

    // Lire le fichier et créer une URL data
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setAvatarPreview(result);
      setCard({ ...card, avatar: result });
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveAvatar = () => {
    setAvatarPreview("");
    setCard({ ...card, avatar: "" });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Formulaire */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
              <CardDescription>
                Ces informations apparaîtront sur votre eCard
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Pseudonyme / Nom
                </label>
                <Input
                  value={card.username}
                  onChange={(e) =>
                    setCard({ ...card, username: e.target.value })
                  }
                  placeholder="SecureUser"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Bio / Description
                </label>
                <textarea
                  value={card.bio}
                  onChange={(e) => setCard({ ...card, bio: e.target.value })}
                  placeholder="Développeur passionné par la cybersécurité..."
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Avatar (optionnel)
                </label>

                {/* Input caché pour l'upload de fichier */}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />

                {/* Preview de l'avatar ou bouton d'upload */}
                {avatarPreview || card.avatar ? (
                  <div className="space-y-3">
                    <div className="relative w-32 h-32 mx-auto">
                      <img
                        src={avatarPreview || card.avatar}
                        alt="Avatar preview"
                        className="w-full h-full rounded-full object-cover border-2 border-primary"
                      />
                      <button
                        onClick={handleRemoveAvatar}
                        className="absolute -top-2 -right-2 bg-danger text-danger-foreground rounded-full p-1 hover:bg-danger/90 transition-colors"
                        title="Supprimer l'avatar"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Changer l'image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button
                      variant="default"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full"
                    >
                      <Upload className="mr-2 h-4 w-4" />
                      Choisir une image
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      JPG, PNG, GIF - Max 5MB
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Clé PGP publique (optionnel)
                </label>
                <textarea
                  value={card.pgpKey}
                  onChange={(e) => setCard({ ...card, pgpKey: e.target.value })}
                  placeholder="-----BEGIN PGP PUBLIC KEY BLOCK-----..."
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-mono ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Contacts</CardTitle>
                  <CardDescription>
                    Ajoutez vos moyens de contact sécurisés
                  </CardDescription>
                </div>
                <Button variant="primary" size="sm" onClick={handleAddContact}>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {card.contacts.map((contact, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex gap-2">
                    <select
                      value={contact.type}
                      onChange={(e) =>
                        handleContactChange(
                          index,
                          "type",
                          e.target.value as any
                        )
                      }
                      className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="email">Email</option>
                      <option value="signal">Signal</option>
                      <option value="matrix">Matrix</option>
                      <option value="custom">Autre</option>
                    </select>

                    <Input
                      value={contact.value}
                      onChange={(e) =>
                        handleContactChange(index, "value", e.target.value)
                      }
                      placeholder={
                        contact.type === "email"
                          ? "user@example.com"
                          : contact.type === "signal"
                          ? "+33612345678"
                          : contact.type === "matrix"
                          ? "@user:matrix.org"
                          : "Valeur"
                      }
                      className="flex-1"
                    />

                    {card.contacts.length > 1 && (
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleRemoveContact(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {contact.type === "custom" && (
                    <Input
                      value={contact.label}
                      onChange={(e) =>
                        handleContactChange(index, "label", e.target.value)
                      }
                      placeholder="Label (ex: Telegram)"
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Options</CardTitle>
            </CardHeader>
            <CardContent>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={card.encrypted}
                  onChange={(e) =>
                    setCard({ ...card, encrypted: e.target.checked })
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">
                  Marquer comme chiffré (affiche un cadenas)
                </span>
              </label>
            </CardContent>
          </Card>
        </div>

        {/* Prévisualisation */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prévisualisation</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                ref={cardRef}
                style={{
                  background: "linear-gradient(to bottom right, #1e293b, #0f172a)",
                  border: "2px solid #06b6d4",
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  color: "#e2e8f0"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "1.5rem", marginBottom: "1.5rem" }}>
                  {card.avatar ? (
                    <img
                      src={card.avatar}
                      alt="Avatar"
                      style={{
                        width: "6rem",
                        height: "6rem",
                        borderRadius: "9999px",
                        border: "2px solid #06b6d4",
                        objectFit: "cover"
                      }}
                    />
                  ) : (
                    <div style={{
                      width: "6rem",
                      height: "6rem",
                      borderRadius: "9999px",
                      border: "2px solid #06b6d4",
                      backgroundColor: "#334155",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                      <ImageIcon style={{ width: "3rem", height: "3rem", color: "#94a3b8" }} />
                    </div>
                  )}

                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <h3 style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                        {card.username || "Votre nom"}
                      </h3>
                      {card.encrypted && (
                        <Lock style={{ width: "1.25rem", height: "1.25rem", color: "#10b981" }} />
                      )}
                    </div>
                    {card.bio && (
                      <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
                        {card.bio}
                      </p>
                    )}
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#06b6d4", marginBottom: "0.75rem" }}>
                    Contacts
                  </h4>
                  {card.contacts
                    .filter((c) => c.value)
                    .map((contact, index) => (
                      <div
                        key={index}
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", marginBottom: "0.5rem" }}
                      >
                        <span style={{ color: "#94a3b8", textTransform: "capitalize" }}>
                          {contact.type === "custom"
                            ? contact.label
                            : contact.type}
                          :
                        </span>
                        <span style={{ fontFamily: "monospace" }}>{contact.value}</span>
                      </div>
                    ))}
                </div>

                {card.pgpKey && (
                  <div style={{ marginBottom: "1rem" }}>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 600, color: "#06b6d4", marginBottom: "0.5rem" }}>
                      Clé PGP
                    </h4>
                    <div style={{ backgroundColor: "rgba(15, 23, 42, 0.5)", borderRadius: "0.25rem", padding: "0.5rem", fontSize: "0.75rem", fontFamily: "monospace", overflow: "hidden" }}>
                      {card.pgpKey.slice(0, 100)}...
                    </div>
                  </div>
                )}

                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #334155", textAlign: "center" }}>
                  <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                    Généré avec SecureWeb
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Export</CardTitle>
              <CardDescription>
                Téléchargez votre eCard dans différents formats
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="primary"
                onClick={handleExportPNG}
                className="w-full"
                disabled={!card.username}
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger en PNG
              </Button>

              <Button
                variant="default"
                onClick={handleExportPDF}
                className="w-full"
                disabled={!card.username}
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger en PDF
              </Button>

              <Button
                variant="default"
                onClick={generateQRCode}
                className="w-full"
                disabled={!card.username}
              >
                <QrCode className="mr-2 h-4 w-4" />
                Générer QR Code
              </Button>

              {qrCodeUrl && (
                <div className="mt-4 p-4 bg-background rounded-lg text-center">
                  <img
                    src={qrCodeUrl}
                    alt="QR Code"
                    className="mx-auto mb-2"
                  />
                  <a
                    href={qrCodeUrl}
                    download={`qrcode-${card.username}.png`}
                    className="text-sm text-primary hover:underline"
                  >
                    Télécharger le QR Code
                  </a>
                </div>
              )}

              <Button
                variant="ghost"
                onClick={handleCopyData}
                className="w-full"
                disabled={!card.username}
              >
                {copied ? (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Données copiées !
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copier les données JSON
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
