const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express ();

//import routes
const orderRoutes = require('./routes/order');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use("/order",orderRoutes);


const PORT = 8009;

const DB_URL = 'mongodb+srv://GoMart:GoMart1234@gomart.pcvnduz.mongodb.net/GoMart?retryWrites=true&w=majority';

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(()=>{
    console.log('DB Connected.');
})
.catch((err)=> console.log('DB Connection error',err));

