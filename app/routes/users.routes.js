module.exports = (app) => {
  const controller = require("../controllers/users.controller.js");

  const router = require("express").Router();

  // Create a new User
  router.post("/", controller.create);

  // Retrieve all Users
  router.get("/", controller.findAll);

  // Retrieve a single User with id
  router.get("/:id", controller.findOne);

  // Update a User with id
  router.put("/:id", controller.update);

  // Delete a User with id
  router.delete("/:id", controller.delete);

  // Delete all Users
  router.delete("/", controller.deleteAll);

  app.use("/api/users", router);
};
