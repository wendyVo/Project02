const db = require("../models");

module.exports = (app) => {
  app.get("/api/dishes", (req, res) => {
    db.Dish.findAll()
      .then((response) => {
        console.log(response);
        return res.json(response);
      })
      .catch((err) => {
        console.log(err);
        return res.json(err);
      });
  });

  app.post("/api/table/:id/add-dish", (req, res) => {
    // get table record
    db.Table.findOne({ id: req.params.id }).then(async (table) => {
      const dish = await db.Dish.findOne({ id: req.body.dish_id });

      table.setDishes([dish]);
    });

    // get dish record

    db.Table.setDishes();
  });

  app.get("/api/tables", (req, res) => {
    db.Table.findAll()
      .then((response) => {
        console.log(response);
        return res.json(response);
      })
      .catch((err) => {
        console.log(err);
        return res.json(err);
      });
  });
};
