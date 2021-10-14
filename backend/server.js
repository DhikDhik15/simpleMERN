"use strict";
const express = require("express");
const app = express();
const dotenv = require("dotenv");

/*parse requests of content-type - application/json*/
app.use(express.json());

/*parse requests of content-type - application/x-www-form-urlencoded*/
app.use(express.urlencoded({
  extended: true
}));
const route = require('./routes/route');
route(app);

/*PORT*/
const DPORT = process.env.DEFAULT_PORT || 3001;
// sslServer.listen(PORT, () => {
app.listen(DPORT, () => {
  console.log(`--->Service on PORT ${DPORT}.<---`);
});

/*MONGODB*/
const mongoose = require("mongoose");
const PORT = process.env.PORT || 27017;

mongoose.connect('mongodb://localhost:27017/inventory', { useNewUrlParser: true });
mongoose.connection
  .once("open", function () {
    console.log(`--->DB Service on PORT ${PORT}<---`);
  })
  .on("error", function (error) {
    console.log("error is:", error);
  });
