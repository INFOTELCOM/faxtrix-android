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
