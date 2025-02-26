const { createSupplier, getAllSuppliers, getSupplierById, updateSupplier, deleteSupplier } = require("../controllers/SupplierController");
const Supplier = require("../models/supplier");

jest.mock("../models/supplier");

describe("Supplier Controller", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        name: "Test Supplier",
        address: "Test Address",
        phone: "123456789",
        marque: "Test Marque",
        rib: "Test RIB",
      },
      params: { id: "someSupplierId" },
    };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  describe("createSupplier", () => {
    it("should create a new supplier", async () => {
      const mockSupplier = { ...req.body, _id: "someSupplierId" };
      Supplier.mockReturnValueOnce({ save: jest.fn().mockResolvedValue(mockSupplier) });

      await createSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
    });

    it("should return 500 if creation fails", async () => {
      Supplier.mockReturnValueOnce({ save: jest.fn().mockRejectedValue(new Error("Error")) });

      await createSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
    });
  });

  describe("getAllSuppliers", () => {
    it("should return all suppliers", async () => {
      const mockSuppliers = [{ name: "Supplier1" }, { name: "Supplier2" }];
      Supplier.find.mockResolvedValue(mockSuppliers);

      await getAllSuppliers(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockSuppliers);
    });

    it("should return 500 if fetching suppliers fails", async () => {
      Supplier.find.mockRejectedValue(new Error("Error"));

      await getAllSuppliers(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to fetch supplier." });
    });
  });

  describe("getSupplierById", () => {
    it("should return supplier by id", async () => {
      const mockSupplier = { _id: "someSupplierId", name: "Supplier1" };
      Supplier.findById.mockResolvedValue(mockSupplier);

      await getSupplierById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockSupplier);
    });

    it("should return 404 if supplier not found", async () => {
      Supplier.findById.mockResolvedValue(null);

      await getSupplierById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "supplier not found." });
    });

    it("should return 500 if fetching by id fails", async () => {
      Supplier.findById.mockRejectedValue(new Error("Error"));

      await getSupplierById(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to fetch the supplier." });
    });
  });

  describe("updateSupplier", () => {
    it("should update supplier", async () => {
      const mockSupplier = { ...req.body, _id: "someSupplierId" };
      Supplier.findByIdAndUpdate.mockResolvedValue(mockSupplier);

      await updateSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockSupplier);
    });

    it("should return 404 if supplier not found", async () => {
      Supplier.findByIdAndUpdate.mockResolvedValue(null);

      await updateSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "supplier not found." });
    });

    it("should return 500 if update fails", async () => {
      Supplier.findByIdAndUpdate.mockRejectedValue(new Error("Error"));

      await updateSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to update the supplier." });
    });
  });

  describe("deleteSupplier", () => {
    it("should delete the supplier", async () => {
      const mockSupplier = { _id: "someSupplierId", name: "Supplier1" };
      Supplier.findByIdAndDelete.mockResolvedValue(mockSupplier);

      await deleteSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "supplier deleted successfully." });
    });

    it("should return 404 if supplier not found", async () => {
      Supplier.findByIdAndDelete.mockResolvedValue(null);

      await deleteSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: "supplier not found." });
    });

    it("should return 500 if deletion fails", async () => {
      Supplier.findByIdAndDelete.mockRejectedValue(new Error("Error"));

      await deleteSupplier(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Failed to delete the supplier." });
    });
  });
});