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
import {
  Star,
  Check,
  X,
  Filter,
  Zap,
  Shield,
  Globe,
  Tv,
  Smartphone,
} from "lucide-react";
import { vpnList } from "@/data/vpnData";
import type { VPN, VPNFilters } from "@/types";

export default function VPNComparator() {
  const [filters, setFilters] = useState<VPNFilters>({
    streaming: false,
    noLogs: false,
  });
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState<"rating" | "price">("rating");

  const filteredVPNs = vpnList
    .filter((vpn) => {
      if (filters.streaming && !vpn.features.streaming) return false;
      if (filters.noLogs && !vpn.features.noLogs) return false;
      if (filters.maxPrice && vpn.price.yearly > filters.maxPrice) return false;
      if (
        filters.minCountries &&
        vpn.features.countries < filters.minCountries
      )
        return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      return a.price.yearly - b.price.yearly;
    });

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < Math.floor(rating)
                ? "fill-warning text-warning"
                : "text-muted"
            }`}
          />
        ))}
      </div>
    );
  };

  const renderFeatureBar = (value: number, max: number = 5) => {
    const percentage = (value / max) * 100;
    return (
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="h-2 rounded-full bg-primary transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Filtres et tri */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtres et tri
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Masquer" : "Afficher"}
            </Button>
          </div>
        </CardHeader>
        {showFilters && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.streaming}
                  onChange={(e) =>
                    setFilters({ ...filters, streaming: e.target.checked })
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">Compatible streaming</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.noLogs}
                  onChange={(e) =>
                    setFilters({ ...filters, noLogs: e.target.checked })
                  }
                  className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-primary"
                />
                <span className="text-sm">Politique no-logs</span>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Trier par
              </label>
              <div className="flex gap-2">
                <Button
                  variant={sortBy === "rating" ? "primary" : "default"}
                  size="sm"
                  onClick={() => setSortBy("rating")}
                >
                  Note
                </Button>
                <Button
                  variant={sortBy === "price" ? "primary" : "default"}
                  size="sm"
                  onClick={() => setSortBy("price")}
                >
                  Prix
                </Button>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              {filteredVPNs.length} VPN{filteredVPNs.length > 1 ? "s" : ""}{" "}
              trouvé{filteredVPNs.length > 1 ? "s" : ""}
            </p>
          </CardContent>
        )}
      </Card>

      {/* Liste des VPN */}
      <div className="grid gap-6">
        {filteredVPNs.map((vpn, index) => (
          <Card
            key={vpn.id}
            className={index === 0 ? "border-2 border-primary" : ""}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <CardTitle className="text-2xl">{vpn.name}</CardTitle>
                    {index === 0 && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
                        RECOMMANDÉ
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {renderStars(vpn.rating)}
                    <span className="text-sm text-muted-foreground">
                      {vpn.rating}/5
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary">
                    {vpn.price.yearly}€
                  </div>
                  <div className="text-sm text-muted-foreground">
                    /mois (annuel)
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {vpn.price.monthly}€/mois
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Caractéristiques */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Vitesse</span>
                  </div>
                  {renderFeatureBar(vpn.features.speed)}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Sécurité</span>
                  </div>
                  {renderFeatureBar(vpn.features.security)}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Pays</span>
                  </div>
                  <span className="text-sm">{vpn.features.countries}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Appareils</span>
                  </div>
                  <span className="text-sm">
                    {vpn.features.devices === 999
                      ? "Illimité"
                      : vpn.features.devices}
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {vpn.features.streaming && (
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full flex items-center gap-1">
                    <Tv className="h-3 w-3" />
                    Streaming
                  </span>
                )}
                {vpn.features.noLogs && (
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full flex items-center gap-1">
                    <Shield className="h-3 w-3" />
                    No Logs
                  </span>
                )}
              </div>

              {/* Avantages et inconvénients */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 text-secondary flex items-center gap-2">
                    <Check className="h-4 w-4" />
                    Avantages
                  </h4>
                  <ul className="space-y-1">
                    {vpn.pros.map((pro, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-warning flex items-center gap-2">
                    <X className="h-4 w-4" />
                    Inconvénients
                  </h4>
                  <ul className="space-y-1">
                    {vpn.cons.map((con, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        • {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Plateformes */}
              <div>
                <h4 className="font-semibold mb-2">Plateformes supportées</h4>
                <div className="flex flex-wrap gap-2">
                  {vpn.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 bg-card border border-border rounded text-xs capitalize"
                    >
                      {platform}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="primary" className="w-full" size="lg">
                En savoir plus sur {vpn.name}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredVPNs.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <p className="text-muted-foreground">
              Aucun VPN ne correspond à vos critères. Essayez de modifier les
              filtres.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
