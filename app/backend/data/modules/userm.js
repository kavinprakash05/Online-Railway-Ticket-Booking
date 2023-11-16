import mongoose from 'mongoose';

const m = new mongoose.Schema({
    umail: {
        type: String,
        required: true  // fixed typo: "requried" to "required"
    },
    uname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    uaadhaar: {
        type: Number,
        required: true
    },
    upin: {
        type: String,
        required: true
    }
});

export default mongoose.model('users', m);
