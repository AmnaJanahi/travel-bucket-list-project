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







module.exports = router