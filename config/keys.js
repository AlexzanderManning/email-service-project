// keys.js Figure out what set of credentials to return

if(process.env.NODE_ENV === 'production'){
  //we are in production - return the prod set of keys
  module.exports = require('./prod');
}else{
  // we are in dev - return the dev set of keys
  module.exports = require('./dev');
}
