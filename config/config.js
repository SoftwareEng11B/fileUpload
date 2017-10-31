module.exports = {
  dev: {
    port: process.env.port || 3000,
    db  : process.env.DB_LINK || 'mongodb://user:password@ds113825.mlab.com:13825/image'
  },
  prod: {
    //TODO !
  }
}
