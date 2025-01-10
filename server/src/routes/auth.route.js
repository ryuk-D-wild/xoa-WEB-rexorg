const express=require("expresss")
const router=express.Router();
const authController=require("../controller/auth.controller.js");

router.post("/singup",authController.register);
router.post("/singin",authController.login);

module.exports=router;