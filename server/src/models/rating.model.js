const mongoose =require('mongoose');
const {Schema} = mongoose;

const ratingsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Rating = mongoose.model('ratings', ratingsSchema);

module.exports = Rating;