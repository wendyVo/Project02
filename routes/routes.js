const express = require("express");
const app = express();
const db = require("../models");

app.get("/api/login/:pinNumber", (req, res) => {
  db.Employee.findAll({
    where: {
      pinNumber: req.params.pinNumber
    }
  })
    .then(response => {
      console.log(response);
      return res.json(response);
    })
    .catch(err => {
      console.log(err);
      return res.json(err);
    });
});

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/waiter", (req, res) => {
  res.render("waiter");
});

app.get("/chef", (req, res) => {
  res.render("chef");
});

app.get("/ingredients", (req, res) => {
  res.render("ingredients");
});

app.get("/manager", (req, res) => {
  res.render("manager");
});

module.exports = app;
