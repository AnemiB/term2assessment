const express = require("express");
const router = express.Router();
const Pet = require("../Models/AddPets");

router.post("/register", async (req, res) => {
  const { petId, name, categoryName, status, price } = req.body;

  try {
    const pet = new Pet({
      petId,
      name,
      categoryName,
      status,
      price,
    });
    await pet.save();
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
