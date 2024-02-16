
const mysql=require("mysql2")

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Deepthi@123",
    database:"users"
})
connection.connect(()=>{
    console.log("database connected")
})
module.exports=connection