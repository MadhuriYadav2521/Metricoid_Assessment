import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,
    designation: String,
    profileImage: String,
    followStatus: String,
    task: Number,
    discription: String,
    reviews: String
})

const Users = mongoose.model('Users', userSchema)
export default Users;