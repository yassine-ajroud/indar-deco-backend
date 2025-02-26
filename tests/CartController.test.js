jest.mock("../models/Cart.js");

const { createCart , getCartById , updateCart , deleteCart} = require("../controllers/CartController.js");
const Cart = require("../models/Cart.js");

describe("create new cart", () => {
  let req, res;

  beforeEach(() => {
    req = { body: { userId: "65fdf2932cff2a8189cc7f57", sales: [] } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks(); 
  });

  it("should create a new cart with provided user id", async () => {
    Cart.create = jest.fn().mockResolvedValue({
      userId: "65fdf2932cff2a8189cc7f57",
      sales: [],
    });

    await createCart(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledTimes(1);
  });

  

});

describe("Get Cart by User ID", () => {
  let req, res;

  beforeEach(() => {
    req = { body: { userId: "65fdf2932cff2a8189cc7f57" } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks(); 
  });

  it("should return a cart when found", async () => {
    const mockCart = { _id: "fakeCartId", userId: "65fdf2932cff2a8189cc7f57", sales: [] };
    
    Cart.findOne.mockResolvedValue(mockCart); 

    await getCartById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockCart);
  });

  it("should return 404 when cart is not found", async () => {
    Cart.findOne.mockResolvedValue(null);

    await getCartById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ msg: "cart not found" });
  });
});

describe("Update Cart", () => {
  let req, res;

  beforeEach(() => {
    req = { body: { id: "fakeCartId", sales: ["123"] } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks(); 
  });

  it("should update cart and return 200", async () => {
    const mockUpdatedCart = { _id: "fakeCartId", sales: req.body.sales };

    Cart.findByIdAndUpdate.mockResolvedValue(mockUpdatedCart); 

    await updateCart(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockUpdatedCart);
  });

  it("should return 404 if cart is not found", async () => {
    Cart.findByIdAndUpdate.mockResolvedValue(null); 

    await updateCart(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ msg: "Cart not found" });
  });

  it("should return 500 on database error", async () => {
    Cart.findByIdAndUpdate.mockRejectedValue(new Error("Database error")); 

    await updateCart(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ error: "Database error" }));
  });
});

describe("Delete Cart", () => {
  let req, res;

  beforeEach(() => {
    req = { body: { id: "fakeCartId" } };
    res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    jest.clearAllMocks(); 
  });

  it("should delete the cart and return 200", async () => {
    Cart.findByIdAndDelete.mockResolvedValue({ _id: "fakeCartId" }); 

    await deleteCart(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "cart deleted successfully" });
  });

  it("should return 404 if cart is not found", async () => {
    Cart.findByIdAndDelete.mockResolvedValue(null); 

    await deleteCart(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "cart not found" });
  });

  it("should return 500 on database error", async () => {
    Cart.findByIdAndDelete.mockRejectedValue(new Error("Database error"));

    await deleteCart(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Error occurred while deleting cart" });
  });
});