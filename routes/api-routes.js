// Requiring our models as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.get("/api/employee/:pinNumber", (req, res) => {
    db.Employee.findOne({
      where: {
        pinNumber: req.params.pinNumber
      }
    }).then(data => res.json(data));
  });
};
