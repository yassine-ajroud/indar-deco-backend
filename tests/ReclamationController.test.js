jest.mock("../models/Reclamation");

const { createReclamation , getAllReclamations , getReclamationById , updateReclamation , deleteReclamation} = require("../controllers/ReclamationController");
const Reclamation = require("../models/Reclamation");

describe("Create Reclamation", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        user: "userId",
        sales: ["item1", "item2"],
        reference: "order123",
        price: 100,
        address: "123 Street, City"
      }
    };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks(); 
  });

  it("should create a new reclamation and return 201", async () => {
    const fakeReclamation = {
      user: "userId",
      sales: ["item1", "item2"],
      reference: "order123",
      price: 100,
      address: "123 Street, City"
    };

    Reclamation.prototype.save = jest.fn().mockResolvedValue(fakeReclamation);

    await createReclamation(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Réclamation créée avec succès",
      reclamation: fakeReclamation
    });
  });

  it("should return 500 if there is a database error", async () => {
    const errorMessage = "Database error";
    Reclamation.prototype.save.mockRejectedValue(new Error(errorMessage)); 

    await createReclamation(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: "Erreur lors de la création de la réclamation",
      details: errorMessage
    });
  });
});

describe("Get All Reclamations", () => {
  let req, res;

  beforeEach(() => {
    req = { params: { id: "userId" } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks();
  });

  it("should return all reclamations for a given user", async () => {
    const fakeReclamations = [
      {
        user: "userId",
        address: "123 Street",
        sales: ["item1", "item2"],
        completed: false,
        verified: false,
        reference: "order123",
        price: 100,
      },
      {
        user: "userId",
        address: "124 Street",
        sales: ["item3"],
        completed: true,
        verified: true,
        reference: "order124",
        price: 200,
      },
    ];

    Reclamation.find = jest.fn().mockResolvedValue(fakeReclamations);

    await getAllReclamations(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(fakeReclamations);
  });

});

describe("Get Reclamation By Id", () => {
    let req, res;
  
    beforeEach(() => {
      req = { params: { id: "reclamationId" } };
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.clearAllMocks();
    });
  
    it("should return a reclamation if found", async () => {
      const fakeReclamation = {
        user: "userId",
        address: "123 Street",
        sales: ["item1", "item2"],
        completed: false,
        verified: false,
        reference: "order123",
        price: 100,
      };
  
      Reclamation.findById = jest.fn().mockResolvedValue(fakeReclamation);
  
      await getReclamationById(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeReclamation);
    });
  
    it("should return 404 if reclamation is not found", async () => {
      Reclamation.findById = jest.fn().mockResolvedValue(null);
  
      await getReclamationById(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Réclamation non trouvée.' });
    });
  
    it("should return 500 if there is a database error", async () => {
      const errorMessage = "Database error";
      Reclamation.findById.mockRejectedValue(new Error(errorMessage)); 
  
      await getReclamationById(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Erreur lors de la récupération de la réclamation',
        error: errorMessage,
      });
    });
  });

  describe("Update Reclamation", () => {
    let req, res;
  
    beforeEach(() => {
      req = { params: { id: "reclamationId" }, body: { sales: ["item1", "item2"], price: 200 } };
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.clearAllMocks();
    });
  
    it("should update a reclamation if found", async () => {
      const fakeReclamation = {
        _id: "reclamationId",
        user: "userId",
        address: "123 Street",
        sales: ["item1", "item2"],
        reference: "order123",
        price: 200,
        completed: false,
        verified: false,
      };
  
      Reclamation.findByIdAndUpdate = jest.fn().mockResolvedValue(fakeReclamation);
  
      await updateReclamation(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(fakeReclamation);
    });
  
    it("should return 404 if reclamation is not found", async () => {
      Reclamation.findByIdAndUpdate = jest.fn().mockResolvedValue(null);
  
      await updateReclamation(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Réclamation non trouvée.' });
    });
  
    it("should return 500 if there is a database error", async () => {
      const errorMessage = "Database error";
      Reclamation.findByIdAndUpdate.mockRejectedValue(new Error(errorMessage)); 
  
      await updateReclamation(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Erreur lors de la mise à jour de la réclamation',
        error: errorMessage,
      });
    });
  });

  describe("Delete Reclamation", () => {
    let req, res;
  
    beforeEach(() => {
      req = { params: { id: "reclamationId" } };
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.clearAllMocks();
    });
  
    it("should delete a reclamation if found", async () => {
      const fakeReclamation = {
        _id: "reclamationId",
        user: "userId",
        address: "123 Street",
        sales: ["item1", "item2"],
        reference: "order123",
        price: 200,
        completed: false,
        verified: false,
      };
  
      Reclamation.findByIdAndRemove = jest.fn().mockResolvedValue(fakeReclamation);
  
      await deleteReclamation(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Réclamation supprimée avec succès.' });
    });
  
    it("should return 404 if reclamation is not found", async () => {
      Reclamation.findByIdAndRemove = jest.fn().mockResolvedValue(null);
  
      await deleteReclamation(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ error: 'Réclamation non trouvée.' });
    });
  
    it("should return 500 if there is a database error", async () => {
      const errorMessage = "Database error";
      Reclamation.findByIdAndRemove.mockRejectedValue(new Error(errorMessage));
  
      await deleteReclamation(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        error: 'Erreur lors de la suppression de la réclamation',
        error: errorMessage,
      });
    });
  });