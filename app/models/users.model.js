module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    car: {
      type: Sequelize.STRING,
    },
  });

  return Model;
};
