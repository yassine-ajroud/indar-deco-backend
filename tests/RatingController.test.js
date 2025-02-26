const SimpleReviewController = require('../controllers/RatingController');
const SimpleReview = require('../models/Rating');
const Product = require('../models/Product');

jest.mock('../models/Rating');
jest.mock('../models/Product');

describe('SimpleReview Controller', () => {
    afterEach(() => {
        jest.clearAllMocks(); 
    });

    describe('createSimpleReview', () => {
        it('should create a new review and update product rating', async () => {
            const req = { body: { user: 'user123', product: 'prod123', rating: 5 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.prototype.save = jest.fn().mockResolvedValue(req.body);
            SimpleReview.find.mockResolvedValue([{ rating: 5 }]); 
            Product.findByIdAndUpdate.mockResolvedValue(null); 

            await SimpleReviewController.createSimpleReview(req, res);

            expect(SimpleReview.prototype.save).toHaveBeenCalled();
            expect(Product.findByIdAndUpdate).toHaveBeenCalledWith('prod123', { rate: '5.0' });
            expect(res.status).toHaveBeenCalledWith(201);
        });
    });

    describe('getAllSimpleReviews', () => {
        it('should return all reviews with rating stats', async () => {
            const req = { params: { productId: 'prod123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.find.mockResolvedValue([
                { rating: 1 }, { rating: 2 }, { rating: 3 }, { rating: 4 }, { rating: 5 },
            ]);
            Product.findById.mockResolvedValue({ rate: '4.0' });

            await SimpleReviewController.getAllSimpleReviews(req, res);

            expect(SimpleReview.find).toHaveBeenCalledWith({ product: 'prod123' });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ avg: '4.0' }));
        });
    });

    describe('getSimpleReviewById', () => {
        it('should return a review if found', async () => {
            const req = { params: { id: 'review123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.findById.mockResolvedValue({ id: 'review123', rating: 5 });

            await SimpleReviewController.getSimpleReviewById(req, res);

            expect(SimpleReview.findById).toHaveBeenCalledWith('review123');
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ id: 'review123', rating: 5 });
        });

        it('should return 404 if review not found', async () => {
            const req = { params: { id: 'review123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.findById.mockResolvedValue(null);

            await SimpleReviewController.getSimpleReviewById(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'Avis simple non trouvé.' });
        });
    });

    describe('updateSimpleReview', () => {
        it('should update a review and recalculate average rating', async () => {
            const req = { params: { id: 'review123' }, body: { rating: 4 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.findByIdAndUpdate.mockResolvedValue({ product: 'prod123', rating: 4 });
            SimpleReview.find.mockResolvedValue([{ rating: 4 }]); // Mock pour getRateAVG()
            Product.findByIdAndUpdate.mockResolvedValue(null);

            await SimpleReviewController.updateSimpleReview(req, res);

            expect(SimpleReview.findByIdAndUpdate).toHaveBeenCalledWith('review123', req.body, { new: true });
            expect(Product.findByIdAndUpdate).toHaveBeenCalledWith('prod123', { rate: '4.0' });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalled();
        });

        it('should return 404 if review not found', async () => {
            const req = { params: { id: 'review123' }, body: { rating: 4 } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.findByIdAndUpdate.mockResolvedValue(null);

            await SimpleReviewController.updateSimpleReview(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'Avis simple non trouvé.' });
        });
    });

    describe('deleteSimpleReview', () => {
        it('should delete a review and update product rating', async () => {
            const req = { params: { id: 'review123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.findByIdAndDelete.mockResolvedValue({ product: 'prod123' });
            SimpleReview.find.mockResolvedValue([]); // Aucun avis restant
            Product.findByIdAndUpdate.mockResolvedValue(null);

            await SimpleReviewController.deleteSimpleReview(req, res);

            expect(SimpleReview.findByIdAndDelete).toHaveBeenCalledWith('review123');
            expect(Product.findByIdAndUpdate).toHaveBeenCalledWith('prod123', { rate: '0.0' });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ message: 'Avis simple supprimé avec succès.' });
        });

        it('should return 404 if review not found', async () => {
            const req = { params: { id: 'review123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.findByIdAndDelete.mockResolvedValue(null);

            await SimpleReviewController.deleteSimpleReview(req, res);

            expect(res.status).toHaveBeenCalledWith(404);
            expect(res.json).toHaveBeenCalledWith({ error: 'Avis simple non trouvé.' });
        });
    });

    describe('getSimpleReviewAverage', () => {
        it('should return the average rating for a product', async () => {
            const req = { params: { productId: 'prod123' } };
            const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

            SimpleReview.find.mockResolvedValue([{ rating: 5 }, { rating: 3 }]);

            await SimpleReviewController.getSimpleReviewAverage(req, res);

            expect(SimpleReview.find).toHaveBeenCalledWith({ product: 'prod123' });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith('4.0');
        });
    });
});