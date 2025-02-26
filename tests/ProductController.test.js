const Product = require('../models/Product');
const productController = require('../controllers/ProductController');

jest.mock('../models/Product'); // Mock the Product model

describe('Product Controller', () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a new product', async () => {
    const mockProduct = { _id: '1', name: 'Test Product' };
    
    Product.mockImplementation(() => ({
      save: jest.fn().mockResolvedValue(mockProduct),
    }));

    req.body = mockProduct;
    await productController.createProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(Product).toHaveBeenCalled();
  });

  test('should return error when product creation fails', async () => {
    Product.mockImplementation(() => ({
      save: jest.fn().mockRejectedValue(new Error('Database error')), 
    }));

    req.body = { name: 'Test Product' };
    await productController.createProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to create the product.Error: Database error' });
  });

  test('should get all products', async () => {
    const mockProducts = [{ _id: '1', name: 'Product 1' }, { _id: '2', name: 'Product 2' }];

    Product.find.mockReturnValue({
      sort: jest.fn().mockResolvedValue(mockProducts),
    });

    await productController.getAllProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockProducts);
  });

  test('should return error when getting all products fails', async () => {
    Product.find.mockReturnValue({
      sort: jest.fn().mockRejectedValue(new Error('Database error')),
    });

    await productController.getAllProducts(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch products.' });
  });

  test('should get product by ID', async () => {
    const mockProduct = { _id: '1', name: 'Product 1' };

    Product.findById.mockResolvedValue(mockProduct);

    req.params.id = '1';
    await productController.getProductById(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockProduct);
  });

  test('should return 404 if product not found', async () => {
    Product.findById.mockResolvedValue(null);

    req.params.id = '999';
    await productController.getProductById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Product not found.' });
  });

  test('should return error when fetching product by ID fails', async () => {
    Product.findById.mockRejectedValue(new Error('Database error'));

    req.params.id = '1';
    await productController.getProductById(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Failed to fetch the product.' });
  });

  test('should update a product', async () => {
    const updatedProduct = { _id: '1', name: 'Updated Product' };

    Product.findByIdAndUpdate.mockResolvedValue(updatedProduct);

    req.params.id = '1';
    req.body = { name: 'Updated Product' };
    await productController.updateProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updatedProduct);
  });

  test('should return 404 if product to update is not found', async () => {
    Product.findByIdAndUpdate.mockResolvedValue(null);

    req.params.id = '999';
    req.body = { name: 'Updated Product' };
    await productController.updateProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Product not found.' });
  });

  test('should delete a product', async () => {
    Product.findOneAndDelete.mockResolvedValue({ _id: '1' });

    req.params.id = '1';
    await productController.deleteProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Product deleted successfully.' });
  });

  test('should return 404 when deleting a non-existing product', async () => {
    Product.findOneAndDelete.mockResolvedValue(null);

    req.params.id = '999';
    await productController.deleteProduct(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ error: 'Product not found.' });
  });
});
