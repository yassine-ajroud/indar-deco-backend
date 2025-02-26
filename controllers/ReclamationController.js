const Reclamation = require('../models/Reclamation');

exports.createReclamation = async (req, res) => {
  try {
    const { user, sales, reference, price, address } = req.body;

    const newReclamation = new Reclamation({
      user,
      sales,
      reference,
      address,
      price,
    });

    const savedReclamation = await newReclamation.save(); 

    res.status(201).json({
      message: "Réclamation créée avec succès",
      reclamation: savedReclamation, 
    });
  } catch (error) {
    res.status(500).json({
      error: "Erreur lors de la création de la réclamation",
      details: error.message,
    });
  }
};

exports.getAllReclamations = async (req, res) => {
  try {
    const usr = req.params.id;
    const reclamations = await Reclamation.find({user:usr});
    res.status(200).json(reclamations);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des réclamations', error: error.message });
  }
};

exports.getReclamationById = async (req, res) => {
  try {
    const reclamation = await Reclamation.findById(req.params.id);
    if (!reclamation) {
      return res.status(404).json({ error: 'Réclamation non trouvée.' });
    }
    res.status(200).json(reclamation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la réclamation', error: error.message });
  }
};

exports.updateReclamation = async (req, res) => {
  try {
    const reclamation = await Reclamation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!reclamation) {
      return res.status(404).json({ error: 'Réclamation non trouvée.' });
    }
    res.status(200).json(reclamation);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de la réclamation', error: error.message });
  }
};

exports.deleteReclamation = async (req, res) => {
  try {
    const reclamation = await Reclamation.findByIdAndRemove(req.params.id);
    if (!reclamation) {
      return res.status(404).json({ error: 'Réclamation non trouvée.' });
    }
    res.status(200).json({ message: 'Réclamation supprimée avec succès.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la réclamation', error: error.message });
  }
};