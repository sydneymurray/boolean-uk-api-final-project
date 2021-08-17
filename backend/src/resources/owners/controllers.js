let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let owner = {...req.body}
  prisma.owners.create({data: owner})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.owners.findMany({ 
    orderBy: {lastName: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.owners.findUnique({
    include:{Cars: true},
    where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.owners.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let owner = req.body
  prisma.owners.update({where: {id}, data: owner})
    .then(dbResponse => res.json(dbResponse))
}

module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne}


