const db = require("../models");

module.exports = app => {
  // app.get("/chef", (req, res) => {
  //   db.Dish.findAll().then(dishes => {
  //     return res.render("chef", { dishes });
  //   });
  // });

  app.get("/chef", async (req, res) => {
    try {
      const tables = await db.RestaurantTable.findAll({
        include: [{ model: db.Dish, as: "dishes" }]
      });
      const parsedTables = tables.map(table => {
        const id = table.dataValues.id;
        const tableDish = table.dataValues.dishes;
        return {
          id,
          tableDish
        };
      });
      res.render("chef", { tables: parsedTables });
    } catch (err) {
      console.error(err);
    }
  });

  app.get("/chef/readyDishes", async (req, res) => {
    try {
      const tables = await db.RestaurantTable.findAll({
        include: [{ model: db.Dish, as: "dishes" }]
      });
      const parsedTables = tables.map(table => {
        const id = table.dataValues.id;
        const tableDish = table.dataValues.dishes;
        return {
          id,
          tableDish
        };
      });
      res.render("chef", { tables: parsedTables });
    } catch (err) {
      console.error(err);
    }
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
