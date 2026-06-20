const router = require("express").Router()
const userController = require("../controller/usercontroller")

router.get("/users",userController.getUsers)
module.exports = router
