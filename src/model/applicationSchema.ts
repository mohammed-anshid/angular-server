import { Schema , model } from 'mongoose';

const applicationSchema : Schema = new Schema({
    firstName : { type:String },
    lastName : { type:String },
    mobile : { type:Number },
    email : { type:String },
    address : { type:String },
    pinCode : { type:String },
    city : { type:String },
    state : { type:String },
    country: { type:String },
    resumeUrl : { type:String }
})

export default model('Applications',applicationSchema);