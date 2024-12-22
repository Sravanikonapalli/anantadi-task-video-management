const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = function() {
  const token = jwt.sign({ email: this.email }, process.env.SECRET_KEY, { expiresIn: '1h' });
  return token;
};
const User = mongoose.model('User', userSchema);

module.exports = User;
