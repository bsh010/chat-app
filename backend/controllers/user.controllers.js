import { User } from "../models/user.models.js";

export const getUsersForSidebar = async (req,res)=>{
   try {
      const loggedInUSerId = req.user._id;

      const filteredUsers = await User.find({_id:{$ne: loggedInUSerId}}).select("-password");

      res.status(200).json(filteredUsers);

   } catch (error) {
      console.error("Error in getUsersForSidebar controller", error.message);
      res.status(500).json({error:"Internal server error"}); 
   }
}