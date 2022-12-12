const db = require("../models");
const Parking = db.parkings;
const Op = db.Sequelize.Op;

// Create and Save a new Parking
exports.create = (req, res) => {
  // Validate request
  if (!req.body.address) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Parking
  const obj = {
    parkingPlaces: req.body.parkingPlaces,
    freePlaces: req.body.freePlaces,
    address: req.body.address,
  };

  // Save Parking in the database
  Parking.create(obj)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Parking.",
      });
    });
};

// Retrieve all Parking from the database.
exports.findAll = (req, res) => {
  const address = req.query.address;
  var condition = address ? { address: { [Op.like]: `%${address}%` } } : null;

  Parking.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Parkings.",
      });
    });
};

// Find a single Parking with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Parking.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Parking with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Parking with id=" + id,
      });
    });
};

// Update a Parking by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Parking.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Parking was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Parking with id=${id}. Maybe Parking was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Parking with id=" + id,
      });
    });
};

// Delete a Parking with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Parking.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Parking was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Parking with id=${id}. Maybe Parking was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Parking with id=" + id,
      });
    });
};

// Delete all Parking from the database.
exports.deleteAll = (req, res) => {
  Parking.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Parkings were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Parkings.",
      });
    });
};
