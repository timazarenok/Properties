const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const passport = require("passport");

const users = require("./routes/api/users");
const inquiries = require("./routes/api/inquiries");
const properties = require("./routes/api/properties");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

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

const port = process.env.PORT || 5000;

module.exports = app;
