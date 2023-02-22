//create express server
const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
//connect to mongodb
const mongoose = require('mongoose');
const mongoUrl = "mongodb+srv://Demo:Pass_demo1@cluster0.yizd48m.mongodb.net/?retryWrites=true&w=majority";

//connect mongodb using mongoose
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => { console.log("connected to Cluster0"); }).catch((e) => console.log(e));

require('./userdetails')
const user = mongoose.model('UserInfo')

//create get server
app.get('/', (req, res) => {
      user.find({}).then((data) => {
        res.send(data)
      }).catch(err=>{
        if(err) throw err;
      })
    });

//create post server
app.post("/register", async (req, res) => {
    const { name, email, password, dob } = req.body;
    try {
        await user.create({
            name,
            email,
            password,
            dob,
        });
        res.send({ status: "ok" })
    } catch (error) {
        res.send({ status: "error" })
    }
    console.log(req.body);

})

//start the server
app.listen(5000, () => {
    console.log('Server is running on port: 5000');
})
