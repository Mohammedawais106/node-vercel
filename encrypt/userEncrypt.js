import bcrypt from "bcrypt"
export let hash1pasword= async(plainPass)=>{
    try {
        let hashpass=await bcrypt.hash(plainPass,10)
        return hashpass
    } catch (error) {
        console.log(`error occurerd druing encrypt${error}`)
    }

}

export let comparepass_word = async (dbpass, password) => {
    try {
        let flag = await bcrypt.compare(password, dbpass);
        return flag;
    } catch (error) {
        console.log('error occurred during compare password', error);
    }
}

