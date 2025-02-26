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
                image: "someImageUrl.jpg",
            },
            params: { productId: "someProductId", reviewId: "someReviewId" },
        };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    describe("addComment", () => {
        it("should add a new comment", async () => {
            const mockReview = { ...req.body, product: req.params.productId, _id: "someReviewId" };
            Review.prototype.save = jest.fn().mockResolvedValue(mockReview);

            await addComment(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ message: "Avis ajouté avec succès", review: mockReview });
        });
    });

    describe("getAllComments", () => {
        it("should return all comments for a product", async () => {
            const mockReviews = [{ comment: "Nice!" }, { comment: "Not bad!" }];
    
            const mockExec = jest.fn().mockResolvedValue(mockReviews); 
            const mockPopulate = jest.fn().mockReturnValue({ exec: mockExec }); 
            Review.find.mockReturnValue({ populate: mockPopulate }); 
    
            await getAllComments(req, res);
    
            // Vérifications
            expect(Review.find).toHaveBeenCalledWith({ product: req.params.productId });
            expect(mockPopulate).toHaveBeenCalledWith('user', 'Firstname Lastname');
            expect(mockExec).toHaveBeenCalled(); 
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mockReviews);
        });
    });

    describe("updateComment", () => {
        it("should update a comment", async () => {
            const updatedReview = { _id: "someReviewId", comment: "Updated comment", image: "newImage.jpg" };
            Review.findByIdAndUpdate.mockResolvedValue(updatedReview);

            await updateComment(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: "Commentaire mis à jour avec succès", review: updatedReview });
        });
    });

    describe("deleteComment", () => {
        it("should delete a comment", async () => {
            Review.findByIdAndDelete.mockResolvedValue({});

            await deleteComment(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: "Commentaire supprimé avec succès" });
        });
    });
});