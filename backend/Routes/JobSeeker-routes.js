const express = require("express");
const { signup ,getUsers} = require("../Controller/Jobseeker-control");

const jobSeekerRouter = express.Router();

jobSeekerRouter.post("/jobseeker", signup);
jobSeekerRouter.get("/jobseeker",getUsers)

module.exports = jobSeekerRouter;
