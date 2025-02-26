const Review = require("../models/Review");

exports.addComment = async (req, res) => {
  const { productId } = req.params;
  const { user, comment, image } = req.body;

  const newReview = new Review({
    user,
    product: productId,
    comment,
    image,
  });

  try {
    const savedReview = await newReview.save();
    res
      .status(201)
      .json({ message: "Avis ajouté avec succès", review: savedReview });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de l'ajout de l'avis", error });
  }
};

exports.getAllComments = async (req, res) => {
  const { productId } = req.params;

  try {
    const reviews = await Review.find({ product: productId })
      .populate("user", "Firstname Lastname")
      .exec();
    res.status(200).json(reviews);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des avis", error });
  }
};

exports.updateComment = async (req, res) => {
  const { reviewId } = req.params;
  const { comment, image } = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { comment, image },
      { new: true },
    );
    res
      .status(200)
      .json({
        message: "Commentaire mis à jour avec succès",
        review: updatedReview,
      });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'avis", error });
  }
};

exports.deleteComment = async (req, res) => {
  const { reviewId } = req.params;

  try {
    await Review.findByIdAndDelete(reviewId);
    res.status(200).json({ message: "Commentaire supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de l'avis", error });
  }
};
