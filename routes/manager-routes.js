const db = require("../models");

module.exports = app => {
  // Find all employees and return them to the user with res.json
  app.get("/api/employees", (req, res) => {
    db.Employee.findAll({}).then(response => res.json(response));
  });

  //Add new employee
  app.post("/api/employees", (req, res) => {
    const { firstName, lastName, position, pinNumber, managerId } = req.body;

    const newEmployee = {
      firstName,
      lastName,
      position,
      pinNumber,
      managerId
    };
    console.log(newEmployee);
    db.Employee.create(newEmployee).then(emp => {
      console.log(`Added employee ${emp.firstName} ${emp.lastName}`);
      res.json({ id: emp.id });
    });
  });
};
