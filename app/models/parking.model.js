module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("parking", {
    parkingPlaces: {
      type: Sequelize.INTEGER,
    },
    freePlaces: {
      type: Sequelize.INTEGER,
    },
    address: {
      type: Sequelize.STRING,
    },
  });

  return Model;
};
