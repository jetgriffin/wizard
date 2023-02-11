const { exec } = require('child_process')

module.exports = function extractIPs() {
  const ips = []
  for (let i1 = 0; i1 <= 1; i1++) {
    for (let i2 = 0; i2 <= 1; i2++) {
      const ip = `192.168.${i1}.${i2}`
      exec(`ping /n 1 ${ip}`, (err, stdout, stderr) => {
        if (err) { console.log('err'); return }
        if (stderr) { console.log('stderr'); return }
        console.log(stdout)
      })
    }
  }
  return ips
}