jest.mock("../models/Sales");

const { recordSale, getAllSales, getSaleById, updateSale, deleteSale } = require("../controllers/SalesController");
const Sale = require("../models/Sales");

describe("Record Sale", () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                productId: "product123",
                fournisseurId: "fournisseur456",
                UserId: "user789",
                quantity: 5,
                modelId: "model321",
                price: 100,
            },
        };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("should record a sale and return 201", async () => {
        const newSale = {
            _id: "saleId",
            productId: "product123",
            fournisseurId: "fournisseur456",
            UserId: "user789",
            modelId: "model321",
            quantity: 5,
            price: 100,
            status: [
                { index: 0, status: 1, date: new Date().toISOString().slice(0, 10) },
                { index: 1, status: 2, date: null },
                { index: 2, status: 3, date: null },
                { index: 3, status: 4, date: null },
            ],
        };

        Sale.prototype.save = jest.fn().mockResolvedValue(newSale);

        await recordSale(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

    it("should return 500 if there is a database error", async () => {
        const errorMessage = "Database error";
        Sale.prototype.save = jest.fn().mockRejectedValue(new Error(errorMessage));

        await recordSale(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });

    it("should return 400 if required fields are missing", async () => {
        req.body = {}; 

        await recordSale(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: expect.any(String) }); 
    });
});

describe("Get All Sales", () => {
    let req, res;

    beforeEach(() => {
        req = { params: { userId: "user789" } };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("should retrieve all sales for a given user and return 200", async () => {
        const sales = [
            {
                _id: "saleId1",
                productId: "product123",
                fournisseurId: "fournisseur456",
                UserId: "user789",
                modelId: "model321",
                quantity: 5,
                price: 100,
                status: [
                    { index: 0, status: 1, date: new Date().toISOString().slice(0, 10) },
                    { index: 1, status: 2, date: null },
                ],
            },
            {
                _id: "saleId2",
                productId: "product124",
                fournisseurId: "fournisseur457",
                UserId: "user789",
                modelId: "model322",
                quantity: 3,
                price: 80,
                status: [
                    { index: 0, status: 1, date: new Date().toISOString().slice(0, 10) },
                    { index: 1, status: 2, date: null },
                ],
            },
        ];

        Sale.find = jest.fn().mockResolvedValue(sales);

        await getAllSales(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(sales);
    });

    it("should return 500 if there is a database error", async () => {
        const errorMessage = "Database error";
        Sale.find = jest.fn().mockRejectedValue(new Error(errorMessage));

        await getAllSales(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
});

describe("Get Sale By ID", () => {
    let req, res;

    beforeEach(() => {
        req = { params: { id: "saleId123" } };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("should retrieve a sale by its ID and return 200", async () => {
        const sale = {
            _id: "saleId123",
            productId: "product123",
            fournisseurId: "fournisseur456",
            UserId: "user789",
            modelId: "model321",
            quantity: 5,
            price: 100,
            status: [
                { index: 0, status: 1, date: new Date().toISOString().slice(0, 10) },
                { index: 1, status: 2, date: null },
            ],
        };

        Sale.findById = jest.fn().mockResolvedValue(sale);

        await getSaleById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(sale);
    });

    it("should return 404 if sale not found", async () => {
        Sale.findById = jest.fn().mockResolvedValue(null); 

        await getSaleById(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Sale not found.' });
    });

    it("should return 500 if there is a database error", async () => {
        const errorMessage = "Database error";
        Sale.findById = jest.fn().mockRejectedValue(new Error(errorMessage));

        await getSaleById(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to record the sale.' });
    });
});

describe("Update Sale", () => {
    let req, res;

    beforeEach(() => {
        req = {
            params: { id: "saleId123" },
            body: { quantity: 10, price: 200 },
        };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("should successfully update a sale and return 200", async () => {
        const updatedSale = {
            _id: "saleId123",
            productId: "product123",
            fournisseurId: "fournisseur456",
            UserId: "user789",
            modelId: "model321",
            quantity: 10,  
            price: 200,    
            status: [
                { index: 0, status: 1, date: new Date().toISOString().slice(0, 10) },
                { index: 1, status: 2, date: null },
            ],
        };

        Sale.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedSale);

        await updateSale(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(updatedSale);
    });

    it("should return 404 if sale not found", async () => {
        Sale.findByIdAndUpdate = jest.fn().mockResolvedValue(null); 

        await updateSale(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Sale not found.' });
    });

    it("should return 500 if there is a database error", async () => {
        const errorMessage = "Database error";
        Sale.findByIdAndUpdate = jest.fn().mockRejectedValue(new Error(errorMessage));

        await updateSale(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to update the sale.' });
    });
});

describe("deleteSale", () => {
    let req, res;

    beforeEach(() => {
        req = { params: { id: "some-sale-id" } }; 
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("should delete the sale and return a success message", async () => {
        Sale.findByIdAndDelete = jest.fn().mockResolvedValue({});

        await deleteSale(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ message: 'Sale deleted successfully.' });
    });

    it("should return 404 if sale is not found", async () => {
        Sale.findByIdAndDelete = jest.fn().mockResolvedValue(null);

        await deleteSale(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ error: 'Sale not found.' });
    });
});