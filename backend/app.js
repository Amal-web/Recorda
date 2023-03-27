require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./Utils/ConnectDB");
const educationRouter = require("./Routes/Education-routes");
const jobSeekerRouter =require("./Routes/JobSeeker-routes")

const app = express();

app.use(express.json());
app.use(cors());

////jobseeker////
console.log(typeof(jobSeekerRouter),"@@@@@@@")
app.use("/user/",jobSeekerRouter)


app.use("/user/profile/", educationRouter);

connectDB();

module.exports = app;
