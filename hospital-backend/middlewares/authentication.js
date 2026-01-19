const { verifyToken } = require("../helpers/jwt");
const { User } = require("../models/index");

async function authentication(req, res, next) {
  try {
    // Cek di header authorization
    const { authorization } = req.headers;

    if (!authorization) {
      throw { name: "UNAUTHORIZED" };
    }

    // Ambil tokennya saja
    const token = authorization.split(" ")[1];

    // Verifikasi token
    const payload = verifyToken(token);

    // Cari user berdasarkan payload.id
    const user = await User.findByPk(payload.id);

    if (!user) {
      throw { name: "UNAUTHORIZED" };
    }

    // Jika semua sudah benar, simpan usernya di req.user
    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  authentication,
};

// UNAUTHORIZED
