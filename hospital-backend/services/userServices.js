const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");
const { User } = require("../models/index");

class UserServices {
  static async login({ email, password }) {
    // Cek validasi input
    if (!email || !password || !email.includes("@")) {
      throw { name: "USER_LOGIN_INVALID_INPUT" };
    }

    // Cari user berdasarkan email
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw { name: "USER_LOGIN_EMAIL_PASS_INVALID" };
    }

    // Cek password, apakah sama dengan yang di database
    const checkPassword = await comparePassword(password, user.password);

    if (!checkPassword) {
      throw { name: "USER_LOGIN_EMAIL_PASS_INVALID" };
    }

    // Buat access_token
    const access_token = signToken({ id: user.id });

    return { access_token };
  }
}

module.exports = {
  UserServices,
};

// USER_LOGIN_INVALID_INPUT
// USER_LOGIN_EMAIL_PASS_INVALID
