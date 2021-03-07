const db = require("../models");

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
};
