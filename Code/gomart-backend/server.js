const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
const cors = require("cors");
const expressSession = require("express-session");

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
  path: "/",
  secret: "oursecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 360000,
  },
});

//app settings
app.use(sessSettings);
const PORT = process.env.PORT || 8000;

//mongoose
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  logger.info(" Mongodb connected successfully");
});

app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Server is running!" });
});

<<<<<<< HEAD
=======
app.use("/api/Products", require("./routes/productRoutes"));
app.use("/api/Feedbacks", require("./routes/feedbackRoutes"));
app.use("/api/Complaints", require("./routes/ComplaintsRoutes"));

>>>>>>> 4d67faeb05b57a336cca2c1d190b670b03a2b122
app.listen(PORT, () => {
  logger.info(`Server is running on PORT: ${PORT}`);
});
