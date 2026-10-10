require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const readline = require("node:readline/promises");
const Admin = require("./models/Admin");

async function createAdmin() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  try {
    const email = (await rl.question("Admin email: "))
      .trim()
      .toLowerCase();

    const password = await rl.question("Admin password: ");

    if (!email || password.length < 12) {
      throw new Error(
        "Enter an email and a password of at least 12 characters."
      );
    }

    await mongoose.connect(process.env.MONGO_URI);

    const existingAdmin = await Admin.findOne({ email });

    if (existingAdmin) {
      throw new Error("This admin email already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await Admin.create({
      email,
      password: hashedPassword,
    });

    console.log("Admin account created successfully!");
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
    await mongoose.disconnect();
  }
}

createAdmin();