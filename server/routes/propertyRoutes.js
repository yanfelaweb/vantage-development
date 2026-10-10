



const express = require("express");
const Property = require("../models/Property");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

const protect = require("../middleware/protect");

// GET all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();

    res.json(properties);
  } catch (error) {
  console.error("Fetch properties error:", error.message);

  res.status(500).json({
    message: "Failed to fetch properties",
  });
}
});

// GET one property by slug
router.get("/:slug", async (req, res) => {
  try {
    const property = await Property.findOne({
      slug: req.params.slug,
    });

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json(property);
  } catch (error) {
    console.error("Fetch property error:", error.message);

    res.status(500).json({
      message: "Failed to fetch property",
    });
  }
});

// POST a new property
router.post("/", authMiddleware, async (req, res) => {
  try {
    const property = new Property(req.body);

    const savedProperty = await property.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create property",
      error: error.message,
    });
  }
});

// UPDATE a property by slug
router.put("/:slug", authMiddleware, async (req, res) => {
  try {
    const updatedProperty = await Property.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProperty) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json(updatedProperty);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update property",
      error: error.message,
    });
  }
});

// DELETE a property by slug
router.delete("/:slug", authMiddleware, async (req, res) => {
  try {
    const deletedProperty = await Property.findOneAndDelete({
      slug: req.params.slug,
    });

    if (!deletedProperty) {
      return res.status(404).json({
        message: "Property not found",
      });
    }

    res.json({
      message: "Property deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete property",
      error: error.message,
    });
  }
});

module.exports = router;