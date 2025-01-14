const express=require("express")

const cors=require("cors")

const app=express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message : "this is your server connector api",status:true})
})

const authRouters=require(".routes/auth.route.js")
app.use("/auth",authRouters);


const userRouters=require("./routes/user.route.js");
app.use("/users",userRouters);
module.exports=app;