
const cors = require("cors");

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const propertyRoutes = require("./routes/propertyRoutes");
const authRoutes = require("./routes/authRoutes");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
  });
app.use("/api/properties", propertyRoutes);

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 