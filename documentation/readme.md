# 📦 Hono Project with Objection.js & PostgreSQL

## 🛠️ Technologies utilisées
- **JavaScript** : Langage principal du projet
- **Hono** : Framework minimaliste et rapide pour créer des APIs
- **Objection.js** : ORM basé sur **Knex.js** pour interagir avec la base de données
- **PostgreSQL** : Base de données relationnelle

---

## 🚀 Installation et lancement du projet

### 0. Se placer dans le bon dossier
```bash
  cd Backend/
```

### 1. Configuration du fichier `.env`
- Dupliquez le fichier `.env.sample` :
  ```bash
    cp .env.sample .env
  ```
- Remplissez les variables nécessaires dans le fichier `.env`, telles que :
  ```dotenv
    PORT=3001

    # Database
    DB_HOST="127.0.0.1"
    DB_CLIENT="pg"
    DB_CONNECTION_USER="user"
    DB_PASSWORD="password"
    DB_CONNECTION_DATABASE="db_name"
    DB_PORT=5432
  ```

### 2. Installation des dépendances
Assurez-vous d'avoir **Node.js** et **npm** installés, puis exécutez :
```bash
  npm install
```

### 3. Configuration de la base de données

#### ➡️ Créer la BDD en local
Assure-vous d'avoir bien créer la base de données en local via **psql** ou autre outil

#### ➡️ Lancer les migrations
```bash
  npx knex migrate:latest
```

#### ➡️ Lancer les seeds (pour peupler la base de données avec des données initiales)
```bash
  npx knex seed:run
```

### 4. Lancer le serveur Hono
```bash
npm run dev
```

Le projet sera accessible sur [http://localhost:3001](http://localhost:3001).

---

## 📂 Fichiers importants

- **Partition de tables et index** : Ici a été fais la partition de la table Users sur les dates de naissance et pour cela il a été nécessaire d'utiliser les index
  - 📄 Voir [`20241106132403_add_user.js`](Backend/src/db/migrations/20241106132403_add_user.js) 
  - 📄 Voir [`20241108095401_add_user_partitioned.js`](Backend/src/db/migrations/20241108095401_add_user_partitioned.js)

- **Vue matérialiser**: Ici nous avons fais une vue matérialiser sur le nombre de user par ville
  - 📄 Voir [`20241108095402_user_count_by_city.js`](Backend/src/db/migrations/20241108095402_user_count_by_city.js)

  Par ailleurs cette vue est refresh dès qu'une nouvelle adresse est ajouté, modifié ou supprimé et la même chose a été réalisé pour l'utilisateur
  - 📄 Voir [`UserCountByCityRepository.js`](Backend/src/db/repository/UserCountByCityRepository.js)

- **Query N+1**: Afin d'éviter les query N+1 il a été préférable de faire des requêtes SQL en brut plutôt que d'utiliser l'ORM
  - 📄 Voir [`UserRepository.js`](Backend/src/db/repository/UserRepository.js)
  - 📄 Voir [`PartyRepository.js`](Backend/src/db/repository/PartyRepository.js)

---

## 📚 Guide des routes principales

Vous retrouverez les routes à utiliser afin de tester l'api dans le fichier suivant avec une petite documentation : 
- **Doc api** 
  - 📄 Voir [`apiDoc.md`](documentation/apiDoc.md)
- **MCD**
  - 📄 Voir [`mcd.webp`](documentation/mcd.webp)

**Si vous avez la moindre questions hésitez pas à revenir vers nous sur discord** 🚀
