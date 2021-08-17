let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let leadMechanic = {...req.body}
  prisma.leadMechanic.create({data: leadMechanic})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.leadMechanic.findMany({ 
    orderBy: {lastName: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.leadMechanic.findUnique({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.leadMechanic.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let leadMechanic = req.body
  prisma.leadMechanic.update({where: {id}, data: leadMechanic})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


