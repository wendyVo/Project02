const db = require("../models");

module.exports = app => {
  app.get("/manager", (req, res) => {
    db.Employee.findAll({}).then(response => {
      console.log(response);
      // res.render("employee", { employee })
      res.render("manager", { em: response });
    });
  });

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

  app.delete("/api/employees/:id", (req, res) => {
    // Delete the Author with the id available to us in req.params.id
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(emp => {
      //Remove employee with id
      console.log(`Remove employee with id ${emp.id}`);
      res.end();
      // res.json(emp)
    });
  });
};
