function authorization(allowedRoles) {
  return (req, res, next) => {
    try {
      if (!allowedRoles.includes(req.user.role)) {
        throw { name: "FORBIDDEN" };
      }

      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = {
  authorization,
};

// FORBIDDEN
