const mongoose=require("mongoose")
const JobSeeker=require("../Model/JobSeeker-model")

const signup=async(req,res)=>{
    console.log(req.body)

    const {name,education}=req.body
    if(!name || name.trim()===""){
        return res.status(422).json({message:"invalid inputs"})
    }
    let existing;
    try {
        existing=await JobSeeker.findOne({name})
    } catch (error) {
        console.log(error)
        
    }
    if (existing) {
        return res.status(400).json({ message: "User Already exists" });
      }

      const jobSeeker=new JobSeeker({
        name,
        education:[],
      })
      try {
        await jobSeeker.save()
      } catch (error) {
        console.log(error)
        
      }
      return res.status(200).json({jobSeeker})
}
const getUsers=async(req,res)=>{
  let users;
  
  try {
    users=await JobSeeker.find();
    console.log(users)
    
  } catch (error) {
    console.log(error)
  }
  res.status(201).json({message:"Education",users});
}

module.exports= {signup,getUsers}