module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    name: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    genres: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    year: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
    },
  });

  return Movie;
};
