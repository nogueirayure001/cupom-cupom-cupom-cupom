import mongoose from 'mongoose';
const usersSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isMaster: {
        type: Boolean,
        required: true,
        default: false
    }
}, { timestamps: true });
export default usersSchema;
