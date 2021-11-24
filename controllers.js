const connection = require('./model')
const jwt=require('jsonwebtoken')
const users = (req, res, next) => {
    connection.query('select * from users', (err, rows) => {
        if (err) {
            res.send("users not found");
        }
        else {
            res.send(rows);
        }
    })

}
const register = (req, res, next) => {
    const data = {email: req.body.email, password: req.body.password}
    connection.query('insert into users set ?', data, (err, rows) => {
        if (err) {
            res.send('user not registered')
        }
        else {
            res.send('user added successfully');
        }
    })
}

const login = (req, res) => {
    const loginEmail = req.body.email;
    const Password = req.body.password;
    // const UserId=req.body.userId
    const data = "select * from users where email = '" + loginEmail + "' and password = '" + Password + "'"
    console.log(data);
    connection.query(data, (err, rows) => {
        if (err || rows.length == 0) {
            res.send("credentials not matched")
        }
        else {
            console.log(rows)
            const token = jwt.sign({ id: rows[0].userId }, 'a1235')
            res.send({
                token
            })

        }
    })
}
        const userinfo = (req, res) => {
            connection.query("select * from users where userId='" + `${req.user.id}` + "'", (err, result) => {
                if (err) {
                    res.send("userprofile not found");
                } else {

                    res.send(result);
                }
            })
        }
        //      res.send(req.headers)

        const deleteUser = (req, res) => {
            const userId = req.params.userId
            connection.query("delete from users where userId ='" + userId + "'", (err, rows) => {
                if (!err)
                    res.send('Deleted successfully.');
                else
                    console.log(err);
            })
        }
const registerClass=(req,res)=>{
    const data={classId:req.body.classId,className:req.body.className,branch:req.body.branch,userId:`${req.user.id}`}
    connection.query('insert into class set ?',data, (err, rows) => {
        if(err){
            res.send("class not added because duplicate classIds are not allowed");
        }else
        {
            //console.log(rows);
            res.send("class added");
        }
    })
}
const classes=(req,res)=>{
    connection.query('select * from class', (err, rows) => {
        if (err) {
            res.send("class not found");
        }
        else {
            res.send(rows);
        }
    })
}
    const deleteClass=(req,res)=>{
        const classId=req.params.classId;
        connection.query("delete from class where classId ='" + classId + "'", (err, rows) => {
            if (err){
                res.send(err);
            }
            else{
            res.send("class deleted");
            }
        })

    }
 const classInfo=(req,res)=>{
connection.query("select * from class where userId='"+`${req.user.id}`+"'",(err,result)=>{
if(err){
    res.send(err)
}
else{
    res.send(result);
}
})
    }
    

  module.exports = {
            users,
            register,
            login,
            userinfo,
            deleteUser,
            registerClass,
            classes,
            deleteClass,
            classInfo
        }
