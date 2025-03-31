const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'cart ',
        required:true,
    },
    produbt:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product ',
        required:true,
    },
    size: {
        type:String,
        required:true,
    },
    quantity:{
        type: Number,
        required: true,
        default: 1,
    },
    price:{
        type: Number,
        requied: true,
    },
    discountedPrice: {
        type: Number,
        required: true,
    },
    userId: {
        type :mongoose.Schema.Types.ObjectId,
        ref:'users ',
        required: true,
    },
});

const CartItem = mongoose.model('cartitems', CartItemSchema);

module.exports = CartItem;