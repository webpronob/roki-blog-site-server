const express =require("express")
const router =express.Router()
const {setPost,getPost,getPostDetail,getUserPost} = require('../controller/postController')
const {
    verifyToken,
  } = require("./verifyToken");
router.get('/', getPost)
router.get('/:id',verifyToken, getPostDetail)
router.get('/blog/me',verifyToken, getUserPost)
router.post('/',verifyToken, setPost)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;