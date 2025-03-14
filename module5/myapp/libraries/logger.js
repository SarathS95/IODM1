class Logger {
  constructor (refferrer, id) {
    this.id = id
    this.refferrer = refferrer
  }
  #log =(value) => {
    console.log(`[logger :${this.refferrer}r]:${this.id}`)
  }
}
module.exports = Logger