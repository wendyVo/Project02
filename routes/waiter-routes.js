const db = require("../models");

module.exports = app => {
  // Route to get the tables, menu and orders to display on the waiter page
  app.get("/waiter", async (req, res) => {
    try {
      const dishes = await db.Dish.findAll();
      const tables = await db.RestaurantTable.findAll({
        include: [{ model: db.Dish, as: "dishes" }]
      });
      const parsedTables = tables.map(table => {
        const [width, height] = table.dataValues.dimension.split("x");
        const id = table.dataValues.id;
        const tableDish = table.dataValues.dishes;
        return {
          dimension: {
            width,
            height
          },
          id,
          tableDish
        };
      });
      res.render("waiter", { dishes, tables: parsedTables });
    } catch (err) {
      console.error(err);
    }
  });

  // Route to get all the dishes
  app.get("/api/dishes", (req, res) => {
    db.Dish.findAll()
      .then(response => {
        console.log(response);
        return res.json(response);
      })
      .catch(err => {
        console.log(err);
        return res.json(err);
      });
  });

  // Route to get the dishes that belong to a specific table
  app.get("/waiter/table/Order/:id", (req, res) => {
    db.RestaurantTable.findAll({
      where: {
        id: req.params.id
      },
      include: [{ model: db.Dish, as: "dishes" }]
    })
      .then(response => res.json(response))
      .catch(err => {
        console.error(err);
      });
  });

  // Route to add a order a dish to a table
  app.get("/api/table/:id/add-dish/:id2", async (req, res) => {
    try {
      const table = await db.RestaurantTable.findOne({
        where: { id: req.params.id }
      });
      const dish = await db.Dish.findOne({
        where: { id: req.params.id2 }
      });
      console.log(res);
      return table.setDishes([dish]);
    } catch (err) {
      console.error(err);
    }
  });

  // Route to get all the tables
  app.get("/api/tables", (req, res) => {
    db.RestaurantTable.findAll()
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
