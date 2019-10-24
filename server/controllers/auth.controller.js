const jwt = require('jsonwebtoken');
const config = require('../config/config');


module.exports = {
  generateToken
}


function generateToken(user) {
  console.log(user);
  const payload = JSON.stringify(user);
  console.log('payload:' + payload);
  return jwt.sign(payload, config.jwtSecret);
}
