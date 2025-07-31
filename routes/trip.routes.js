const router = require("express").Router()
const Country = require("../models/Country")
const Trip = require("../models/trip")

router.get("/new",async (req,res) => {
    const allCountries = await Country.find()
    res.render("trip/new.ejs", {allCountries})
})

router.post("/", async (req,res) => {
    try{
        const createdTrip = await Trip.create(req.body)
        console.log(req.body)
        res.redirect("/trip/new")
    }
    catch(error){
        console.log("There is an error",error)   
     }
})

router.get("/", async (req,res) => {
       try{
        const allTrips = await Trip.find().populate("country")
        res.render("trip/all-trips.ejs", {allTrips, user:req.session.user})
    }
    catch(error){
        console.log("There is an error",error)   
     }
    })



module.exports = router