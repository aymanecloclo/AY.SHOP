# 🌟 AYshop

**AYshop** est une plateforme e-commerce moderne, intégrant un backend puissant en **Laravel** et un frontend dynamique en **React**, avec l'utilisation de **ShadCN/UI** pour une interface utilisateur élégante et réactive. Cette application permet une expérience d'achat fluide, sécurisée et rapide.

---

## 🛒 Fonctionnalités principales

- **📋 Catalogue de produits** :
  - 🏷️ Catégories : Téléphones, PC portables, accessoires, etc.
  - 🔍 Filtres : Prix, système d'exploitation, couleur, taille, évaluation.
  - 🧹 Options de tri pour affiner la recherche.

- **🛍️ Panier et commandes** :
  - ➕ Ajouter des produits au panier.
  - 📝 Visualiser les produits dans le panier avant achat.
  - 💳 Paiement sécurisé.

- **🔑 Authentification OAuth** :
  - 🔒 Connexion sécurisée via Google, Facebook, ou création de compte avec e-mail/mot de passe.
  - 🙍‍♂️ Gestion de compte utilisateur.

- **🚚 Livraison** :
  - 🚚 Livraison gratuite sur certaines zones géographiques (ex. : Rabat).

- **📱 Responsive** :
  - 💻 Optimisé pour les appareils mobiles, tablettes et ordinateurs.

---

## 🛠️ Stack Technologique

### **Frontend**
- ⚛️ **React** : Framework JavaScript pour une interface réactive.
- 🎨 **ShadCN/UI** : Pour des composants UI modernes et personnalisables.
- 🧩 **TailwindCSS** : Pour un design flexible et rapide.
- 🧷 **DaisyUI** : Composants UI supplémentaires (optionnel).
  
### **Backend**
- 🟡 **Laravel** : Framework PHP robuste pour la gestion du backend.
- 🔑 **OAuth** : Authentification via des tokens sécurisés (Google, Facebook, etc.).
- 🗄️ **MySQL** : Base de données relationnelle pour stocker les informations sur les produits et utilisateurs.
- 🌩️ **Cloudinary** : Gestion des images.

---

## ⚙️ Installation

### **Prérequis**
- 🟡 PHP 8.0+ et Composer
- 🟢 Node.js 14+ avec npm ou Yarn
- 🗄️ MySQL ou MariaDB
- 🛠️ Laravel CLI

---

### **Backend Laravel**

1. Clonez le dépôt et installez les dépendances :
   ```bash
   git clone https://github.com/username/AYshop-backend.git
   cd AYshop-backend
   composer install
   Configurez le fichier .env pour les variables d'environnement :

Base de données MySQL.
Clés OAuth (Google, Facebook).
Générez la clé d'application Laravel :

bash
Copy code
php artisan key:generate
Lancez les migrations pour créer les tables nécessaires :

bash
Copy code
php artisan migrate --seed
Lancez le serveur Laravel :

bash
Copy code
php artisan serve
Frontend React avec ShadCN/UI
Clonez le dépôt et installez les dépendances :

bash
Copy code
git clone https://github.com/username/AYshop-frontend.git
cd AYshop-frontend
npm install
Configurez l'URL de l'API dans le fichier .env :

env
Copy code
REACT_APP_API_URL=http://localhost:8000/api
Lancez l'application React :

bash
Copy code
npm run dev
Pour personnaliser l'UI avec ShadCN/UI :

ShadCN/UI fournit des composants pré-construits pour construire des interfaces élégantes. Vous pouvez les intégrer facilement en personnalisant les thèmes et les composants selon vos besoins.
📄 API Principales
Produits
GET /api/products : Liste des produits disponibles.
GET /api/products/{id} : Détails d'un produit spécifique.
POST /api/products : Ajouter un produit (admin).
Utilisateur
POST /api/register : Inscription d'un nouvel utilisateur.
POST /api/login : Connexion d'un utilisateur.
GET /api/user : Récupérer les informations de l'utilisateur connecté.
📝 Notes
ShadCN/UI : Ce framework de composants UI basé sur TailwindCSS permet de créer des interfaces utilisateur modernes et bien structurées rapidement.
OAuth : L'intégration OAuth vous permet de vous connecter facilement avec des services externes (Google, Facebook) pour une meilleure gestion de l'authentification des utilisateurs.
🎉 Contribuer
Forkez le projet
Créez une branche pour votre fonctionnalité (git checkout -b feature/feature-name)
Faites vos modifications et validez (git commit -am 'Ajout de la fonctionnalité')
Poussez la branche (git push origin feature/feature-name)
Ouvrez une Pull Request
📧 Contact
Pour toute question ou suggestion, n'hésitez pas à contacter AYshop à l'adresse : aymane.rachid.web@gmail.com.

© 2024 AYshop. Tous droits réservés.

vbnet
Copy code

### Explications :
1. **ShadCN/UI** : Il s'agit d'un framework basé sur TailwindCSS et conçu pour construire des interfaces modernes rapidement. Pour l'utiliser, vous pouvez installer ShadCN dans votre projet React, puis intégrer ses composants dans votre interface utilisateur.
2. **OAuth** : Vous pouvez utiliser **Laravel Passport** pour gérer l'authentification sécurisée des utilisateurs, permettant la connexion via des services comme Google, Facebook, etc.
3. **React + TailwindCSS** : Le frontend utilise **React** pour gérer l'interactivité, et **TailwindCSS** pour le style. **ShadCN/UI** peut être intégré pour obtenir des composants réutilisables et stylisés.

Cela devrait fournir une structure claire pour votre projet d'e-commerce **AYshop** avec un backend Laravel et un frontend React avec ShadCN/UI.






