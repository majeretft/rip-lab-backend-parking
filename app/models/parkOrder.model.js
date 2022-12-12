module.exports = (sequelize, Sequelize, Movies, Seats) => {
  const Model = sequelize.define("order", {
    status: {
      type: Sequelize.INTEGER,
    },
    movie_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: Movies,

        // This is the column name of the referenced model
        key: "id",
      },
    },
    seat_id: {
      type: Sequelize.INTEGER,
      references: {
        // This is a reference to another model
        model: Seats,

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
