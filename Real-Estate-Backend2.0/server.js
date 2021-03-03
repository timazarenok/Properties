const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const inquiries = require("./routes/api/inquiries");
const properties = require("./routes/api/properties");

var { sequelize } = require("./models/index");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// Connect to MongoDB
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'newuser',
  password: '0',
  database: 'hotels'
});


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api", inquiries);
app.use("/api/properties", properties)

const port = process.env.PORT || 5000;

sequelize.sync({ force: false }).then( () => (
  app.listen(port, () => console.log(`Server up and running on port ${port} !`))
))
