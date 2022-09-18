const db = require('../db/db.json');
const express = require('express');
const app = express();
const fs = require("fs");
const path = require("path");

// This will first get index.html and then listen.

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Notes html and it's endpoint
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = app;