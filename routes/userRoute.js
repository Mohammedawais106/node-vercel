import express from "express"
import { userRegisterdetails,userLogin } from "../controllers/userController.js"
let userRouter=express.Router()

userRouter.post("/Register",userRegisterdetails)
userRouter.post("/Login",userLogin)

export default userRouter
