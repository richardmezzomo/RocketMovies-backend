const { Router } = require("express")

const usersRouter = require("./users.routes")
const movieNotesRoutes = require("./notes.routes")


const routes = Router()

routes.use("/users", usersRouter)
routes.use("/notes", movieNotesRoutes)

module.exports = routes 