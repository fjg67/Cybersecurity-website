# 🔧 Dépannage - Générateur d'eCard

## Problème : L'export PNG/PDF ne fonctionne pas

### Solutions possibles

#### 1. Vérifiez que vous avez rempli le nom
**Symptôme** : Vous voyez le message "Veuillez remplir au moins votre nom avant d'exporter"

**Solution** :
- Remplissez le champ "Pseudonyme / Nom" avant d'exporter
- Ce champ est obligatoire pour créer un fichier

---

#### 2. Vérifiez les permissions de téléchargement
**Symptôme** : Rien ne se passe quand vous cliquez sur "Télécharger"

**Solution** :
1. Vérifiez que votre navigateur autorise les téléchargements
2. Regardez dans les paramètres du navigateur → Téléchargements
3. Autorisez les téléchargements automatiques pour localhost

**Chrome/Edge** :
- Paramètres → Confidentialité et sécurité → Paramètres du site → Téléchargements automatiques
- Autoriser pour localhost:3000

**Firefox** :
- about:preferences → Général → Fichiers et applications
- Vérifier que "Toujours demander où enregistrer les fichiers" est activé OU que le dossier de destination est valide

---

#### 3. Problème avec une image externe
**Symptôme** : L'export fonctionne mais l'image ne s'affiche pas

**Solution** :
- **Uploadez une image** depuis votre ordinateur au lieu d'utiliser une URL externe
- Les images externes peuvent avoir des problèmes CORS
- Utiliser le bouton "Choisir une image" garantit que ça fonctionne

---

#### 4. Le fichier se télécharge mais est vide/corrompu
**Symptôme** : Le fichier PNG ou PDF est vide ou ne s'ouvre pas

**Solutions possibles** :
1. **Rafraîchissez la page** (F5) et réessayez
2. **Utilisez une image plus petite** (moins de 2MB recommandé)
3. **Essayez un autre navigateur** :
   - Chrome (recommandé)
   - Firefox
   - Edge

---

#### 5. Vérifiez la console du navigateur
**Comment ouvrir la console** :
- Windows/Linux : `F12` ou `Ctrl + Shift + I`
- Mac : `Cmd + Option + I`

**Que chercher** :
- Messages d'erreur en rouge
- Partagez ces messages pour obtenir de l'aide

---

## Tests recommandés

### Test minimal
1. Remplissez uniquement le champ "Nom" : `Test`
2. Cliquez sur "Télécharger en PNG"
3. ✅ Ça devrait fonctionner

### Test avec image
1. Remplissez le nom
2. Uploadez une petite image (moins de 1MB)
3. Cliquez sur "Télécharger en PNG"
4. ✅ L'image devrait être incluse

### Test PDF
1. Remplissez toutes les informations
2. Cliquez sur "Télécharger en PDF"
3. ✅ Le PDF devrait s'ouvrir correctement

---

## Navigateurs testés

✅ **Fonctionne sur** :
- Chrome 120+
- Firefox 120+
- Edge 120+
- Safari 17+

⚠️ **Peut avoir des problèmes** :
- Navigateurs très anciens
- Navigateurs mobiles (certains)
- Mode incognito strict

---

## Astuces supplémentaires

### Pour de meilleurs résultats

1. **Format d'image recommandé** :
   - PNG (meilleure qualité)
   - JPG (plus petit)
   - Format carré (500x500px idéal)

2. **Taille d'image recommandée** :
   - Moins de 2MB pour l'export
   - Compression automatique si nécessaire

3. **Navigateur recommandé** :
   - Google Chrome (meilleure compatibilité avec html2canvas)

### Vérification rapide

Si rien ne fonctionne :
1. ✅ Nom rempli ?
2. ✅ Image < 5MB ?
3. ✅ Chrome/Firefox ?
4. ✅ Téléchargements autorisés ?
5. ✅ Console sans erreurs ?

---

## Support technique

### Messages d'erreur communs

**"Erreur : Impossible de trouver la carte"**
→ Bug rare, rafraîchissez la page (F5)

**"Veuillez remplir au moins votre nom"**
→ Le champ "Pseudonyme / Nom" est vide

**"Erreur lors de l'export PNG/PDF"**
→ Regardez la console (F12) pour plus de détails

### En cas de problème persistant

1. **Effacez le cache** :
   - Chrome : Ctrl+Shift+Del → Cocher "Images et fichiers en cache" → Effacer
   - Firefox : Ctrl+Shift+Del → Cocher "Cache" → Effacer

2. **Désactivez les extensions** :
   - Les bloqueurs de pub peuvent parfois interférer
   - Testez en navigation privée

3. **Essayez un autre appareil** :
   - Pour vérifier si c'est un problème local

---

## Contournement temporaire

Si l'export automatique ne fonctionne vraiment pas :

### Méthode manuelle (Screenshot)

1. **Windows** :
   - Ouvrez l'outil Capture (Win + Shift + S)
   - Sélectionnez la zone de la carte
   - Collez dans Paint (Ctrl+V)
   - Enregistrez en PNG

2. **Mac** :
   - Cmd + Shift + 4
   - Sélectionnez la zone de la carte
   - L'image est sauvegardée automatiquement

3. **Tous** :
   - Clic droit sur la carte → Inspecter
   - Clic droit sur l'élément → Capture de nœud (Chrome)

---

**Besoin d'aide supplémentaire ?**
Ouvrez la console (F12) et partagez les messages d'erreur pour un diagnostic plus précis.
