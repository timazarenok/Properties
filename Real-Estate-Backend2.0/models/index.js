const Sequelize = require("sequelize");
const sequelize = new Sequelize("hotels", "newuser", "0", {
  dialect: "mysql",
  host: "localhost"
});

const Inquiry = require("./inquiry.model")(Sequelize, sequelize);
const Property = require("./property.model")(Sequelize, sequelize);
const User = require("./user.model")(Sequelize, sequelize);

module.exports.Inquiry = Inquiry;
module.exports.Property = Property;
module.exports.User = User;
module.exports.sequelize = sequelize;