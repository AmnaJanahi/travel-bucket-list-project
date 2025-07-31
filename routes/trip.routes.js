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

router.get("/:tripId", async (req,res)=> {
    try{
        const foundTrip = await Trip.findById(req.params.tripId).populate("country")
        console.log(foundTrip)
        res.render("trip/trip-details.ejs", {foundTrip})
    }
    catch(error){
         console.log("There is an error",error)   
    }      
})

router.delete( "/delete/:id",async (req,res) => {
 try{
    const deletedTrip = await Trip.findByIdAndDelete(req.params.id)
    res.render("trip/trip-details.ejs", {deletedTrip})
    }
    catch(error){
        console.log("There is an error",error)
    }
})

router.get("/update/:id", async (req,res) => {
    try{
        const foundTrip= await Trip.findById(req.params.id)
        const allCountries = await Country.find()
        res.render("trip/update-trip.ejs", {foundTrip, allCountries})  
    }
    catch(error){
        console.log("There is an error",error)
    }
})

router.put("/:tripId/update", async (req,res) =>{
   try{
    const updatedTrip = await Trip.findByIdAndUpdate(req.params.tripId,req.body)
      res.redirect("/trip") 
    }
    catch(error){
        console.log("There is an error",error)
    }
})
module.exports = router