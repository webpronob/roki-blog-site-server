const Post = require("../modal/postModal");

const setPost =async(req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(401).json(err);
      console.log(err)
    }
  };

  const getPost = async (req,res) => {
    const posts =await Post.find()
    return res.status(200).json(posts)
}



  const getUserPost = async (req,res) => {
   const userBlog =req.query.user;
   Post.find({ email: userBlog}, function (err, docs) {
    if (err){
      res.status(401).json(err);
    }
    else{
      res.status(200).json(docs);
    }
});
    
}





  const getPostDetail = async (req,res) => {
 const postId =req.params.id;
 try{
    Post.findById(postId).then((blog) =>{
        return res.send(blog)
        
    })
 } catch(err) {
    res.status(403).json(err);
 }
}

  module.exports ={
    setPost,
    getPost,
    getPostDetail,
    getUserPost
  }