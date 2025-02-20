# Étape 1 : Build de l'application
FROM node:18-alpine AS builder

# Installer les outils de build nécessaires
RUN apk add --no-cache python3 make g++ krb5-dev

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances (y compris les dépendances de développement)
RUN npm ci

# Copier le reste du code de l'application
COPY . .

# Build de l'application en mode production
RUN npm run build:prod

# Étape 2 : Créer l'image de production
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les dépendances de production depuis l'étape de build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copier le code de l'application buildé (dossier prod-build)
COPY --from=builder /app/prod-build ./prod-build

# Copier le fichier .env dans l'image Docker pour l'utilisation des variables d'environnement
COPY .env .env

# Utiliser un utilisateur non-root pour des raisons de sécurité
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Créer le dossier uploads et définir les permissions
RUN mkdir -p /app/uploads && chown -R appuser:appgroup /app/uploads

# Passer à l'utilisateur appuser
USER appuser

# Exposer le port de l'application
EXPOSE 9000

# Commande pour démarrer l'application
CMD ["node", "./prod-build/server.js"]
