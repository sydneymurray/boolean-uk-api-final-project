let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let garage = {...req.body}
  prisma.garage.create({data: garage})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.garage.findMany({ 
    orderBy: {name: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.garage.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.garage.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let garage = req.body
  prisma.garage.update({where: {id}, data: garage})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


