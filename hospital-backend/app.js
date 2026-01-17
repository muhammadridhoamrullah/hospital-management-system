const express = require("express");
const { router } = require("./routes");
const app = express();
const port = 3000;
const cors = require("cors");
const { logger } = require("./middlewares/logger");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
