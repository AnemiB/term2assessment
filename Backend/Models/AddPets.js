const mongoose = require("mongoose");

const AddPetSchema = new mongoose.Schema({
  petId: { type: String, required: true },
  name: { type: String, required: true },
  categoryName: { type: String, required: true }, 
  status: { type: String, required: true }, 
  price: { type: String, required: true } 
});

module.exports = mongoose.model("Pet", AddPetSchema);
