const express = require("express")  
const garagesRouter = express.Router()

const garagesController = require("./controllers")

console.log("Router")

garagesRouter.post("/", garagesController.createOne)
garagesRouter.get("/", garagesController.retrieveAll)
garagesRouter.get("/:id", garagesController.retrieveOne)
garagesRouter.delete("/:id", garagesController.deleteOne)
garagesRouter.patch("/:id", garagesController.updateOne)

module.exports = garagesRouter


