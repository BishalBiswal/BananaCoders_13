const express = require('express')
const app = express();
const port = 1377;
const cors = require('cors');
const RegisteredUsers = require("./models/Register");
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/kraftloom');

app.post('/api/registers', (req, res) => {
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
app.post('/api/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await RegisteredUsers.findOne({ email: email });
        if (user.password == password) {
            res.status(200).render('home.hbs');
        } else {
            res.send('Invalid login details');
        }
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }

})

//-------------------stats---------------


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})