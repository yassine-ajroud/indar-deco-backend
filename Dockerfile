FROM node:18-alpine AS builder

RUN apk add --no-cache python3 make g++ krb5-dev

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build:prod

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app/prod-build ./prod-build

COPY .env .env

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

USER appuser

EXPOSE 9000

CMD ["node", "./prod-build/server.js"]  # Assurez-vous que le chemin est correct
