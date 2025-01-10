const mongoose =require("mongoose")

const mondbUrl="mongodb+srv://cluster1:qwxoimprty@cluster1.ur2dw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}