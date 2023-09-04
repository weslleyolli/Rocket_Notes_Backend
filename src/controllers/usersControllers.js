const AppError = require("../utils/AppError")

class usersControllers {
    create(request, response) {
        const { name, email, password } = request.body

        if(!name) {
            throw new AppError("O nome é obrigatorio!")
        }

        response.json({ name, email, password })
    }
}

module.exports = usersControllers