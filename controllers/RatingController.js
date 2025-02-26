const SimpleReview = require('../models/Rating');
const Product = require('../models/Product');

// Fonction pour calculer la moyenne des notes
async function getRateAVG(prodid) {
    const simpleReviews = await SimpleReview.find({ product: prodid });
    const sum = simpleReviews.reduce((acc, review) => acc + review.rating, 0);
    return simpleReviews.length > 0 ? (sum / simpleReviews.length).toFixed(1) : '0.0';
}

// Créer un nouvel avis
exports.createSimpleReview = async (req, res) => {
    try {
        const { user, product, rating } = req.body;
        const newSimpleReview = new SimpleReview({ user, product, rating });
        await newSimpleReview.save();

        // Mettre à jour la note moyenne du produit
        const avgRating = await getRateAVG(product);
        await Product.findByIdAndUpdate(product, { rate: avgRating });

        res.status(201).json({ message: 'Avis simple créé avec succès', review: newSimpleReview });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la création de l\'avis simple', error: error.message });
    }
};

// Obtenir tous les avis pour un produit
exports.getAllSimpleReviews = async (req, res) => {
    try {
        const { productId } = req.params;
        const simpleReviews = await SimpleReview.find({ product: productId });
        const product = await Product.findById(productId);

        res.status(200).json({
            simpleReviews,
            avg: product.rate,
        });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des avis simples', error: error.message });
    }
};

// Obtenir un avis par son ID
exports.getSimpleReviewById = async (req, res) => {
    try {
        const simpleReview = await SimpleReview.findById(req.params.id);
        if (!simpleReview) {
            return res.status(404).json({ error: 'Avis simple non trouvé.' });
        }
        res.status(200).json(simpleReview);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération de l\'avis simple', error: error.message });
    }
};

// Mettre à jour un avis
exports.updateSimpleReview = async (req, res) => {
    try {
        const simpleReview = await SimpleReview.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!simpleReview) {
            return res.status(404).json({ error: 'Avis simple non trouvé.' });
        }

        // Mettre à jour la note moyenne du produit
        const avgRating = await getRateAVG(simpleReview.product);
        await Product.findByIdAndUpdate(simpleReview.product, { rate: avgRating });

        res.status(200).json(simpleReview);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la mise à jour de l\'avis simple', error: error.message });
    }
};

// Supprimer un avis
exports.deleteSimpleReview = async (req, res) => {
    try {
        const simpleReview = await SimpleReview.findByIdAndDelete(req.params.id);
        if (!simpleReview) {
            return res.status(404).json({ error: 'Avis simple non trouvé.' });
        }

        // Mettre à jour la note moyenne du produit
        const avgRating = await getRateAVG(simpleReview.product);
        await Product.findByIdAndUpdate(simpleReview.product, { rate: avgRating });

        res.status(200).json({ message: 'Avis simple supprimé avec succès.' });
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la suppression de l\'avis simple', error: error.message });
    }
};

// Obtenir la moyenne des notes pour un produit
exports.getSimpleReviewAverage = async (req, res) => {
    try {
        const { productId } = req.params;
        const avgRating = await getRateAVG(productId);
        res.status(200).json(avgRating);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des avis simples', error: error.message });
    }
};