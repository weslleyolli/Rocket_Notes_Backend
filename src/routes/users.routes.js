const { Router } = require("express")

const UsersControllers = require("../controllers/usersControllers")
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const usersRoutes = Router()


const usersControllers = new UsersControllers()

usersRoutes.post("/", usersControllers.create)
usersRoutes.put("/", ensureAuthenticated, usersControllers.update)
usersRoutes.delete("/:id", usersControllers.delete)

module.exports = usersRoutes