const mongoose = require ('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
        maxLenght:50,
    },
    parentCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref :'categories',
    },
    level: {
        type: Number,
        required: true,
    },
}); 

const category = mongoose.model('categories', categorySchema);

module.exports = category;