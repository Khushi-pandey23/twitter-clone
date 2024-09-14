import User from "../models/user.model.js";
import jwt from "jsonwebtoken"

export const protectRoute = async (req,res,next) =>{
    try {
        // cookie from token
        const token = req.cookies.jwt;

        // no token provided
        if(!token){
            return res.status(401).json({error: "Unauthorized: No Token Provided"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        // invalid cookie provided
        if(!decoded){
            return res.status(401).json({error: "Unauthorized: Invalid"});
        }
        // valid userid
        const user = await User.findById(decoded.userId).select("-password"); // not selecting the password

        if(!user){
            return res.status(404).json({error: "User not found"})
        }

        req.user = user;
        next()
    } catch (err) {
        console.log("Error in protectRoute middleware",err.message);
        return res.status(500).json({error: "Internal Server Error"})
    }
}

