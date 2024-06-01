const jwt = require('jsonwebtoken');
const userRepository = require('../Repository/index');

const SECRET_KEY = 'your_secret_key';

const authenticateUser = async(email, password) => {
  const user = await userRepository.findUserByUsername(email);
  if (user && user.password === password) {
    return user;
  }
  return null;
};

const addUserData = async(data) => {
  const user = await userRepository.addUserByUsername(data);
  if (!user) {
    return "Data Not Stored";
  }
  return "Data Stored";
};

const generateToken = (user) => {
  return jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
};

module.exports = { authenticateUser, generateToken, addUserData };
