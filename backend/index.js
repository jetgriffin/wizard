require('./server')

setInterval(() => {
  orchestrator.extractOnLineComputers()
}, 10000)