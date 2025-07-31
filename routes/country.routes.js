const router = require("express").Router()
const Country = require("../models/Country")




router.get("/new", (req,res) => {
res.render("country/new.ejs")
})

router.post("/",async (req,res) => {
    try{
        const createdCountry = await Country.create(req.body)
        res.redirect("/country/new")
    }
    catch(error){
        console.log("There is an error",error)
    }
})

router.get("/",async (req,res) => {
    try{
        const allCountries = await Country.find()
        res.render("country/all-countries.ejs", {allCountries}) 
    }
    catch(error){
        console.log("There is an error",error)
    }
})


router.get("/:countryId", async (req,res) => {
     try{
         const foundCountry = await Country.findById(req.params.countryId)
         res.render("country/country-details.ejs",{foundCountry}) 
    }
    catch(error){
        console.log("There is an error",error)
    }
})

router.delete( "/delete/:id",async (req,res) => {
 try{
     const countryDeteted = await Country.findByIdAndDelete(req.params.id)
     res.redirect("/country")
       
    }
    catch(error){
        console.log("There is an error",error)
    }
})

router.get("/update/:id", async (req,res) => {
    try{
        const foundCountry= await Country.findById(req.params.id)
        res.render("country/update-country.ejs", {foundCountry})  
    }
    catch(error){
        console.log("There is an error",error)
    }
})

router.put("/:countryId/update", async (req,res) =>{
   try{
    const updatedCountry = await Country.findByIdAndUpdate(req.params.countryId,req.body)
      res.redirect("/country") 
    }
    catch(error){
        console.log("There is an error",error)
    }
})

module.exports = router