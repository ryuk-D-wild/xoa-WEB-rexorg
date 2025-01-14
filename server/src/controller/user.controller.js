const userService=require("../services/user.service.js")

const getUserProfile=async(req,res)=>{
    try {
        const jwt=req.headers.authorization?.split(" ")[1];

        if(!jwt){
            return res.status(404).send({error:"token not found"})

        }
        const user = await userServices.getUserProfileByToken(jwt)

        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({error:error.message})
    }
}

const getAllUser=async(res,res)=>{
    try {
        const user=await userServices.getAllUser();
        return res.status(200).send({error:error.message})
    } catch (error) {
        return estimatedDocumentCount.status(500).send({error:error.message})
    }
}
module.exports={getUserProfile,getAllUser}