const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    firstNmae:{
        type:String,
        require:true,
    },
    lastNmae:{
            type:String,
            required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        required:true,
        default:"customer"
    },
    mobile:{
        type:String,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    }],
    aymentInformation:[
        {
            type:mongoose.Schema.ObjectId,
            ref:"payment_information"
        }
    ],
    ratings:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"ratings"
        }
    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"reviews"
        }
    ],
    createAt:{
        type:Date,
        default:Date.now()
    }
})

const User=mongoose.model("users",usersSchema)