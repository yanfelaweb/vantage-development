const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const router = express.Router();

// Admin login
router.post("/login", async (req, res) => {
  try {
    console.log("LOGIN REQUEST RECEIVED");
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    const admin = await Admin.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!admin) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.password
    );

    console.log("Password matches:", passwordMatches);

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not configured");
    }

    const token = jwt.sign(
      { adminId: admin._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    ); 

    res.json({
      message: "Login successful",
      token,
    });
     } catch (error) {
  console.error("Admin login error:", error.message);
    res.status(500).json({
      message: "Login failed",
    });
  }
});

module.exports = router;