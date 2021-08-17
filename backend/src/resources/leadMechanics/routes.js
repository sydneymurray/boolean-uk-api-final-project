const express = require("express")  
const leadMecahanicsRouter = express.Router()

const leadMecahanicsController = require("./controllers")

leadMecahanicsRouter.post("/", leadMecahanicsController.createOne)
leadMecahanicsRouter.get("/", leadMecahanicsController.retrieveAll)
leadMecahanicsRouter.get("/:id", leadMecahanicsController.retrieveOne)
leadMecahanicsRouter.delete("/:id", leadMecahanicsController.deleteOne)
leadMecahanicsRouter.patch("/:id", leadMecahanicsController.updateOne)

module.exports = leadMecahanicsRouter


