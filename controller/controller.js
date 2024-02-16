const {storingData}=require("../model/model")

exports.registrerFunction=(req,res)=>{
    res.send("helloworld")
    storingData(req.body)
}

exports.loginFunction=(req,res)=>{
    res.send("logined success")
    storingData(req.body)
}