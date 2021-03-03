module.exports = (Sequelize, sequelize) => 
  sequelize.define("property", {
    name: {
      type: Sequelize.STRING,
      // required: true
    },
    description: {
      type: Sequelize.STRING,
      // required: true
    },
    address: {
      type: Sequelize.STRING,
      // required: true
    },
    price: {
      type: Sequelize.INTEGER,
      // required: true
    },
    square: {
      type: Sequelize.STRING,
      // required: true
    },
    number_of_bedrooms: {
      type: Sequelize.INTEGER,
      // required: true
    },
    number_of_bathrooms: {
      type: Sequelize.INTEGER,
      // required: true
    },
    number_of_car_parking: {
      type: Sequelize.INTEGER,
      // required: true
    }
  })