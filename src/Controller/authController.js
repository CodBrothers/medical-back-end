const authService = require('../Services/login');

const login = (req, res) => {
  const { username, password } = req.body;

  const user = authService.authenticateUser(username, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = authService.generateToken(user);
  res.json({ token });
};

module.exports = { login };
