const express = require("express");
const router = express.Router();
const Product = require("../Models/PetStore");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});

const upload = multer({ storage: storage });

router.post("/registerProduct", upload.single("image"), async (req, res) => {
  const { id, name, rating, description, price } = req.body;
  const imagePath = req.file ? req.file.filename : null; 

  try {
    const product = new Product({
      id,
      name,
      description,
      image: imagePath,
      rating,
      price,
    });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const Pets = await Product.find();
    res.status(200).json(Pets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/deleteProduct", async (req, res) => {
  const { id } = req.body;

  try {
    const product = await Product.findOne({ id });

    if (product) {
      if (product.image) {
        const imagePath = path.join(
          __dirname,
          "..",
          "public",
          "Images",
          product.image
        );
        fs.unlink(imagePath, (err) => {
          if (err) console.error("Failed to delete image file:", err);
        });
      }

      await product.deleteOne();
      res.status(200).json({ message: "Product found and deleted", product });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
