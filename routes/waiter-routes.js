const db = require("../models");

module.exports = app => {
  app.get("/api/dishes", (req, res) => {
    db.Dish.findAll()
      .then(response => {
        console.log(response);
        return res.json(response);
      })
      .catch(err => {
        console.log(err);
        return res.json(err);
      });
  });

  app.get("/api/tables", (req, res) => {
    db.Table.findAll()
      .then(response => {
        console.log(response);
        return res.json(response);
      })
      .catch(err => {
        console.log(err);
        return res.json(err);
      });
  });
};
