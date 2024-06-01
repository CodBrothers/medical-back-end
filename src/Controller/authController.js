const authService = require('../Services/login');

const login = (req, res) => {
  const { email, password } = req.body;

  const user = authService.authenticateUser(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = authService.generateToken(user);
  res.json({ token });
};

const addUserData = (req, res) => {
  const data = req.body;

  const user = authService.addUserData(data);
  if (!user) {
    return res.status(401).json({ message: 'Invalid Data' });
  }

  // const token = authService.generateToken(user);
  // res.json({ token });
};

module.exports = { login, addUserData };
