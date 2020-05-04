const jwt = require('jsonwebtoken');

const SECRET = 'SomePasswordSecret'; // this should be in an env file

function getUserFromToken(token) {
  return jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return 'You need to login first';
    }
    return decoded;
  });
}

function createToken(user) {
  return jwt.sign(user, SECRET, {
    expiresIn: '10000h',
  });
}

module.exports = {
  createToken,
  getUserFromToken,
};
