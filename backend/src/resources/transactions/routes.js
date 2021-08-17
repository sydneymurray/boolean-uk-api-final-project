const express = require("express")  
const transactionsRouter = express.Router()

const transactionsController = require("./controllers")

transactionsRouter.post("/", transactionsController.createOne)
transactionsRouter.get("/", transactionsController.retrieveAll)
transactionsRouter.get("/:id", transactionsController.retrieveOne)
transactionsRouter.delete("/:id", transactionsController.deleteOne)
transactionsRouter.patch("/:id", transactionsController.updateOne)

module.exports = transactionsRouter


