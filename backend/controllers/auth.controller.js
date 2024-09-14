import User from '../models/user.model.js'
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookie } from '../lib/utils/generateToken.js';

export const signup = async (req,res)=>{
    try {
        const {fullName, username, email, password} = req.body;

        // Valid email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({error: "Invalid email format"});
        }

        //existing User?
        const existingUser = await User.findOne({username})
        if(existingUser){
            return res.status(400).json({error: "Username is already taken."})
        }

        // existing email?
        const existingEmail = await User.findOne({email})
        if(existingEmail){
            return res.status(400).json({error: "Email is already taken."})
        }

        // password too short
        if(password.length < 6){
            return res.status(400).json({error: "Password must be atleast 6 characters long."})
        }

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            fullName,
            username,
            email,
            password: hashPassword
        })

        // generating a token and set it as a cookie which is saved in the browser
        if(newUser){
            generateTokenAndSetCookie(newUser._id,res)
            await newUser.save();

            // giving the cookie back to the user so if any actions are taken by the user, the request can be sent using this token
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                email: newUser.email,
                followers: newUser.followers,
                following: newUser.following,
                profileImg: newUser.profileImg,
                coverImg: newUser.coverImg,
            })
        }else{
            res.status(400).json({error: "Invalid user data"})
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({error: "Internal Server Error"})        
    }
}

export const login = async (req,res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "") // if no password then the app will not crash

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            email: user.email,
            following: user.following,
            followers: user.followers,
            profileImg: user.profileImg,
            coverImg: user.coverImg
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const logout = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message: "Logged out successfully"})
    } catch (error) {
        console.log("Error in logout controller",error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const getMe = async (req,res) => {
    try {
        const user = await User.findById(req.user._id).select("-password");
        res.status(200).json(user)
    } catch (error) {
        console.log("Error in getMe controller",error.message);
        res.status(500).json({error: "Internal Server Error"})
    }
}