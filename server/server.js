const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Correct usage of CORS middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to handle JSON parsing
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Your DB Connected");
  })
  .catch((error) => {
    console.log("Error in DB connection:", error);
  });

//Routes and Routing will be done here

// Global Error Handler
app.use((err, req, res, next) => {
  console.log(err.stack); // Corrected `err.Stack` to `err.stack`
  res.status(500).json({
    success: false,
    message: "Something Went Wrong",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`); // Fixed typo
});
