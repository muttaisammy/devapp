const mongoose = require("mongoose");

const licSchema = new mongoose.Schema({
    lic: {type: String, required:true},
    make: {type: String, required:true},
    model: String,
    modelYear: Number,
    engineModel: String,
    engineHp: String,
    engineCylinders: Number,
    fuelInjection: String,
});

module.exports = Lic = mongoose.model("Lic", licSchema);