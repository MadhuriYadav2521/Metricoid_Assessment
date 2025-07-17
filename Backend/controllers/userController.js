import Users from "../models/userModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await Users.find().exec();
        if (!users) return res.status(400).json({ status: 400, message: "Users not found", success: false })
        return res.status(200).json({ status: 200, message: "Users fetched successfully.", users, success: false })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 500, message: "Internal server error" })

    }
}

export const createUser = async (req,res) => {
    try {
        
        const {name, designation,profileImage, task, reviews, followStatus, discription} = req.body
        const newUser = new Users({
            name, designation,profileImage, task, reviews, followStatus, discription
        })
        await newUser.save()
        return res.status(200).json({status: 200, message: "User crerated.", newUser})


    } catch (error) {
        console.log(error);
        
    }
}