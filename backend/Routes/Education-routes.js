const express = require("express");
const { getEducation,addEducation } = require("../Controller/education-control");

console.log(typeof getEducation);
const educationRouter = express.Router();

educationRouter.get("/education", getEducation);
educationRouter.post("/education",addEducation)

module.exports = educationRouter;
