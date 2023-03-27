const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  skill: [{ type: String }],
});

const Skill = mongoose.model("Skill", skillSchema);
module.exports = Skill;
