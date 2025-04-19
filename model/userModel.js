import mongoose from "mongoose";
let user1Schema=({
    mobile:{type:String,trim:true,required:true},
    emailid:{type:String,trim:true,require:true},
    password:{type:String,trim:true,require:true}
})
let user1Model=mongoose.model("TekiskyMine",user1Schema,"TekiskyMine")
export default user1Model