const { addComment, getAllComments, updateComment, deleteComment } = require("../controllers/ReviewController");
const Review = require("../models/Review");

jest.mock("../models/Review");

describe("Review Controller", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        user: "someUserId",
        comment: "Great product!",
        image: "someImageUrl.jpg"
      },
      params: { productId: "someProductId", reviewId: "someReviewId" },
    };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  describe("addComment", () => {
    it("should add a new comment", async () => {
      const mockReview = { ...req.body, product: req.params.productId, _id: "someReviewId" };
      Review.mockReturnValueOnce({ save: jest.fn().mockResolvedValue(mockReview) });

      await addComment(req, res);

      expect(res.json).toHaveBeenCalledWith({ message: "Avis ajouté avec succès", review: mockReview });
    });

  });

  describe("getAllComments", () => {
    it("should return all comments for a product", async () => {
      const mockReviews = [{ comment: "Nice!" }, { comment: "Not bad!" }];
      Review.find.mockReturnValueOnce({
        populate: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValue(mockReviews),
      });

      await getAllComments(req, res);

      expect(res.json).toHaveBeenCalledWith(mockReviews);
    });


  });

  describe("updateComment", () => {
    it("should update a comment", async () => {
      const updatedReview = { _id: "someReviewId", comment: "Updated comment", image: "newImage.jpg" };
      Review.findByIdAndUpdate.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValue(updatedReview),
      });

      await updateComment(req, res);

      expect(res.json).toHaveBeenCalledWith({ message: "Rating added", review: updatedReview });
    });

    
  });

  describe("deleteComment", () => {
    it("should delete a comment", async () => {
      Review.findByIdAndDelete.mockReturnValueOnce({
        exec: jest.fn().mockResolvedValue({}),
      });

      await deleteComment(req, res);

      expect(res.json).toHaveBeenCalledWith({ message: "Rating deleted" });
    });

  
  });
});
