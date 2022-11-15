const express = require("express");
const cors = require("cors");

const db = require("./app/models");

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and re-sync db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// require routes
require("./app/routes/movie.routes")(app);
require("./app/routes/seat.routes")(app);
require("./app/routes/order.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, "localhost", () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("=======================");
  console.log("running at http://" + host + ":" + port);
  console.log("=======================");
});
