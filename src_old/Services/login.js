const jwt = require('jsonwebtoken');
const userRepository = require('../Repository/index');

const SECRET_KEY = 'your_secret_key';

const authenticateUser = async(email, password) => {
  const user = await userRepository.findUserByUsername(email, password);
  if (!user) {
    return null;
  } else {
    const token = generateToken(user);
    return { user, token };
  }
};

const registerUser = async (userData) => {
  try {
    const user = await userRepository.addUserByUsername(userData);
    return user;
  } catch (error) {
    if (error.code === 11000) {
      error.message = 'Duplicate email error: A user with this email already exists.';
      error.statusCode = 409; // Conflict
    } else {
      error.message = 'Error creating user';
      error.statusCode = 500; // Internal Server Error
    }
    throw error;
  }
};



const generateToken = (user) => {
  return jwt.sign({ userId: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
};

module.exports = { authenticateUser, generateToken, registerUser };
