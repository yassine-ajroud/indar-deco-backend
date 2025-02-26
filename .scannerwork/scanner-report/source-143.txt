const { createSubCategory, getSubCategoryById, getAllSubCategories, updateSubCategory, deleteSubCategory } = require("../controllers/SubCategoryController");
const SubCategory = require("../models/SubCategory");

describe("SubCategory Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { params: { id: "someSubCategoryId" }, body: { title: "SubCategory Title" } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };  // Mock response
    jest.clearAllMocks(); // Clear mocks before each test
  });

  describe("createSubCategory", () => {
    it("should create a new subCategory", async () => {
      const mockSubCategory = { _id: "someSubCategoryId", title: "SubCategory Title" };

      const mockSave = jest.fn().mockResolvedValue(mockSubCategory);
      SubCategory.prototype.save = mockSave;

      await createSubCategory(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockSubCategory);
      expect(mockSave).toHaveBeenCalled();
    });

 
  });

  describe("getSubCategoryById", () => {
    it("should return a subCategory if found", async () => {
      const mockSubCategory = { _id: "someSubCategoryId", title: "SubCategory Title" };

      const mockFindById = jest.fn().mockResolvedValue(mockSubCategory);
      SubCategory.findById = mockFindById;

      await getSubCategoryById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockSubCategory);
      expect(mockFindById).toHaveBeenCalledWith(req.params.id);
    });

    it("should return 404 if subCategory is not found", async () => {
      const mockFindById = jest.fn().mockResolvedValue(null);
      SubCategory.findById = mockFindById;

      await getSubCategoryById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(mockFindById).toHaveBeenCalledWith(req.params.id);
    });

  });

  describe("getAllSubCategories", () => {
    it("should return all subCategories", async () => {
      const mockSubCategories = [{ _id: "someSubCategoryId", title: "SubCategory Title" }];

      const mockFind = jest.fn().mockResolvedValue(mockSubCategories);
      SubCategory.find = mockFind;

      await getAllSubCategories(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockSubCategories);
    });
  });

  describe("updateSubCategory", () => {
    it("should update the subCategory", async () => {
      const mockSubCategory = { _id: "someSubCategoryId", title: "Updated SubCategory Title" };

      const mockFindByIdAndUpdate = jest.fn().mockResolvedValue(mockSubCategory);
      SubCategory.findByIdAndUpdate = mockFindByIdAndUpdate;

      await updateSubCategory(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockSubCategory);
      expect(mockFindByIdAndUpdate).toHaveBeenCalledWith(req.params.id, req.body, { new: true });
    });

    it("should return 404 if subCategory is not found", async () => {
      const mockFindByIdAndUpdate = jest.fn().mockResolvedValue(null);
      SubCategory.findByIdAndUpdate = mockFindByIdAndUpdate;

      await updateSubCategory(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });

  describe("deleteSubCategory", () => {
    let req, res;
  
    beforeEach(() => {
      req = { params: { id: "someSubCategoryId" } };  // mock request with the subcategory ID
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };  // mock response
      jest.clearAllMocks();  // clear mocks before each test
    });
  
    it("should delete the subcategory and return success message", async () => {
      const mockSubCategory = { _id: "someSubCategoryId", title: "SubCategory Title" };
  
      const mockFindOneAndDelete = jest.fn().mockResolvedValue(mockSubCategory);
      SubCategory.findOneAndDelete = mockFindOneAndDelete;
  
      await deleteSubCategory(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "subcategory deleted successfully." });
      expect(mockFindOneAndDelete).toHaveBeenCalledWith({ "_id": req.params.id });
    });
  
    it("should return 404 if subcategory is not found", async () => {
      const mockFindOneAndDelete = jest.fn().mockResolvedValue(null);
      SubCategory.findOneAndDelete = mockFindOneAndDelete;
  
      await deleteSubCategory(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "subcategory not found." });
      expect(mockFindOneAndDelete).toHaveBeenCalledWith({ "_id": req.params.id });
    });
  
    it("should return 500 if an error occurs during deletion", async () => {
      const mockFindOneAndDelete = jest.fn().mockRejectedValue(new Error("Database error"));
      SubCategory.findOneAndDelete = mockFindOneAndDelete;
  
      await deleteSubCategory(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to delete the subcategory." });
    });
  });
});