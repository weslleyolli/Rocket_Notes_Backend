const { Router } = require("express")

const UsersControllers = require("../controllers/usersControllers")

const usersRoutes = Router()


const usersControllers = new UsersControllers()

usersRoutes.post("/", usersControllers.create)

module.exports = usersRoutes