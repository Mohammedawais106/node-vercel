import user1Model from "../model/userModel.js"
export let reg_hashppas1serv=async(user)=>{
    try {
        let u1=new user1Model(user)
        let myuser= await u1.save()
        if (myuser) {
            return "success"
        } else {
            console.log("error when savaing data");
            
        }
    } catch (error) {
        console.log(`error occured during registerservice ${error}`)
    }

}


export let getdbpass_word = async (emailid) => {
    try {
        let find_dbpass = await user1Model.findOne({emailid });
        console.log("hi developer", find_dbpass);
        return find_dbpass.password;
    } catch (error) {
        console.log(error);
    }
}
