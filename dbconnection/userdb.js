import mongoose from "mongoose";
let dbconnection=async(dbstring,dbname)=>{
    try {
        await mongoose.connect(dbstring+dbname)
        console.log('Hello Admin Database Conneted successfully')
    } catch (error) {
        console.log('Helloo Admin Erroro occured durin Database connection')
    }
}

export default dbconnection;