const { createCategory,getCategoryById ,getAllCategories ,updateCategory , deleteCategory} = require("../controllers/CategoryController");
const Category = require("../models/Category");

describe("createCategory", () => {
  let req, res;

  beforeEach(() => {
    req = { body: { title: "Furniture", image: "image_url" } };  // Mock request body
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };  // Mock response
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should create a new category and return 201", async () => {
    const mockSave = jest.fn().mockResolvedValue(req.body);
    Category.prototype.save = mockSave;

    await createCategory(req, res);

    expect(res.status).toHaveBeenCalledWith(201);

    expect(res.json).toHaveBeenCalledWith(req.body);

    expect(mockSave).toHaveBeenCalled();
  });

  it("should return 500 if an error occurs during category creation", async () => {
    const mockSave = jest.fn().mockRejectedValue(new Error("Failed to save"));
    Category.prototype.save = mockSave;

    await createCategory(req, res);

    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith(new Error("Failed to save"));

    expect(mockSave).toHaveBeenCalled();
  });
});

describe("getCategoryById", () => {
  let req, res;

  beforeEach(() => {
    req = { params: { id: "categoryId" } };  // Mock request params with an ID
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };  // Mock response
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should return category data if category is found", async () => {
    const mockCategory = { title: "Furniture", image: "image_url" };
    const mockFindById = jest.fn().mockResolvedValue(mockCategory);
    Category.findById = mockFindById;

    await getCategoryById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCategory);
    expect(mockFindById).toHaveBeenCalledWith("categoryId");
  });

  it("should return 404 if category is not found", async () => {
    const mockFindById = jest.fn().mockResolvedValue(null);
    Category.findById = mockFindById;

    await getCategoryById(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: "category not found." });
    expect(mockFindById).toHaveBeenCalledWith("categoryId");
  });

  it("should return 500 if an error occurs", async () => {
    const mockFindById = jest.fn().mockRejectedValue(new Error("Database error"));
    Category.findById = mockFindById;

    await getCategoryById(req, res);
    expect(res.status).toHaveBeenCalledWith(500);

    expect(res.json).toHaveBeenCalledWith({ error: "Failed to fetch the category." });

    expect(mockFindById).toHaveBeenCalledWith("categoryId");
  });
});

describe("getAllCategories", () => {
  let req, res;

  beforeEach(() => {
    req = {};  // No params needed for getAllCategories
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };  // Mock response
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it("should return all categories if categories are found", async () => {
    const mockCategories = [
      { title: "Furniture", image: "image_url_1" },
      { title: "Electronics", image: "image_url_2" }
    ];

    const mockFind = jest.fn().mockResolvedValue(mockCategories);
    Category.find = mockFind;

    await getAllCategories(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCategories);
    expect(mockFind).toHaveBeenCalledWith({});
  });

  it("should return 500 if an error occurs while fetching categories", async () => {
    const mockFind = jest.fn().mockRejectedValue(new Error("Database error"));
    Category.find = mockFind;

    await getAllCategories(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Error occurred while fetching categories" });
    expect(mockFind).toHaveBeenCalledWith({});
  });
});

describe("updateCategory", () => {
    let req, res;
  
    beforeEach(() => {
      req = { params: { id: "someCategoryId" }, body: { title: "Updated Category", image: "updated_image_url" } };
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };  // Mock response
      jest.clearAllMocks(); // Clear mocks before each test
    });
  
    it("should return the updated category if the category exists", async () => {
      const mockCategory = { _id: "someCategoryId", title: "Updated Category", image: "updated_image_url" };
        const mockUpdate = jest.fn().mockResolvedValue(mockCategory);
      Category.findByIdAndUpdate = mockUpdate;
  
      await updateCategory(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockCategory);
        expect(mockUpdate).toHaveBeenCalledWith(req.params.id, req.body, { new: true });
    });
  
    it("should return 404 if category is not found", async () => {
      const mockUpdate = jest.fn().mockResolvedValue(null);
      Category.findByIdAndUpdate = mockUpdate;
  
      await updateCategory(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: "category not found." });
        expect(mockUpdate).toHaveBeenCalledWith(req.params.id, req.body, { new: true });
    });
  
    it("should return 500 if an error occurs during update", async () => {
      const mockUpdate = jest.fn().mockRejectedValue(new Error("Database error"));
      Category.findByIdAndUpdate = mockUpdate;
  
      await updateCategory(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
  
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to update the category." });
        expect(mockUpdate).toHaveBeenCalledWith(req.params.id, req.body, { new: true });
    });
  });

  describe("deleteCategory", () => {
    let req, res;
  
    beforeEach(() => {
      req = { params: { id: "someCategoryId" } };
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };  // Mock response
      jest.clearAllMocks(); // Clear mocks before each test
    });
  
    it("should delete the category and return success message", async () => {
      const mockCategory = { _id: "someCategoryId", title: "Category to Delete" };
        const mockDelete = jest.fn().mockResolvedValue(mockCategory);
      Category.findOneAndDelete = mockDelete;
  
      await deleteCategory(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: "category deleted successfully." });
        expect(mockDelete).toHaveBeenCalledWith({ "_id": req.params.id });
    });
  
    it("should return 404 if category is not found", async () => {
      const mockDelete = jest.fn().mockResolvedValue(null);
      Category.findOneAndDelete = mockDelete;
  
      await deleteCategory(req, res);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: "category not found." });
        expect(mockDelete).toHaveBeenCalledWith({ "_id": req.params.id });
    });
  
    it("should return 500 if an error occurs during deletion", async () => {
      const mockDelete = jest.fn().mockRejectedValue(new Error("Database error"));
      Category.findOneAndDelete = mockDelete;
  
      await deleteCategory(req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: "Failed to delete the category." });
        expect(mockDelete).toHaveBeenCalledWith({ "_id": req.params.id });
    });
  });