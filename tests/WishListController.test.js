jest.mock("../models/WishList.js");

const { createWishList , getWishListById , updateWishList , deleteWishList} = require("../controllers/WishListController.js");
const WishList = require("../models/WishList.js");

describe("create new WishList", () => {
    let req, res;

    beforeEach(() => {
        req = { body: { userId: "65fdf2932cff2a8189cc7f57", products: [] } };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("should create a new WishList with provided user id", async () => {
        WishList.create = jest.fn().mockResolvedValue({
            userId: "65fdf2932cff2a8189cc7f57",
            products: [],
        });

        await createWishList(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledTimes(1);
    });

});

describe("Get wishlist by User ID", () => {
    let req, res;

    beforeEach(() => {
        req = { body: { userId: "65fdf2932cff2a8189cc7f57" } };
        res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        jest.clearAllMocks();
    });

    it("should return a wishlist when found", async () => {
        const mockCart = { _id: "fakeCartId", userId: "65fdf2932cff2a8189cc7f57", products: [] };

        WishList.findOne.mockResolvedValue(mockCart);

        await getWishListById(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockCart);
    });

    it("should return 404 when wishlist is not found", async () => {
        WishList.findOne.mockResolvedValue(null);

        await getWishListById(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ msg: "wishlist not found" });
    });
});

describe("Update WishList", () => {
    let req, res;
  
    beforeEach(() => {
      req = { body: { id: "fakeWishListId", products: ["product1", "product2"] } };
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.clearAllMocks(); 
    });
  
    it("should update the wishlist and return 200", async () => {
      WishList.findByIdAndUpdate.mockResolvedValue({ 
        _id: "fakeWishListId", 
        products: ["product1", "product2"] 
      });
  
      await updateWishList(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({ _id: "fakeWishListId", products: ["product1", "product2"] })
      );
    });
  
    it("should return 404 if wishlist is not found", async () => {
      WishList.findByIdAndUpdate.mockResolvedValue(null); 
  
      await updateWishList(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "wishlist not found" });
    });
  
    it("should return 500 on database error", async () => {
      WishList.findByIdAndUpdate.mockRejectedValue(new Error("Database error")); 
  
      await updateWishList(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: "Database error" });
    });
  });

  describe("Delete WishList", () => {
    let req, res;
  
    beforeEach(() => {
      req = { body: { id: "fakeWishListId" } };
      res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      jest.clearAllMocks(); 
    });
  
    it("should delete the wishlist and return 200", async () => {
      WishList.findByIdAndDelete.mockResolvedValue({ _id: "fakeWishListId" }); 
  
      await deleteWishList(req, res);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: "wishlist deleted successfully" });
    });
  
    it("should return 404 if wishlist is not found", async () => {
      WishList.findByIdAndDelete.mockResolvedValue(null); 
  
      await deleteWishList(req, res);
  
      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({ message: "wishlist not found" });
    });
  
    it("should return 500 on database error", async () => {
      WishList.findByIdAndDelete.mockRejectedValue(new Error("Database error")); 
  
      await deleteWishList(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Error occurred while deleting wishlist" });
    });
  });