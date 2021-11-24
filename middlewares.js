const jwt=require('jsonwebtoken');
const validator=require('email-validator')
const emailCheck=(req,res,next)=>{
    const Email = req.body.email;
   // console.log(Email.length)
    if(validator.validate(Email)){
        next();
    }
   /* if(Email.length<=10 || Email.length>=20){
        res.send("please provide the email between 10 and 20 characters")
    }*/
    else{
        res.send("Invalid Email");
    }
}
const passwordCheck=(req,res,next)=>{
    const password = req.body.password;  
    console.log(password.length);
    if(password.length<6 || password.length>=7){
        res.send("password must be 6 characters")
    }
    else{
        next();
    }
}
const tokenCheck=(req,res,next)=>{
const token=req.headers.authorization;
if(!token){
    res.send("you are not authorized");
}else{
  jwt.verify(token,'a1235',(err,rows)=>{
      if(err){
          res.send("token is invalid")
      }else{
    //res.send(rows.userId);
    console.log(rows);//object
     req.user=rows;
   next();

  }
  })
}
}
const classIdCheck=(req,res,next)=>{
    const classId=req.body.classId;
    if(classId===101 || classId===102 || classId===103 ||classId===104)
    {
        next();
    }else{
        res.send("we have only 101 to 104 classeIds please check while insert")
    }
}
const classNameCheck=(req,res,next)=>{
    const className=req.body.className;
    if(className=="firstyear"||className=="secondyear")
    {
        next();
    }else{
        res.send("we have only firstyear and secondyear please check while insert")
    }
}
const branchCheck=(req,res,next)=>{
    const branch=req.body.branch;
    if(branch=="mpc"||branch=="bipc"){
        next();
    }else{
        res.send("we have only mpc and bipc branches other branches not accepted");
    }
}
module.exports={
    emailCheck,
    passwordCheck,
    tokenCheck,
    classIdCheck,
    classNameCheck,
    branchCheck
}