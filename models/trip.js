const mongoose = require("mongoose")
const Country = require("./Country")
const tripSchema = new mongoose.Schema ({
    tripName:{
        type: String,
        required: true
    },
    country:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country'
    }],
    transportation:{
        type: String,
        enum: ["Car", "Plane", "Train", "Bus", "Other"]
    },
    accommodation: {
        type: String,
        enum: ["Hotel", "Hostel", "Camping","Other"]
    }
})
const Trip = mongoose.model("Trip", tripSchema)
module.exports = Trip