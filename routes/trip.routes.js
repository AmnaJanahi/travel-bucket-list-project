const router = require("express").Router()
const Country = require("../models/Country")
const Trip = require("../models/trip")

router.get("/new",async (req,res) => {
    const allCountries = await Country.find()
    res.render("trip/new.ejs", {allCountries})
})





module.exports = router