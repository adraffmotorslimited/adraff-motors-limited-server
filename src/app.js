const express = require("express");

// Init Express App
const app = express();
// Init Dotenv
require("dotenv").config();

// Parse JSON Date
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("V Good");

module.exports = app;
