import mongoose from "mongoose";


const registerSchema = new mongoose.Schema(
    {
        first_name: String,
        last_name: String,
        email: String,
        password: String
    }
);

const registerModel = mongoose.model('register', registerSchema);

export default registerModel