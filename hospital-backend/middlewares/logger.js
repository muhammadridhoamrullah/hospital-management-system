function logger(req, res, next) {
  let timesamp = new Date().toISOString();
  let method = req.method;
  let url = req.url;

  console.log(`[${timesamp}] ${method} ${url}`);
  next();
}

module.exports = {
  logger,
};
