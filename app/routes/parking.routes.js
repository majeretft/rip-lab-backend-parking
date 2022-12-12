module.exports = (app) => {
  const controller = require("../controllers/parking.controller");

  const router = require("express").Router();

  // Create a new Parking
  router.post("/", controller.create);

  // Retrieve all Parkings
  router.get("/", controller.findAll);

  // Retrieve a single Parking with id
  router.get("/:id", controller.findOne);

  // Update a Parking with id
  router.put("/:id", controller.update);

  // Delete a Parking with id
  router.delete("/:id", controller.delete);

  // Delete all Parkings
  router.delete("/", controller.deleteAll);

  app.use("/api/parkings", router);
};
