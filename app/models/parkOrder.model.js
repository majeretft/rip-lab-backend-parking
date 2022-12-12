module.exports = (sequelize, Sequelize, Parkings, Users) => {
  const Model = sequelize.define("parkorder", {
    status: {
      type: Sequelize.INTEGER,
    },
    parking_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: Parkings,

        // This is the column name of the referenced model
        key: "id",
      },
    },
    user_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: Users,

        // This is the column name of the referenced model
        key: "id",
      },
    },
  });

  Model.statusEnum = [
    { val: 1, name: "В корзине" },
    { val: 2, name: "Оплачен" },
  ];

  return Model;
};
