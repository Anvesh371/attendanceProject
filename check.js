const validator=require('email-validator');
if(validator.validate("testgmail.com"))
{
    console.log("true")
}
else
{
    console.log("false")
}