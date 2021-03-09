// const { response } = require("express");
const db = require("../models");

module.exports = app => {
  //Main page render for view employee
  app.get("/manager", (req, res) => {
    db.Employee.findAll({}).then(response => {
      console.log(response);
      // res.render("employee", { employee })
      res.render("manager", {
        em: response
      });
    });
  });

  //This route will render add employee page if clicked the add new employee button
  app.get("/manager/newEmployee", (req, res) => {
    res.render("addEmpForm");
  });

  //html route to render to delete employee
  app.get("/manager/deleteEmployee", (req, res) => {
    db.Employee.findAll({}).then(response => {
      res.render("deleteEmp", {
        em: response
      });
    });
  });

  // Find all employees and return them to the user with res.json
  // app.get("/api/employees", (req, res) => {
  //     db.Employee.findAll({}).then(response => res.json(response));
  // });

  //Add new employee
  app.post("/api/employees", (req, res) => {
    const {
      firstName,
      lastName,
      email,
      phone,
      position,
      pinNumber,
      managerId
    } = req.body;

    const newEmployee = {
      firstName,
      lastName,
      email,
      phone,
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

  app.delete("/api/employees/:employeeId", (req, res) => {
    // Delete the Employee with the id available to us in req.params.id
    db.Employee.destroy({
      where: {
        employeeId: req.params.employeeId
      }
    }).then(emp => {
      //Remove employee with id
      console.log(`Remove employee with id ${emp.employeeId}`);
      res.end();
      // res.json(emp)
    });
  });
};
