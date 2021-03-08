const db = require("../models");

module.exports = app => {
  app.get("/waiter", async (req, res) => {
    try {
      const dishes = await db.Dish.findAll();
      const tables = await db.RestaurantTable.findAll();
      const parsedTables = tables.map(table => {
        const [width, height] = table.dataValues.dimension.split("x");
        const id = table.dataValues.id;
        return {
          dimension: {
            width,
            height
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

  // app.post("/api/table/:id/add-dish", (req, res) => {
  //   // get table record
  //   db.Table.findOne({
  //     where: { id: req.params.id }
  //   }).then(table => {
  //     const dish = db.Dish.findOne({
  //       where: { id: req.body.id }
  //     });
  //     table.setDishes([dish]);
  //     console.log(`This ${dish} belongs to this ${table}`);
  //   });
  //   // db.Table.setDishes();
  //   return console.log(res);
  // });

  app.get("/api/table/:id/add-dish/:id2", async (req, res) => {
    try {
      const table = await db.RestaurantTable.findOne({
        where: { id: req.params.id }
      });
      const dish = await db.Dish.findOne({
        where: { id: req.params.id2 }
      });
      const name = dish.dataValues.title;
      const cus = table.dataValues.numCustomers;
      console.log(name);
      console.log(cus);
      res.json(name); //to prevent lint
      return table.setDishes([dish]);
    } catch (err) {
      console.error(err);
    }
  });

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
