const winston = require("winston");
const { LogstashTransport } = require("winston-logstash-transport");

// Configuration du logger
const logger = winston.createLogger({
  level: "info", // Niveau de log (info, warn, error, etc.)
  format: winston.format.combine(
    winston.format.timestamp(), // Ajoute un timestamp aux logs
    winston.format.json() // Format JSON pour les logs
  ),
  transports: [
    // Transport pour Logstash
    new LogstashTransport({
      host: process.env.LOGSTASH_HOST || "localhost", // Adresse de Logstash
      port: process.env.LOGSTASH_PORT || 5044, // Port de Logstash (5044 par défaut)
      ssl_enable: false, // Désactiver SSL (à activer en production)
    }).on("error", (err) => {
      console.error("Logstash transport error:", err); // Affiche les erreurs de connexion Logstash
    }),
    // Transport pour la console (optionnel)
    new winston.transports.Console({
      format: winston.format.simple(), // Format simple pour la console
    }),
  ],
});

module.exports = logger;
