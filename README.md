<<<<<<< HEAD
# FAXTRIX Android

Application Android FAXTRIX d'INFOTELCOM.

## Build

Le projet utilise Capacitor et Android/Gradle.

Le workflow GitHub Actions `Build FAXTRIX Android APK` :
- installe Node.js 20 et Java 17 ;
- installe les dépendances npm ;
- synchronise Capacitor ;
- construit l'APK debug ;
- vérifie l'APK et calcule son SHA-256 ;
- publie l'APK comme artefact GitHub Actions ;
- crée automatiquement une GitHub Release lorsqu'un tag `v*` est poussé.

## Installation

L'APK généré est destiné aux tests Android. Pour une distribution publique, une version release signée pourra être ajoutée ultérieurement.
=======
# FAXTRIX — Application Android (Capacitor)

Enveloppe la même application web FAXTRIX (site + app.html, vrai backend Supabase) dans une vraie application Android installable (`.apk`). Même code, aucune réécriture.

## ⚠️ Important — à faire sur ta machine, pas ici

Cet environnement n'a pas accès à Internet ni à Android Studio, donc je ne peux pas générer le `.apk` ici. Voici le chemin à suivre, une seule fois :

### 1. Prérequis (à installer sur ton ordinateur)
- [Node.js](https://nodejs.org)
- [Android Studio](https://developer.android.com/studio) (installe aussi le SDK Android au premier lancement)

### 2. Préparer le projet
```bash
cd faxtrix-android
npm install
npx cap add android      # crée le dossier android/ (projet natif complet)
npx cap sync android
```

### 3. Générer l'APK
**Option rapide (APK de test, installable directement sur un téléphone) :**
```bash
cd android
./gradlew assembleDebug
# → android/app/build/outputs/apk/debug/app-debug.apk
```
Envoie ce fichier `.apk` par e-mail, Drive ou USB vers un téléphone Android, ouvre-le pour l'installer (il faudra autoriser « sources inconnues » une fois dans les réglages du téléphone).

**Option Android Studio (recommandée pour une vraie sortie) :**
1. `npx cap open android` — ouvre le projet dans Android Studio
2. Menu **Build → Build Bundle(s) / APK(s) → Build APK(s)**
3. L'APK signé (ou pour le Play Store, un `.aab`) est généré dans `android/app/build/outputs/`

Pour publier sur le **Google Play Store**, il faut en plus créer un compte développeur Google Play (25 $, paiement unique) et signer l'app avec une clé de production (Android Studio t'accompagne dans ce flux via **Build → Generate Signed Bundle/APK**).

## 📁 Structure

```
faxtrix-android/
├── capacitor.config.json   → nom de l'app, identifiant (com.infotelcom.faxtrix)
├── package.json
└── www/                    → copie exacte du site (index.html, app.html, assets/)
```

Pour mettre à jour l'app après une modification du site : recopie le contenu de `faxtrix-site/` dans `faxtrix-android/www/`, puis relance `npx cap sync android` et régénère l'APK.

## 🖱️ Comportement

- L'app s'ouvre sur le site vitrine (`index.html`), comme sur le web
- Les boutons de connexion et d'entrée dans l'app naviguent vers `app.html` **dans la même application**, pas dans un navigateur externe
- Un lien **🌐 Voir le site** dans la barre latérale de l'app ramène au site vitrine
- Connexion, inscription et données passent par le vrai backend Supabase — le téléphone a un accès réseau normal, donc tout fonctionne comme sur le site déployé

## 🎨 Icône & écran de démarrage
Par défaut, Capacitor utilise une icône générique. Pour mettre le logo FAXTRIX :
```bash
npm install -D @capacitor/assets
npx capacitor-assets generate --android
```
en plaçant au préalable `assets/img/faxtrix-mark.webp` (converti en PNG carré, ex. 1024×1024) dans un dossier `resources/` à la racine de `faxtrix-android/`, sous les noms `icon.png` et `splash.png`.
>>>>>>> c66ae03 (feat: initial FAXTRIX Android application)
