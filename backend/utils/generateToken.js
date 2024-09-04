import jwt from "jsonwebtoken";

const generateTokenandSetCookie = (userid,res) =>{
   const token =jwt.sign({userid},process.env.JWT_SECRET,{expiresIn:"15d"} );
   res.cookie("jwt", token,{
      maxAge: 1000 * 60 * 60 * 24 * 15,
      httpOnly: true, //prevent XSS attacks cross-site scripting attacks and cookie is not accessible by javascript
      samesite:"strict",
      secure:process.env.NODE_ENV !== "development"
   })
}

export default generateTokenandSetCookie;