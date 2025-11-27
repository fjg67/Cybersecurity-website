# 📇 Guide d'utilisation - Générateur d'eCard

## Accès

**URL** : http://localhost:3000/outils/ecard

## Fonctionnalités

### 1. Upload d'avatar ✨

**Nouvelle fonctionnalité** : Vous pouvez maintenant uploader une image depuis votre ordinateur !

#### Comment faire :
1. Cliquez sur le bouton **"Choisir une image"**
2. Sélectionnez une image depuis votre explorateur de fichiers
3. L'image s'affiche instantanément dans la prévisualisation
4. Pour changer l'image, cliquez sur **"Changer l'image"**
5. Pour supprimer l'image, cliquez sur le **X rouge** en haut à droite de la prévisualisation

#### Formats supportés :
- JPG / JPEG
- PNG
- GIF
- WebP
- Tous les formats d'image standards

#### Limites :
- **Taille maximale** : 5 MB
- L'image est automatiquement affichée en rond (crop circulaire)
- L'image est stockée localement (jamais envoyée au serveur)

### 2. Informations personnelles

Remplissez les champs suivants :

- **Pseudonyme / Nom** : Votre nom ou pseudo
- **Bio / Description** : Une courte description de vous
- **Avatar** : Uploadez une image ou laissez vide
- **Clé PGP publique** : Votre clé publique pour communications chiffrées (optionnel)

### 3. Contacts

Ajoutez autant de contacts que nécessaire :

- **Email** : Votre adresse email
- **Signal** : Votre numéro Signal
- **Matrix** : Votre identifiant Matrix
- **Autre** : Type personnalisé (Telegram, WhatsApp, etc.)

**Actions** :
- Cliquez sur **"+ Ajouter"** pour ajouter un contact
- Cliquez sur le **X rouge** pour supprimer un contact

### 4. Options

- ☑️ **Marquer comme chiffré** : Affiche un cadenas sur votre carte

### 5. Export

Une fois votre carte créée, vous pouvez l'exporter dans plusieurs formats :

#### 📸 PNG (Image)
- Télécharge une image haute résolution de votre carte
- Parfait pour les réseaux sociaux, signatures email, etc.
- Nom du fichier : `ecard-[votre-nom].png`

#### 📄 PDF (Document)
- Génère un PDF professionnel
- Format paysage A4
- Idéal pour l'impression ou l'envoi par email
- Nom du fichier : `ecard-[votre-nom].pdf`

#### 📱 QR Code
- Génère un QR Code contenant vos informations
- Les autres peuvent scanner ce code pour obtenir vos contacts
- Format PNG téléchargeable

#### 📋 JSON (Données brutes)
- Copie vos données au format JSON
- Utile pour la sauvegarde ou l'import dans d'autres outils

## Sécurité et confidentialité

### ✅ 100% local
- **Aucune donnée n'est envoyée au serveur**
- Tout est traité dans votre navigateur
- Vos images restent sur votre appareil

### ✅ Pas de stockage
- Rien n'est sauvegardé sur nos serveurs
- Fermez l'onglet = tout disparaît
- Pensez à exporter votre carte avant de fermer !

### ✅ Clé PGP
- Ajoutez votre clé publique PGP pour permettre aux autres de vous envoyer des messages chiffrés
- Seule la clé **publique** doit être partagée
- Ne partagez **JAMAIS** votre clé privée

## Cas d'usage

### 1. Carte de visite numérique
Partagez vos coordonnées professionnelles de manière moderne et sécurisée.

### 2. Profil de sécurité
Incluez votre clé PGP pour que les gens puissent vous contacter de manière chiffrée.

### 3. Signature email
Ajoutez l'image de votre eCard à votre signature email.

### 4. Réseaux sociaux
Utilisez le QR Code comme photo de profil ou dans votre bio.

### 5. Événements networking
Partagez rapidement vos infos via QR Code lors d'événements.

## Astuces

### 💡 Meilleure qualité d'image
- Utilisez une image carrée (ex: 500x500px)
- Format PNG pour la meilleure qualité
- Compressez l'image si elle dépasse 5MB

### 💡 QR Code
- Testez le QR Code avec votre smartphone avant de le partager
- Le QR Code contient : nom, contacts et bio (pas la clé PGP)

### 💡 Sauvegarde
- Exportez en JSON pour sauvegarder vos données
- Gardez une copie du PNG pour réutilisation rapide

### 💡 Clé PGP
- Générez votre clé PGP avec GPG ou Kleopatra
- Copiez uniquement le bloc PUBLIC KEY
- Format :
```
-----BEGIN PGP PUBLIC KEY BLOCK-----
...
-----END PGP PUBLIC KEY BLOCK-----
```

## Dépannage

### ❌ L'image ne s'affiche pas
- Vérifiez que le fichier est bien une image
- Vérifiez que la taille est inférieure à 5MB
- Essayez un autre format (PNG recommandé)

### ❌ L'export ne fonctionne pas
- Vérifiez que vous avez rempli au moins le champ "Nom"
- Réessayez dans quelques secondes
- Vérifiez que votre navigateur autorise les téléchargements

### ❌ Le QR Code ne fonctionne pas
- Assurez-vous d'avoir au moins un contact rempli
- Vérifiez que votre nom est renseigné
- Scannez avec plusieurs apps de QR Code

## Support des navigateurs

✅ **Fonctionnel sur** :
- Chrome / Edge (recommandé)
- Firefox
- Safari
- Opera

✅ **Compatible mobile** :
- iOS Safari
- Android Chrome

---

**Besoin d'aide ?** Consultez le README.md ou les autres guides.

🔒 **Votre vie privée est garantie** - Tout reste sur votre appareil !
