const db = require("../models");
// const dishes = require("../public/assets/js/waiters");

module.exports = app => {
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
    db.Dish.findAll()
      .then(dishes => {
        console.log(dishes);
        res.render("waiter", { dishes: dishes });
      })
      .catch(err => console.log(err));
  });

  // const data = res.json(response);
  // for (i = 0; i < response.length; i++) {
  //   data.push(response[i]);
  // }
  // console.log(data);
  // res.render("waiter", { dishes: response[0].dataValues });

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
