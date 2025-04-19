import jwt from "jsonwebtoken";

export let generateToken = (emailid) => {
    if (!process.env.SECRETKEY) {
        throw new Error("SECRETKEY is not defined in environment variables");
    }
    let token = jwt.sign({ emailid }, process.env.SECRETKEY);
    return token;
}
