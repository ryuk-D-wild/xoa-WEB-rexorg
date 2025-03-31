const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {  // corrected typo from 'firstNmae' to 'firstName'
        type: String,
        required: true,  // corrected typo from 'require' to 'required'
    },
    lastName: {  // corrected typo from 'lastNmae' to 'lastName'
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: "customer"
    },
    mobile: {
        type: String,
    },
    address: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses"
    }],
    paymentInformation: [  // corrected typo from 'aymentInformation' to 'paymentInformation'
        {
            type: mongoose.Schema.ObjectId,
            ref: "payment_information"
        }
    ],
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ratings"
        }
    ],
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "reviews"
        }
    ],
    createdAt: {  // changed from 'createAt' to 'createdAt' for better readability
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("users", userSchema);  // corrected 'usersSchema' to 'userSchema'

module.exports = User;
