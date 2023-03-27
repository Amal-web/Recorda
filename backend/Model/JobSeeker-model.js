const mongoose = require("mongoose");

const jobSeekerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  education: [{ type: String }],
});
const JobSeeker = mongoose.model("JobSeeker", jobSeekerSchema);
module.exports = JobSeeker;

// type:mongoose.Types.ObjectId,
// ref:"Education",
