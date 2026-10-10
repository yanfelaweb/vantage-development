const express = require("express");
const router = express.Router();

const Inquiry = require("../models/Inquiry");

// POST /api/inquiries
// Save a new customer inquiry
router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      subject,
      interest,
      message
    } = req.body;

    // Validate required fields
    const fields = [
      fullName,
      email,
      phone,
      subject,
      interest,
      message
    ];

    if (
      fields.some(
        (value) =>
          typeof value !== "string" ||
          value.trim() === ""
      )
    ) {
      return res.status(400).json({
        message: "Please complete all required fields."
      });
    }

    if (!/^\d{10,15}$/.test(phone.trim())) {
      return res.status(400).json({
        message: "Please enter a valid phone number."
      });
    }

    const inquiry = await Inquiry.create({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      subject: subject.trim(),
      interest: interest.trim(),
      message: message.trim()
    });

    return res.status(201).json({
      message: "Your inquiry has been received.",
      inquiryId: inquiry._id
    });
  } catch (error) {
    console.error("Inquiry submission error:", error);

    return res.status(500).json({
      message: "Unable to submit inquiry. Please try again."
    });
  }
});

module.exports = router;