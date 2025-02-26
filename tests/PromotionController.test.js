
const Promotion = require("../models/Promotion");
const Product = require("../models/Product");

jest.mock("../models/Promotion");
jest.mock("../models/Product");


const {
    createPromotion,updatePromotion,getAllPromotions,getPromotionById,deletePromotion

} = require("../controllers/PromotionController");


describe("Promotion Controller", () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: { product: "product123", discountPercentage: 20, newPrice: 80, startDate: "2025-01-01", endDate: "2025-01-10", image: "promo.jpg", text: "Great deal!" }, params: { id: "promo123" } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    next = jest.fn();
    jest.clearAllMocks();
  });

  it("should create a promotion and update the product", async () => {
    const mockPromotion = { _id: "promo123", ...req.body };
    Promotion.prototype.save = jest.fn().mockResolvedValue(mockPromotion);
    Product.findByIdAndUpdate = jest.fn().mockResolvedValue({});

    await createPromotion(req, res, next);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockPromotion);
  });

  it("should return all promotions", async () => {
    const mockPromotions = [{ _id: "promo1" }, { _id: "promo2" }];
    Promotion.find = jest.fn().mockResolvedValue(mockPromotions);

    await getAllPromotions(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockPromotions);
  });

  it("should return a promotion by ID", async () => {
    const mockPromotion = { _id: "promo123" };
    Promotion.findById = jest.fn().mockResolvedValue(mockPromotion);

    await getPromotionById(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockPromotion);
  });

  it("should update a promotion", async () => {
    const updatedPromotion = { _id: "promo123", discountPercentage: 25 };
    Promotion.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedPromotion);

    await updatePromotion(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedPromotion);
  });

  it("should delete a promotion and update the product", async () => {
    const deletedPromotion = { _id: "promo123", product: "product123" };
    Promotion.findByIdAndDelete = jest.fn().mockResolvedValue(deletedPromotion);
    Product.findByIdAndUpdate = jest.fn().mockResolvedValue({});

    await deletePromotion(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "Promotion deleted" });
  });

  it("should return 404 if promotion is not found on delete", async () => {
    Promotion.findByIdAndDelete = jest.fn().mockResolvedValue(null);

    await deletePromotion(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Promotion not found" });
  });
});