import { Schema , model } from 'mongoose';

const userSchema : Schema = new Schema ({
    
    username :{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true
    },
    password :{
        type:String,
        trim:true
    }
    
},{timestamps:true});

export default model('users',userSchema);