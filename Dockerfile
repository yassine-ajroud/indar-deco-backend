# Étape de construction
FROM node:18-alpine AS builder

# Installer les dépendances nécessaires pour la construction
RUN apk add --no-cache python3 make g++ krb5-dev

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances de production
RUN npm ci

# Copier le reste du code source
COPY . .

# Construire l'application
RUN npm run build:prod

# Étape de production
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances et les modules depuis l'étape de construction
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Copier le build de production
COPY --from=builder /app/prod-build ./prod-build

# Copier le fichier .env
COPY .env .env

# Créer un utilisateur et un groupe non-root pour exécuter l'application
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Créer le répertoire uploads et définir les permissions
RUN mkdir -p /app/uploads \
    && chown -R appuser:appgroup /app/uploads

# Basculer vers l'utilisateur non-root
USER appuser

# Exposer le port 9000
EXPOSE 9000

# Commande pour démarrer l'application
CMD ["node", "./prod-build/server.js"]  # Assurez-vous que le chemin est correct