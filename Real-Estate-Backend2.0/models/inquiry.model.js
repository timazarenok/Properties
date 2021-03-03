module.exports = (Sequelize, sequelize) => 
  sequelize.define("inquiry", {
    firstname: {
      type: Sequelize.STRING,
      // required: true
    },
    lastname: {
      type: Sequelize.STRING,
      // required: true
    },
    email: {
      type: Sequelize.STRING,
      // required: true
    },
    subject: {
      type: Sequelize.STRING,
      // required: true
    },
    message: {
      type: Sequelize.STRING,
      // required: true
    }
  })