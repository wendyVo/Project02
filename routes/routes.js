const db = require("../models");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.render("login");
  });

  app.get("/waiter", async (req, res) => {
    try {
      const dishes = await db.Dish.findAll();
      const tables = await db.RestaurantTable.findAll();
      const parsedTables = tables.map((table) => {
        const [width, height] = table.dataValues.dimension.split("x");
        const id = table.dataValues.id;
        return {
          ...table,
          dimension: {
            width,
            height,
          },
          id
        };
      });
      console.log(dishes);
      console.log(parsedTables);
      res.render("waiter", { dishes, tables: parsedTables });
    } catch (err) {
      console.error(err);
    }
  });

  app.get("/chef", (req, res) => {
    res.render("chef");
  });

  app.get("/ingredients", (req, res) => {
    res.render("ingredients");
  });
};
