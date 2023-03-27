const mongoose = require("mongoose");
const JobSeeker = require("../Model/JobSeeker-model");
const Education = require("../Model/Education-model");

const getEducation = async (req, res) => {
  let educations;
  try {
    educations=await Education.find();
    console.log(education)
    
  } catch (error) {
    console.log(error)
  }
  res.status(201).json({message:"Education",educations});
};
const addEducation = async (req, res) => {
  const { college, degree, graduated, graduationYear, id } = req.body;
  console.log(req.body)


  let existingUser;
  try {
    existingUser=await JobSeeker.findById(id)
    console.log("@user", existingUser);
  } catch (error) {
    console.log(error);
  }
  if (!existingUser) {
    return res.status(400).json({ message: "Unable to find the user" });
  }
  const edu = new Education({
    college,
    graduated,
    graduationYear,
    degree,
  });
  try {
    console.log(edu, "@edu");
    const session = await mongoose.startSession();
    session.startTransaction();
    await edu.save({ session });
    existingUser.education.push(edu);
    await existingUser.save({ session });
    session.commitTransaction();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }

  return res.status(200).json({ message: "education added" });
};

module.exports = { getEducation, addEducation };
