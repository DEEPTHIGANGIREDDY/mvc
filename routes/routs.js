const express=require("express")
const route=express.Router()
const {registrerFunction}=require("../controller/controller")
const {loginFunction}=require("../controller/controller")

route.post("/reg",registrerFunction)
route.post("/login",loginFunction)
module.exports=route