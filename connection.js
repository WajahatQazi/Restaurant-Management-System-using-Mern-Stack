const mongoose = require("mongoose");
require("dotenv").config();
const connectionParams = {
  useNewUrlParser: true,
  //useCreateIndex: true,
  useUnifiedTopology: true,
};
const uri = "mongodb+srv://wajahatqazi117:Y1ECUG9Lbc94tnQR@cluster0.c4knhtr.mongodb.net/?retryWrites=true&w=majority";
const connexion = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connexion;