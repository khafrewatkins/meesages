// production environment keys

if (process.NODE_ENV === 'production') {
  // return production keys
  module.exports = require('./pord')

}else{
  // return development keys
  module.exports = require('./dev')
}

module.exports = {
  googleClientID: '345173441464-fi9cdlrpl0em6ih6ambpq6tkvko8cvsr.apps.googleusercontent.com',
  googleClientSecret: '7sH2_NG8Ur5zQJ1HkCsY0xSO',
  mongoURI: 'mongodb+srv://Baki:CloudPractice123@cluster0.pco6r.mongodb.net/gomessage?retryWrites=true&w=majority',
  cookieKey: 'oserigfphjgtioerhiougph5eiuoghpdkrjfdyghui45h9745rjiort',
};

