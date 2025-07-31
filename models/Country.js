const mongoose = require("mongoose")

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    season: {
        type: String,
        enum: ["Spring", "Summer", "Autumn", "Winter"]
    }
})
const Country= mongoose.model("Country",countrySchema)

module.exports = Country