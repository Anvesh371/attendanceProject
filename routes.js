const connection=require('./model')
const express=require('express');
const controller=require("./controllers");
const middleware=require('./middlewares');
const router=express.Router();
router.get("/users",controller.users)
router.post("/register",middleware.emailCheck,middleware.passwordCheck,controller.register)
router.post("/login",middleware.emailCheck,middleware.passwordCheck,controller.login)
router.get("/userinfo",middleware.tokenCheck,controller.userinfo)
router.delete('/:userId',controller.deleteUser)
router.post("/addClass",middleware.classIdCheck,middleware.classNameCheck,middleware.branchCheck,middleware.tokenCheck,controller.registerClass)
router.get("/classInfo",middleware.tokenCheck,controller.classInfo)
router.get("/classes",controller.classes)
router.delete('/delete/:classId',controller.deleteClass);
module.exports=router;  