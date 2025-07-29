const router = require("express").Router()
const Country = require("../models/Country")




router.get("/new", (req,res) => {
res.render("country/new.ejs")
})








module.exports = router