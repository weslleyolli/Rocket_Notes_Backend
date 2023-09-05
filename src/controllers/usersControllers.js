const AppError = require("../utils/AppError")

const sqliteConnection = require("../database/sqlite")

class usersControllers {
    async create(request, response) {
        const { name, email, password } = request.body

        const database = await sqliteConnection()
        const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExist) {
            throw new AppError("este email já esta em uso.")
        }

        await database.run(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
            [ name, email, password ]
        );

        return response.status(201).json()
    }
}

module.exports = usersControllers