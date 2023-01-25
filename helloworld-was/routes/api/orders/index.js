'use strict'

module.exports = async function (fastify, opts) {
  
    fastify.get('/', async function (req, reply) {
    const database = fastify.mongo.client.db("baedal")
    const result = await database.collection("orders").find().toArray()
    
    reply 
    .code(200)
    .header('Content-type','application/json')
    .send(result)
  })
  fastify.get('/:_id', async function (req, reply) {
    const database = fastify.mongo.client.db("baedal")
    const ObjectID = require('mongodb')
    const result = await database.collection("orders").find({_id: new ObjectID(req.params._id)}).toArray()
    
    reply 
    .code(200)
    .header('Content-type','application/json')
    .send(result)
  })
}