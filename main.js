import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import dbconnection from "./dbconnection/userdb.js";
import userRouter from "./routes/userRoute.js"
let app=express();
dotenv.config()
let port=process.env.PORT
let dbstring=process.env.DBSTRING
let dbname=process.env.DBNAME

dbconnection(dbstring,dbname)

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use("/Tekiskymine",userRouter)
app.listen(port,()=>{
    console.log(`Hello Admin server is started at port number ${port}`)
})