const mongoose = require("mongoose")

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    travelDate: {
        type: Date
    }
})
const Country= mongoose.model("Country",countrySchema)

module.exports = Country