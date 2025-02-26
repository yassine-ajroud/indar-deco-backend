const {
  register,
  login,
  forgetPassword,
  profilgetById,
} = require("../controllers/AuthController"); // Adjust path as needed
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const OTP = require("../models/OTP");
const User = require("../models/User");

jest.mock("../models/User");
jest.mock("bcryptjs");
jest.mock("jsonwebtoken");
jest.mock("nodemailer");
jest.mock("../models/OTP");

describe("Auth Controller Tests", () => {
  describe("register", () => {
    it("should register a user successfully", async () => {
      // Arrange
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
          firstName: "John",
          lastName: "Doe",
          address: "123 Test St",
          phone: "123456789",
          imageUrl: "http://example.com/image.jpg",
          OAuth: null,
          gender: "Male",
          birthDate: "1990-01-01",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.countDocuments.mockResolvedValue(0);

      bcrypt.hash.mockImplementation((password, saltRounds, callback) =>
        callback(null, "hashedPassword"),
      );

      const saveMock = jest.fn().mockResolvedValue({ id: "1" });
      User.prototype.save = saveMock;

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "user Added Successfully",
        uId: "1",
      });
    });

    it("should return error if user already exists", async () => {
      const req = {
        body: {
          email: "test@example.com",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.countDocuments.mockResolvedValue(1);

      await register(req, res);

      expect(res.status).toHaveBeenCalledWith(403);
      expect(res.json).toHaveBeenCalledWith({
        message: "user already exist",
      });
    });
  });

  describe("login", () => {
    it("should login a user successfully", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue({
        email: "test@example.com",
        password: "hashedPassword",
        ban: false,
      });

      bcrypt.compare.mockImplementation(
        (inputPassword, storedPassword, callback) => callback(null, true),
      );

      jwt.sign.mockReturnValue("token");

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    it("should return error if password does not match", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue({
        email: "test@example.com",
        password: "hashedPassword",
        ban: false,
      });

      bcrypt.compare.mockImplementation(
        (inputPassword, storedPassword, callback) => callback(null, false),
      );

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(202);
      expect(res.json).toHaveBeenCalledWith({
        message: "password does not match!",
      });
    });

    it("should return error if user is banned", async () => {
      const req = {
        body: {
          email: "test@example.com",
          password: "password123",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue({
        email: "test@example.com",
        password: "hashedPassword",
        ban: true,
      });

      await login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({
        message: "user banned",
      });
    });
  });

  describe("forgetPassword", () => {
    it("should send a reset email successfully", async () => {
      const req = {
        body: {
          email: "test@example.com",
          destination: "destination@example.com",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue({ email: "test@example.com" });

      OTP.findOne.mockResolvedValue(null);

      OTP.prototype.save = jest.fn().mockResolvedValue({});

      const sendMailMock = jest
        .fn()
        .mockImplementation((details, callback) => callback(null));
      nodemailer.createTransport.mockReturnValue({
        sendMail: sendMailMock,
      });

      await forgetPassword(req, res);

      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });

  describe("profilgetById", () => {
    it("should return user profile by ID", async () => {
      const req = {
        body: {
          id: "1",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue({
        _id: "1",
        firstName: "John",
        lastName: "Doe",
      });

      await profilgetById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    it("should return error if no user found", async () => {
      const req = {
        body: {
          id: "999",
        },
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      User.findOne.mockResolvedValue(null);

      await profilgetById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith({
        message: "no user found",
      });
    });
  });
});
