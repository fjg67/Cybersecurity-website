import type { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "vpn-2025",
    title: "Comment choisir son VPN en 2025",
    slug: "comment-choisir-vpn-2025",
    excerpt:
      "Guide complet pour sélectionner le VPN qui correspond à vos besoins : sécurité, vitesse, prix et confidentialité.",
    content: `
# Comment choisir son VPN en 2025

Un VPN (Virtual Private Network) est devenu un outil indispensable pour protéger sa vie privée en ligne. Mais face à la multitude d'offres, comment faire le bon choix ?

## Les critères essentiels

### 1. Politique de confidentialité (No-Logs)

Le critère le plus important. Un véritable VPN "no-logs" ne conserve **aucune trace** de votre activité :
- Pas d'historique de navigation
- Pas de logs de connexion
- Pas de métadonnées

⚠️ Méfiez-vous des VPN qui prétendent être "no-logs" mais sont basés dans des pays membres de l'alliance 5/9/14 Eyes.

### 2. Juridiction et localisation

Privilégiez les VPN basés dans des pays respectueux de la vie privée :
- **Suisse** : Excellente protection des données (ProtonVPN)
- **Panama** : Hors juridiction 5/9/14 Eyes (NordVPN)
- **Suède** : Bonnes lois sur la vie privée (Mullvad)

Évitez : États-Unis, Royaume-Uni, et autres pays de l'alliance 14 Eyes.

### 3. Protocoles de sécurité

Un bon VPN doit proposer :
- **WireGuard** : Moderne, rapide et sécurisé
- **OpenVPN** : Standard éprouvé et fiable
- **IKEv2/IPSec** : Bon pour mobile

Évitez : PPTP (obsolète et non sécurisé)

### 4. Vitesse et performance

La vitesse dépend de :
- Distance avec le serveur
- Charge du serveur
- Protocole utilisé
- Votre connexion internet de base

Les meilleurs VPN (ExpressVPN, NordVPN) offrent des vitesses excellentes avec une perte minime.

### 5. Prix et rapport qualité-prix

- **Mensuel** : 10-13€/mois
- **Annuel** : 3-7€/mois (meilleur rapport)
- **Gratuit** : ⚠️ ATTENTION - Souvent dangereux (revente de données)

## VPN gratuits : pourquoi les éviter ?

"Si c'est gratuit, c'est vous le produit"

Les VPN gratuits :
- Revendent souvent vos données
- Injectent de la publicité
- Limitent fortement la bande passante
- Offrent peu de serveurs surchargés

**Exception** : ProtonVPN propose une version gratuite limitée mais sécurisée.

## Fonctionnalités importantes

### Kill Switch
Coupe automatiquement votre connexion internet si le VPN se déconnecte, évitant les fuites d'IP.

### Split Tunneling
Permet de choisir quelles applications utilisent le VPN et lesquelles passent en direct.

### Multi-hop / Double VPN
Route votre trafic à travers 2 serveurs VPN pour plus d'anonymat (au prix de la vitesse).

### Bloqueur de pub intégré
Certains VPN bloquent les pubs et trackers (CyberSec sur NordVPN, MACE sur PIA).

## Cas d'usage et recommandations

### Pour le streaming (Netflix, Disney+, etc.)
→ **ExpressVPN** ou **NordVPN** : Excellents pour débloquer le contenu géo-restreint

### Pour la confidentialité maximale
→ **Mullvad** ou **ProtonVPN** : Politique de confidentialité exemplaire

### Pour le meilleur rapport qualité-prix
→ **Surfshark** : Connexions illimitées à prix imbattable

### Pour les débutants
→ **NordVPN** : Interface simple, bon équilibre entre tous les critères

## Installation et configuration

1. **Choisissez un abonnement** long terme (meilleur prix)
2. **Téléchargez** l'app officielle sur le site du VPN
3. **Activez le Kill Switch** dans les paramètres
4. **Sélectionnez un serveur** proche pour la vitesse
5. **Testez votre IP** sur whatismyip.com

## Questions fréquentes

**Un VPN me rend-il totalement anonyme ?**
Non. Il masque votre IP mais pas votre empreinte digitale (cookies, etc.). Combinez-le avec un navigateur axé sur la vie privée.

**Puis-je utiliser un VPN sur tous mes appareils ?**
Oui, la plupart permettent 5-10 connexions simultanées. Surfshark en propose un nombre illimité.

**Un VPN ralentit-il ma connexion ?**
Légèrement. Les meilleurs VPN causent une perte de vitesse de 10-20% seulement.

**Les VPN sont-ils légaux ?**
Oui dans la plupart des pays (sauf Chine, Russie, EAU, etc.). Mais les utiliser pour des activités illégales reste illégal.

## Conclusion

Un bon VPN est un investissement pour votre sécurité en ligne. Privilégiez :
- Politique no-logs vérifiable
- Bonne juridiction
- Protocoles modernes (WireGuard)
- Prix raisonnable (évitez le gratuit)

Notre recommandation générale : **NordVPN** pour son excellent équilibre prix/sécurité/vitesse.
    `,
    category: "privacy",
    author: "SecureWeb",
    publishedAt: new Date("2025-01-15"),
    tags: ["vpn", "vie-privée", "anonymat", "chiffrement"],
    readTime: 8,
    featured: true,
  },
  {
    id: "password-errors",
    title: "Les 10 erreurs qui compromettent vos mots de passe",
    slug: "10-erreurs-mots-de-passe",
    excerpt:
      "Découvrez les erreurs courantes qui rendent vos comptes vulnérables et comment les éviter.",
    content: `
# Les 10 erreurs qui compromettent vos mots de passe

Vos mots de passe sont la première ligne de défense de vos comptes. Voici les 10 erreurs les plus courantes qui les rendent vulnérables.

## 1. Réutiliser le même mot de passe partout

**Pourquoi c'est dangereux :**
Si un site se fait pirater, les hackers testeront ce mot de passe sur tous vos autres comptes (credential stuffing).

**Solution :**
- Un mot de passe **unique** par compte
- Utilisez un gestionnaire de mots de passe

## 2. Utiliser des informations personnelles

**Mots de passe faibles :**
- Date de naissance
- Nom de votre animal
- Prénom de vos enfants
- Votre ville

**Pourquoi :**
Ces informations sont souvent publiques sur les réseaux sociaux.

**Solution :**
Générez des mots de passe aléatoires sans lien avec votre vie.

## 3. Choisir des mots de passe trop courts

**Mots de passe de moins de 8 caractères :**
Peuvent être cassés en quelques heures par force brute.

**Recommandation :**
- **Minimum** : 12 caractères
- **Idéal** : 16+ caractères

## 4. Ne pas utiliser de caractères spéciaux

**Mauvais :**
\`\`\`
motdepasse123
\`\`\`

**Bon :**
\`\`\`
M0t-d3-P@ss3!2025
\`\`\`

**Combinez :**
- Majuscules
- Minuscules
- Chiffres
- Symboles (!@#$%^&*)

## 5. Stocker ses mots de passe en clair

**À éviter absolument :**
- Fichier texte sur le bureau
- Post-it sur l'écran
- Email à soi-même
- Notes non chiffrées dans le téléphone

**Solution :**
- Gestionnaire de mots de passe chiffré (Bitwarden, 1Password, KeePass)

## 6. Partager ses mots de passe

**Risques :**
- Perte de contrôle sur le compte
- Traçabilité impossible des actions
- Violation des CGU de la plupart des services

**Si vous devez partager :**
- Utilisez une fonctionnalité de partage sécurisé du gestionnaire de MdP
- Changez le mot de passe après usage

## 7. Ne pas activer la 2FA

**L'erreur :**
Ne pas activer l'authentification à deux facteurs.

**Pourquoi c'est crucial :**
Même si votre mot de passe est compromis, le 2FA empêche l'accès.

**Activez le 2FA sur :**
- Email
- Réseaux sociaux
- Banque en ligne
- Services cloud
- Tous les comptes importants

## 8. Utiliser les questions de sécurité standards

**Problème :**
"Nom de jeune fille de votre mère" → Souvent public ou facile à trouver.

**Solution :**
- Donnez des réponses aléatoires (stockées dans votre gestionnaire)
- Ou utilisez des phrases absurdes difficiles à deviner

## 9. Ne jamais changer ses mots de passe

**Mythe :**
"Je dois changer mes mots de passe tous les 3 mois"

**Réalité :**
Changez un mot de passe **uniquement** si :
- Le service a été piraté
- Vous pensez qu'il est compromis
- Vous l'avez partagé

Sinon, un mot de passe **fort et unique** n'a pas besoin d'être changé régulièrement.

## 10. Ignorer les alertes de fuite de données

**Services à surveiller :**
- https://haveibeenpwned.com
- Notifications de vos services

**Si votre mot de passe a fuité :**
1. **Changez-le immédiatement**
2. Changez-le sur **tous** les sites où vous l'avez réutilisé
3. Activez la 2FA
4. Surveillez vos comptes

## Bonus : Comment créer un bon mot de passe

### Méthode 1 : Générateur aléatoire
\`\`\`
K9$mP2@nX7!qL4
\`\`\`

### Méthode 2 : Phrase de passe
\`\`\`
Correct-Horse-Battery-Staple-2025!
\`\`\`

Facile à retenir, difficile à deviner.

### Méthode 3 : Première lettre de phrase
"Je suis né le 15 mars 1990 à Paris et j'adore le chocolat"
\`\`\`
Jsnl15m1990àPeja!c
\`\`\`

## Gestionnaires de mots de passe recommandés

### Open Source
- **Bitwarden** (gratuit) - Notre recommandation #1
- **KeePassXC** (gratuit, 100% local)

### Payants
- **1Password** (excellent pour les familles)
- **Dashlane** (interface très intuitive)

### À éviter
- Gestionnaires de navigateur (moins sécurisés)
- Solutions non chiffrées

## Conclusion

Vos mots de passe sont vos clés numériques. Protégez-les comme vous protégeriez les clés de votre maison :

✅ Uniques
✅ Longs (12+ caractères)
✅ Complexes
✅ Stockés en sécurité
✅ Protégés par 2FA

Un gestionnaire de mots de passe n'est plus optionnel en 2025, c'est une **nécessité**.
    `,
    category: "general",
    author: "SecureWeb",
    publishedAt: new Date("2025-01-20"),
    tags: ["mots-de-passe", "sécurité", "bonnes-pratiques"],
    readTime: 6,
    featured: true,
  },
  {
    id: "phishing-guide",
    title: "Phishing : comment reconnaître une arnaque",
    slug: "phishing-reconnaitre-arnaque",
    excerpt:
      "Apprenez à identifier les tentatives de phishing et protégez-vous contre les arnaques par email.",
    content: `
# Phishing : comment reconnaître une arnaque

Le phishing (hameçonnage) est la technique d'arnaque #1 sur internet. Apprenez à le reconnaître pour protéger vos données.

## Qu'est-ce que le phishing ?

Le phishing consiste à se faire passer pour une entité de confiance (banque, service en ligne, administration) pour vous soutirer des informations sensibles :
- Mots de passe
- Numéros de carte bancaire
- Données personnelles

## Les signaux d'alerte

### 1. L'expéditeur est suspect

**Vérifiez l'adresse email complète :**
- ✅ service@paypal.com
- ❌ service@paypa1.com (chiffre 1 au lieu de L)
- ❌ noreply@paypal-secure-verification.com

### 2. Sentiment d'urgence

"Votre compte sera fermé dans 24h"
"Action requise immédiatement"
"Vérification de sécurité urgente"

→ Les vrais services ne vous pressent jamais ainsi.

### 3. Demande d'informations sensibles

Aucune entreprise légitime ne demande par email :
- Votre mot de passe
- Votre code de carte bancaire complet
- Votre code PIN

### 4. Liens suspects

**Comment vérifier :**
Survolez le lien (sans cliquer) pour voir l'URL réelle.

**Méfiance si :**
- URL raccourcie (bit.ly, etc.)
- Fautes d'orthographe dans le domaine
- Domaines étranges (.xyz, .top)

### 5. Pièces jointes inattendues

Ne jamais ouvrir de pièce jointe si :
- Vous ne l'attendiez pas
- L'expéditeur est inconnu
- Le fichier a une extension suspecte (.exe, .scr, .zip)

### 6. Qualité du message

Indices de phishing :
- Fautes d'orthographe nombreuses
- Grammaire approximative
- Images de mauvaise qualité
- Mise en forme étrange

## Types de phishing courants

### Phishing bancaire
"Votre compte a été suspendu"
→ Vérifiez en vous connectant **directement** sur le site de votre banque

### Phishing d'administration
Faux emails des impôts, CAF, Ameli
→ Les administrations communiquent rarement par email non sollicité

### Phishing de livraison
"Votre colis ne peut être livré"
→ Vérifiez le numéro de suivi sur le site officiel du transporteur

### Phishing de support technique
"Votre ordinateur est infecté"
→ Microsoft/Apple ne vous contactent JAMAIS ainsi

## Que faire si vous recevez un phishing ?

1. **Ne cliquez sur rien**
2. **Ne répondez pas**
3. **Signalez** :
   - Marquez comme spam
   - Signalez sur signal-spam.fr
   - Transférez à phishing@signal-spam.fr
4. **Supprimez** l'email

## Que faire si vous avez cliqué ?

### Si vous avez cliqué sur le lien :
1. **Ne saisissez aucune information**
2. Fermez la page immédiatement
3. Scannez votre ordinateur avec un antivirus

### Si vous avez saisi vos identifiants :
1. **Changez votre mot de passe immédiatement**
2. Activez la 2FA si ce n'est pas fait
3. Surveillez votre compte
4. Contactez le service concerné

### Si vous avez donné vos coordonnées bancaires :
1. **Faites opposition immédiatement** (numéro au dos de votre carte)
2. Contactez votre banque
3. Surveillez vos relevés
4. Déposez plainte si nécessaire

## Comment se protéger

### 1. Vérifiez toujours l'expéditeur
Regardez l'adresse email complète, pas juste le nom affiché.

### 2. Ne cliquez jamais sur les liens dans les emails
Tapez l'URL directement dans votre navigateur.

### 3. Activez la 2FA partout
Même si votre mot de passe est volé, la 2FA protège votre compte.

### 4. Utilisez un gestionnaire de mots de passe
Il ne saisira pas votre mot de passe sur un site de phishing.

### 5. Mettez à jour vos systèmes
Les mises à jour corrigent les failles de sécurité.

### 6. Formez-vous et restez vigilant
Le phishing évolue constamment. Restez informé.

## Exemples réels de phishing

### Exemple 1 : Faux email PayPal
\`\`\`
De : service@paypa1-secure.com
Objet : Votre compte a été limité

Cher client,

Nous avons détecté une activité suspecte sur votre compte.
Cliquez ici pour vérifier votre identité dans les 24h.

Cordialement,
L'équipe PayPal
\`\`\`

**Red flags :**
- Domaine suspect (paypa1)
- Urgence artificielle
- Lien suspect
- Formule impersonnelle

### Exemple 2 : Faux SMS de livraison
\`\`\`
Votre colis ne peut être livré.
Consultez les détails : bit.ly/xxxxx
\`\`\`

**Red flags :**
- URL raccourcie
- Pas de numéro de suivi
- Pas de nom du transporteur

## Ressources et outils

### Vérifier un email suspect
- VirusTotal : Analyser les liens
- Google Safe Browsing : Vérifier les URLs

### Signaler
- signal-spam.fr
- internet-signalement.gouv.fr

### S'informer
- cybermalveillance.gouv.fr
- Restez à jour sur notre site

## Conclusion

Le phishing repose sur la manipulation psychologique. Les règles d'or :

1. **Méfiez-vous** de l'urgence
2. **Vérifiez** l'expéditeur
3. **Ne cliquez pas** sur les liens suspects
4. **Tapez** les URLs directement
5. **Activez** la 2FA partout

Rappelez-vous : **Aucun service légitime ne vous demandera vos mots de passe par email.**
    `,
    category: "phishing",
    author: "SecureWeb",
    publishedAt: new Date("2025-01-25"),
    tags: ["phishing", "arnaque", "email", "sécurité"],
    readTime: 7,
    featured: true,
  },
];
