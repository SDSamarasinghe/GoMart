const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


//import routes
const feedbacksRoutes = require('./routes/feedbacks');
const complaintsRoutes = require('./routes/complaints');


//app middleware
app.use(bodyParser.json());
app.use(cors());


//route middleware
app.use(feedbacksRoutes);
app.use(complaintsRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://Feedback:12321@feedback.6qs9to1.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(()=>{
    console.log('DB Connected.');
})
.catch((err)=> console.log('DB Connection error',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});


// const express = require("express");
// const dotenv = require("dotenv");
// // const logger = require("pino")();
// const mongoose = require("mongoose");
// const cors = require("cors");
// // const expressSession = require("express-session");
// const app = express();

// dotenv.config();
// app.use(
//     cors({
//         origin: "http//localhost:3000",
//         credentials:true,
//     })
// );
// app.use(express.json());
// app.set("trust proxy",1);
// const sessSettings = expressSession({
//     path: "/",
//     secret: "oursecret",
//     resave: true,
//     saveUninitialized: true,
//     cookie: {
//         sameSite: false,
//         secure:false,
//         maxAge:360000,
//     },
// });

// //app settings
// app.use(sessSettings);
// const PORT = process.env.PORT || 8000;

// //mongoose
// mongoose.connect(process.env.DB_URL, {
//     useNewUrlParser: true,
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//     logger.info(" Mongodb connected successfully");
// });

// app.get("/", (req,res) => {
//     res.status(200).json({ messsage: "Server is running!" });
// });

// app.listen(PORT, () => {
//     logger.info(`Server is running on PORT: ${PORT}`);
//   });