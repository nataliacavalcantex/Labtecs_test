import User from '../models/User'

class UserController{
  async store(req,res){
    const userExist= await User.findOne({
      where:{
        cpf:req.body.cpf
      }
    })
    if(userExist){
      return res.status(401).json({message:"Opss! This user's already registered"})
    }
    const user= await User.create(req.body)
    return res.status(200).json({message:"User successfully registered!"})
  }
  async oi(req,res){
    return res.json({message:"oi"})
  }

}

export default new UserController()
