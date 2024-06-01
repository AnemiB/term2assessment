const mongoose = require("mongoose");

const Petschema = new mongoose.Schema({
    petId: {type: String, required: true},
    name : {type: String, required: true},
    categoryName : {type: String, required: true},
    image : {type: String, required : true},
    status : {type: Number, required : true},
    price : {type: Number, required : true },
    

})
module.exports = mongoose.model("Product", Petschema);