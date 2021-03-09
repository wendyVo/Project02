const db = require("../models");

module.exports = (app) => {
  app.get("/chef", (req, res) => {
    db.Dish.findAll().then((dishes) => {
      return res.render("chef", { dishes });
    });
  });

  // app.get("/chef", async (req, res) => {
  //   try {
  //     const dishes = await db.Dish.findAll({
  //       include: [{ model: db.RestaurantTable, as: "tables" }],
  //     });
  //     const parsedDishes = dishes.map((dish) => {
  //       const dishTables = dish.dataValues.tables;
  //       const id = dish.dataValues.id;
  //       const isReady = dish.dataValues.isReady;
  //       const title = dish.dataValues.title;
  //       return {
  //         id,
  //         tableDish,
  //         isReady,
  //         title,
  //       };
  //     });
  //     console.log(dishes);
  //     console.log(parsedDishes);
  //     res.render("waiter", { dishes: parsedDishes });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // });

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
