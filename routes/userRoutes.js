const express =require("express")
const router =express.Router()
const {setUser} = require('../controller/userController')
router.post('/', setUser)

module.exports = router;