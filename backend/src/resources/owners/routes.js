const express = require("express")  
const ownersRouter = express.Router()

const ownersController = require("./controllers")

ownersRouter.post("/", ownersController.createOne)
ownersRouter.get("/", ownersController.retrieveAll)
ownersRouter.get("/search", ownersController.searchAll)
ownersRouter.get("/:id", ownersController.retrieveOne)
ownersRouter.delete("/:id", ownersController.deleteOne)
ownersRouter.patch("/:id", ownersController.updateOne)

module.exports = ownersRouter


