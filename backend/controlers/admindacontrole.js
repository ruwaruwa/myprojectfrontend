const adminModel = require('../models/Adminmodel')
// register model

const RegisterAdmin = async(req,res) => {
    const newAdmin =  adminModel(req.body)
    const saveAdmin = await newAdmin.save()

    if (saveAdmin){
      res.send(newAdmin)
    }else{
      res.send({error:"error"})
    }
    
}
// finding existing user in the database
const loginAdmin = async(req, res) => {
  const AdminData = await adminModel.findOne({
    username: req.body.username,
    password: req.body.password
  })
  if(AdminData){  
    res.send(AdminData)
}else{
  res.send({error: "Not Found"})
}
}
//get all users
const getAllusers = async (req, res) => {
  try {
    const getAllusers= await adminModel.find()
    if(getAllusers){
      res.send(getAllusers)
    }
  } catch (error) {
    res.send(error)
  }
}


module.exports = {RegisterAdmin, loginAdmin,getAllusers}
