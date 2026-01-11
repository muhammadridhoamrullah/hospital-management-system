const bcrypt = require("bcryptjs");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashingPassword = await bcrypt.hash(password, salt);
  return hashingPassword;
}

async function comparePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

module.exports = {
  hashPassword,
  comparePassword,
};
