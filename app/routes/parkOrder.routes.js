module.exports = (app) => {
  const controller = require("../controllers/parkOrder.controller");

  const router = require("express").Router();

  // Create a new Order
  router.post("/", controller.create);

  // Retrieve all Orders
  router.get("/", controller.findAll);

  // Retrieve a single Order with id
  router.get("/:id", controller.findOne);

  // Update a Order with id
  router.put("/:id", controller.update);

  // Delete a Order with id
  router.delete("/:id", controller.delete);

  // Delete all Orders
  router.delete("/", controller.deleteAll);

  // Get possible statuses
  router.get("/info/statuses", controller.getStatuses);

  app.use("/api/orders", router);
};
