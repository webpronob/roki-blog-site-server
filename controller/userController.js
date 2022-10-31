const User = require("../modal/userModal");
const jwt =require('jsonwebtoken')
const setUser =async(req, res) => {
    console.log(req.body)
    const email =req.body;
    const exist = await User.findOne(email)
    if(exist){
        // const accessToken =jwt.sign({
        //     email:email,
        //     // admil:savedPost.admin
        //   },process.env.JWT_SEC,
        //   {expiresIn:"3d"}
        //   );
        const token =jwt.sign({ email:exist.email,admin:exist.admin }, "shhh", { expiresIn: '3d' })
        res.status(400).json({exist,token})
    }
    else{

        const newPost = new User(email);
    try {
      const savedPost = await newPost.save();
      const token =jwt.sign({ email: savedPost.email,admin:savedPost.admin }, "shhh", { expiresIn: '3d' })
      res.status(200).json({savedPost,token});
    } catch (err) {
      res.status(403).json(err);
      console.log(err)
    }

    }
    
  };

  module.exports ={
    setUser
  }