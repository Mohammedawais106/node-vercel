import { hash1pasword,comparepass_word } from "../encrypt/userEncrypt.js";
import { reg_hashppas1serv,getdbpass_word } from "../services/userService.js";
import { generateToken } from "../authorization/jwt.js";
export let userRegisterdetails= async(req,res)=>{
    try {
        let{mobile,emailid,password}=req.body
        let hash1= await hash1pasword(password);
        let registerstatus= await reg_hashppas1serv({mobile,emailid,password:hash1});
        console.log("checkinggggg",registerstatus);
        if (registerstatus=="success") {
            res.json({"message":"user details created success"}).status(201)

        } else {
            res.json({'message':'error occured during created data'}).status(401)
        }    
    } catch (error) {

        res.json({'message':'server error'}).status(501)
    }
}

export let userLogin = async (req, res) => {
    try {
        let { emailid, password } = req.body;
        let dbpass = await getdbpass_word(emailid);
        
        let password_status = await comparepass_word(dbpass,password);
        console.log('alhumdulillah',password_status);
        if (password_status) {
            let token = generateToken(emailid);
            res.status(201).json({ "message": "LOGIN SUCCESS", "token": token });
        } else {
            res.status(401).json({ "message": "error for token generated" });
        }
    } catch (error) {
        console.log(error);
    }
}



