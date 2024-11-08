# 📋 API Documentation - PartyApp

Cette section présente les différentes routes disponibles dans l'API **Joinly**, avec leurs méthodes, URL, et exemples d'utilisation.

---

## 🎉 Party Endpoints

### 1. Get Party By ID
- **Méthode**: `GET`
- **URL**: `http://localhost:3001/party/:partyId`
  
**Description**: Récupérer une fête en fonction de son ID.
- Exemple d'URL : `http://localhost:3001/party/13`

---

### 2. Delete Party
- **Méthode**: `DELETE`
- **URL**: `http://localhost:3001/party/:partyId`
  
**Description**: Supprimer une fête en fonction de son ID.
- Exemple d'URL : `http://localhost:3001/party/13`

---

## 👥 Users Endpoints

### 1. Get User By ID
- **Méthode**: `GET`
- **URL**: `http://localhost:3001/users/:userId`

**Description**: Récupérer un utilisateur spécifique par son ID.
- Exemple d'URL : `http://localhost:3001/users/123`

---

### 2. Get All Users
- **Méthode**: `GET`
- **URL**: `http://localhost:3001/users`
  
**Description**: Obtenir la liste de tous les utilisateurs.

---

### 3. Create User
- **Méthode**: `POST`
- **URL**: `http://localhost:3001/users`
- **Headers**: 
  - `Content-Type`: `application/json`
- **Body** (exemple) :
  ```json
  {
    "name": "John",
    "lastname": "Doe",
    "email": "john.doe@example.com",
    "password": "password123",
    "numberAddress": 42,
    "street": "Baker Street",
    "city": "London",
    "zipCode": 75001,
    "countryCode": "GB"
  }
  ```

**Description**: Créer un nouvel utilisateur avec les informations fournies. (Attention l'email doit être unique)

---

### 4. Get User Count By City
- **Méthode**: `GET`
- **URL**: `http://localhost:3001/user-count-by-city`
  
**Description**: Obtenir le nombre d'utilisateurs par ville.

---

## 📦 Importer cette documentation dans Postman

Si vous souhaitez importer cette collection directement dans **Postman**, suivez les étapes ci-dessous :

1. Ouvrez **Postman**.
2. Cliquez sur **Import** en haut à gauche.
3. Sélectionnez **Raw Text**.
4. Copiez-collez la structure JSON suivante dans la zone de texte et cliquez sur **Continue**.

```json
{
	"info": {
		"_postman_id": "941c8e84-4e45-4eee-981f-2df2310575ba",
		"name": "Joinly",
		"schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
		"_exporter_id": "28201398"
	},
	"item": [
		{
			"name": "Party",
			"item": [
				{
					"name": "Get PartyBy Id",
					"request": {
						"method": "GET",
						"url": "http://localhost:3001/party/1"
					}
				},
				{
					"name": "DeleteParty",
					"request": {
						"method": "DELETE",
						"url": "http://localhost:3001/party/5"
					}
				}
			]
		},
		{
			"name": "Users",
			"item": [
				{
					"name": "getUserBYID",
					"request": {
						"method": "GET",
						"url": "http://localhost:3001/users/:userId"
					}
				},
				{
					"name": "getUsers",
					"request": {
						"method": "GET",
						"url": "http://localhost:3001/users"
					}
				},
				{
					"name": "create user",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"ddd\",\n    \"lastname\": \"dd\",\n    \"email\": \"dd@q.dd\",\n    \"password\": \"test\",\n    \"numberAddress\": 12,\n    \"street\": \"adddd\",\n    \"city\": \"dddd\",\n    \"zipCode\": 93370,\n    \"countryCode\": \"FR\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": "http://localhost:3001/users"
					}
				},
				{
					"name": "countByCity",
					"request": {
						"method": "GET",
						"url": "http://localhost:3001/user-count-by-city"
					}
				}
			]
		}
	]
}
```

---

**Bon développement !** 🚀
