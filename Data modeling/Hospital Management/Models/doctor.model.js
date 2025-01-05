import mongoose  from "mongoose";

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    salary : {
      type : String,
      required : true  
    },
    qualification : {
        type : String,
        required : true
    },
    experienceInNumbers: {
        type : Number,
        default : 0
    } 
}  , {timestamps : true});

export const Doctor = mongoose.model("Doctor" ,  doctorSchema);