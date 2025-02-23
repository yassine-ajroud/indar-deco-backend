const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();  // Charger les variables d'environnement du fichier .env

const app = express();

// Vérifier si les variables d'environnement sont bien chargées
if (!process.env.PORT || !process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS) {
    console.error("❌ ERREUR: Les variables d'environnement ne sont pas chargées correctement.");
    process.exit(1);
}

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Gestion des fichiers statiques
const uploadPaths = [
    "uploads/images",
    "uploads/product_images",
    "uploads/color_images",
    "uploads/color_files",
    "uploads/suppliers",
    "uploads/reviews",
    "uploads/category_image",
    "uploads/subcategory_image"
];

uploadPaths.forEach(path => app.use(`/${path}`, express.static(path)));

// Connexion MongoDB
const dbConnectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/indar-deco`;

mongoose
    .connect(dbConnectionString)
    .then(() => console.log("✅ DB Connected"))
    .catch((err) => {
        console.error("❌ ERREUR: Impossible de se connecter à MongoDB", err);
        process.exit(1);
    });

// Importation des routes
const AuthRoute = require('./routes/Auth');
const cartRoute = require("./routes/Cart");
const listRoute = require("./routes/WishList");
const prodRoute = require('./routes/Product');
const RatingRoutes = require('./routes/Rating');
const CategoryRoutes = require('./routes/Category');
const SubCategoryRoutes = require('./routes/SubCategory');
const SupplierRoutes = require('./routes/SupplierRoutes');
const PromotionRoutes = require('./routes/Promotion');
const ReviewRoute = require('./routes/Review');
const SalesRoutes = require('./routes/Sales');
const RecRoutes = require('./routes/ReclamationRoutes');
const NotifRoutes = require('./routes/Notifications');

// Définition des routes
app.use('/api', AuthRoute);
app.use('/api', cartRoute);
app.use('/api', listRoute);
app.use('/api', prodRoute);
app.use('/api', RatingRoutes);
app.use('/api', CategoryRoutes);
app.use('/api', SubCategoryRoutes);
app.use('/api', SupplierRoutes);
app.use('/api', PromotionRoutes);
app.use('/api', ReviewRoute);
app.use('/api', SalesRoutes);
app.use('/api', RecRoutes);
app.use('/api', NotifRoutes);

// Démarrage du serveur
app.listen(process.env.PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur le port ${process.env.PORT}`);
});
