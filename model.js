const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Anvesh@1998',
    database: 'test'
    
})

    connection.connect(function(err){
        if(!err)
        console.log("database connected");
        else{
            console.log(err)
        }
        
    })
    
    module.exports=connection;