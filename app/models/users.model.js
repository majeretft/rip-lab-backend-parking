module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    car: {
      type: Sequelize.STRING,
    },
  });

  return Model;
};
