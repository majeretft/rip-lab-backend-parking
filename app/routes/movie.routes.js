module.exports = (app) => {
  const controller = require("../controllers/movie.controller.js");

  var router = require("express").Router();

  // Create a new Movie
  router.post("/", controller.create);

  // Retrieve all Movies
  router.get("/", controller.findAll);

  // Retrieve all published Movies
  router.get("/year/:year", controller.findAllByYear);

  // Retrieve a single Tutorial with id
  router.get("/:id", controller.findOne);

  // Update a Tutorial with id
  router.put("/:id", controller.update);

  // Delete a Tutorial with id
  router.delete("/:id", controller.delete);

  // Delete all Tutorials
  router.delete("/", controller.deleteAll);

  app.use("/api/movies", router);
};
