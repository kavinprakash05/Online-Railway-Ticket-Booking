import mongoose from 'mongoose';

const m = new mongoose.Schema({
    destination: {
        type: String,
        required: true  ,
        // enum: ['-- Select --',  'Chennai', 'Madurai', 'Coimbatore', 'Erode', 'Dindigul', 'Trichy', 'Kanyakumari', 'Tirunelveli', 'Vilupuram', 'Vellore']
    },
    arrival: {
        type: String,
        required: true,
        // enum: ['-- Select --', 'Chennai', 'Madurai', 'Coimbatore', 'Erode', 'Dindigul', 'Trichy', 'Kanyakumari', 'Tirunelveli', 'Vilupuram', 'Vellore']
    },
    class: {
        type: String,
        required: true,
        // enum: ['1A', '2A', '3A']
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    },
    tripType: {
        type: String,
        required: true,
        // enum: [  'Up Only', 'Up and Down' ]
    },
    date: {
        type: Date,
        required: true,
    },
    total:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
});

export default mongoose.model('railway', m);