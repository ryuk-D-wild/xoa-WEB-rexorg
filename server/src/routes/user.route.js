const express=require("expresss")
const router=express.Router();
const userController=require("../controller/user.controller.js");

router.get("/profile",userController.getUserProfile);
router.get("/",userController.getAllUser);

module.exports=router;