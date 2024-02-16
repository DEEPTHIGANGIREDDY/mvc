const express= require("express")
const app=express()
app.use(express.json())
let routes=require("./routes/routs")
app.use("/user",routes)
app.use("/login",routes)


app.listen(3002,()=>{
    console.log("running")
})