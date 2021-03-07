const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("login");
  });

  app.get("/waiter", (req, res) => {
    db.Dish.findAll()
      .then(dishes => {
        console.log(dishes);
        res.render("waiter", { dishes });
      })
      .catch(err => console.log(err));
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
};
