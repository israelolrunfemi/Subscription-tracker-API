import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name:{
    type:String,
    required:[true,"User Name is required"],
    trim:true,
    minlength:[2,"User Name must be at least 2 characters"],
    maxlength:[50,"User Name must be less than 50 characters"],
},
email:{
    type:String,
    required:[true,"Email is required"],
    trim:true,
    lowercase:true,
    match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please enter a valid email"],
},
password:{
    type:String,
    required:[true,"Password is required"],
    minlength:[6,"Password must be at least 6 characters"],
},
},{timestamps:true}
    
);

const User = mongoose.model('User',userSchema);

export default User;