module.exports = (app) => {
  const controller = require("../controllers/movie.controller.js");

  const router = require("express").Router();

  // Create a new Movie
  router.post("/", controller.create);

  // Retrieve all Movies
  router.get("/", controller.findAll);

  // Retrieve Movies by year
  router.get("/year/:year", controller.findAllByYear);

  // Retrieve a single Movie with id
  router.get("/:id", controller.findOne);

  // Update a Movie with id
  router.put("/:id", controller.update);

  // Delete a Movie with id
  router.delete("/:id", controller.delete);

  // Delete all Movies
  router.delete("/", controller.deleteAll);

  app.use("/api/movies", router);
};
