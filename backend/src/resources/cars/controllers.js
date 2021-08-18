let prisma = require("../../utilities/connectDB")

function createOne(req, res){
  let car = {...req.body, manufactureDate: new Date(req.body.manufactureDate), MOT: new Date(req.body.MOT)}
  prisma.cars.create({data: car})
    .then(dbResponse => res.json(dbResponse))
  }

function retrieveAll(req, res){
  prisma.cars.findMany({ 
    orderBy: {manufacturer: "asc"}})
    .then(dbResponse => res.json(dbResponse))
}

function retrieveOne(req, res){
  let id = Number(req.params.id)
  if (id - id !== 0) res.json({msg:"Page Not Found"})
  prisma.cars.findUnique({
    include: {Owners: true, LeadMechanics: true, Garages: true},
    where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function deleteOne(req, res){
  let id = Number(req.params.id)
  prisma.cars.delete({where: {id}})
    .then(dbResponse => res.json(dbResponse))
}

function updateOne(req, res){
  let id = Number(req.params.id)
  let car = {...req.body, manufactureDate: new Date(req.body.manufactureDate), MOT: new Date(req.body.MOT)}
  prisma.cars.update({where: {id}, data: car})
    .then(dbResponse => res.json(dbResponse))
}

function searchAll(req, res){
  let criteria = req.query.criteria
   prisma.cars.findMany({
    where: {OR:[ 
      {manufacturer: {contains: criteria, mode: 'insensitive'}}, 
	    {model: {contains: criteria, mode: 'insensitive'}}, 
	    {type: {contains: criteria, mode: 'insensitive'}}]}})
    .then(dbResponse => res.json(dbResponse))
}
module.exports = {createOne, retrieveAll, retrieveOne, deleteOne, updateOne, searchAll}


