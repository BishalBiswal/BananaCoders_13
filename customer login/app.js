const express= require("express");
const RegisteredUsers = require("./models/RegisteredUser");
const path= require("path");
const hbs = require("hbs");
const bcrypt= require("bcryptjs")
const users=require("./models/RegisteredUser");
const app=express();
require("./db/conn");


const port=process.env.PORT || 80;

//------------SERVE STATIC FILES-----------

app.use('/static',express.static('static'))
app.use(express.urlencoded({ extended: true }))

//---------SET VIEWS DIRECTORY-------------

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views'))

//---------ENDPOINTS---------------------


app.get('/',(req,res)=>{
    res.status(200).render('login.hbs');
})
app.get('/register', function (req, res) {
    res.status(200).render('register.hbs');
     });

app.post('/register', async (req, res) => {
        try {
            const pass = req.body.password;
            const cpass = req.body.cpassword;
            if (pass == cpass) {
                const registerUser = new RegisteredUsers({
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    cpassword: req.body.cpassword
                });
                console.log("cleared pass matching");
                const registered = await registerUser.save();
                res.status(200).render('home.hbs');
            } else {
                res.send("Password not matching");
            }
        } catch (error) {
            res.status(400).send(error);
            console.log(error);
        }
    
    })
    app.post('/login', async (req, res) => {
        try {
            const email=req.body.email;
            const password=req.body.password;
            const user=await RegisteredUsers.findOne({email:email});
            if(user.password==password){
            res.status(200).render('home.hbs');}else{
                res.send('Invalid login details');
            }
        } catch (error) {
            res.status(400).send(error);
            console.log(error);
        }
    
    })
//----------------------SERVER----------
app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
})