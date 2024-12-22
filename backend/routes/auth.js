
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const isValidPassword = await user.comparePassword(req.body.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = user.generateToken();
  res.json({ token });
});
module.exports = router;

