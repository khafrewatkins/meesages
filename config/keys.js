// production environment keys

if (process.NODE_ENV === 'production') {
  // return production keys
  module.exports = require('./pord')

}else{
  // return development keys
  module.exports = require('./dev')
}

