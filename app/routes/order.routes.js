module.exports = (app) => {
  const controller = require("../controllers/order.controller.js");
  const authJwt = require("../middleware/authJwt");

  const router = require("express").Router();

  // Create a new Seat
  router.post("/", [authJwt.verifyToken, authJwt.isAdmin], controller.create);

  // Retrieve all Seats
  router.get("/", controller.findAll);

  // Retrieve a single Seat with id
  router.get("/:id", controller.findOne);

  // Update a Seat with id
  router.put("/:id", [authJwt.verifyToken, authJwt.isAdmin], controller.update);

  // Delete a Seat with id
  router.delete(
    "/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.delete
  );

  // Delete all Seats
  router.delete(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteAll
  );

  // Get possible statuses
  router.get("/info/statuses", controller.getStatuses);

  app.use("/api/orders", router);
};
