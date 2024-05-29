const jwt = require('jsonwebtoken');
const userRepository = require('../Repository/index');

const SECRET_KEY = 'your_secret_key';

const authenticateUser = (username, password) => {
  const user = userRepository.findUserByUsername(username);
  if (user && user.password === password) {
    return user;
  }
  return null;
};

const generateToken = (user) => {
  return jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
};

module.exports = { authenticateUser, generateToken };
