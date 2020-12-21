const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/tutorial.routes");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({
  extended: true
}));
initRoutes(app);

// db.sequelize.sync();
db.sequelize.sync({
  force: true
}).then(() => {
  console.log("Dropped and re-synced database");
});

let port = 3000;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
