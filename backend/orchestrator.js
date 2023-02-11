const extractIPs = require('./util/extractIPs')
const extractMACs = require('./util/extractMACs')

module.exports = class {
  
  ips
  onLineIPs
  macs
  onLineMACs
  computers

  static extractOnLineComputers() {
    this.onLineIPs = this.ips = extractIPs()
    this.onLineMACs = this.macs = extractMACs()
    this.computers = new Map()
    this.ips.forEach((ip, index) => computers.set(macs[index], ip))
  }

  static getComputersStatus() {
    Promise.allSettled(this.computers.forEach(computer => {
      console.log(computer)
    }))
  }
}