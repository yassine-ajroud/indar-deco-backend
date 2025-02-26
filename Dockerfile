FROM node:18-alpine AS builder

RUN apk add --no-cache g++ krb5-dev make python3

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

RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && mkdir -p /app/uploads \
    && chown -R appuser:appgroup /app/uploads

USER appuser
EXPOSE 9000
CMD ["node", "./prod-build/server.js"]  