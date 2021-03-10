const db = require("../models");

module.exports = app => {
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

  app.post("/api/chef/ready/:id", async (req, res) => {
    const id = req.params.id;
    await db.Dish.update({ isReady: true }, { where: { id: id } }).then(
      rowsUpdated => {
        res.json(rowsUpdated);
      }
    );
  });
};
