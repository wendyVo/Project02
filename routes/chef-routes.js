const db = require("../models");

module.exports = app => {
  app.get("/chef", (req, res) => {
    db.Dish.findAll().then(dishes => {
      return res.render("chef", { dishes });
    });
  });

  //   app.put("/api/dishes/:id", (req, res) => {
  //     db.Dish.update(
  //       { isReady: req.body.isReady },
  //       {
  //         where: { id: req.params.id }
  //       }
  //     )
  //       .then(rowsUpdated => res.json(rowsUpdated))
  //       .catch(err => {
  //         console.log(err);
  //         return res.json(err);
  //       });
  //   });
};
