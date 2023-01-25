'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (req, reply) {
    const database = fastify.client.db("baedal")
    const result = await database.collection("restaurants").find().toArray()
    reply 
    .code(200)
    .header('Content-type','application/json')
    .send(result)
  })
}