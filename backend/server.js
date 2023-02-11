const fastify = require('fastify')({ logger: true })
const Orchestrator = require('./orchestrator')


Orchestrator.extractOnLineComputers()
setInterval(() => { Orchestrator.extractOnLineComputers() }, 100000);

fastify.get('/', async (request, reply) => {
  const computers = Orchestrator.getComputersStatus();
  return JSON.stringify(computers)
})

const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()