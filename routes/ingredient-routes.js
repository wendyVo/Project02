const db = require("../models");
const sequelize = require("sequelize");

// let inStock;
// let lowStock;

// module.exports = app => {
//   const find = () => {
//     // get the ingredients where are greater from the minimun quantity
//     db.Ingredient.findAll({
//       where: {
//         quantity: { [sequelize.Op.gt]: sequelize.col("minimumQuantity") }
//       }
//     }).then(data => {
//       inStock = data;
//     });

//     // get the ingredients where are less or equal from the minimun quantity
//     db.Ingredient.findAll({
//       where: {
//         quantity: { [sequelize.Op.lte]: sequelize.col("minimumQuantity") }
//       }
//     }).then(data => {
//       lowStock = data;
//     });
//   };

//   // find();

//   app.get("/ingredients", (req, res) => {
//     res.render("ingredients", { inStock, lowStock });
//   });

//   app.put("/api/ingredients/:id", (req, res) => {
//     db.Ingredient.update(
//       { quantity: sequelize.literal("quantity + minimumQuantity*2") },
//       {
//         where: { id: req.params.id }
//       }
//     ).then(() => {
//       find();
//       res.sendStatus(200);
//     });
//   });
// };

module.exports = app => {
  app.get("/ingredients", async (req, res) => {
    try {
      // get the ingredients where are greater from the minimun quantity
      const inStock = await db.Ingredient.findAll({
        where: {
          quantity: { [sequelize.Op.gt]: sequelize.col("minimumQuantity") }
        }
      });
      // get the ingredients where are less or equal from the minimun quantity
      const lowStock = await db.Ingredient.findAll({
        where: {
          quantity: { [sequelize.Op.lte]: sequelize.col("minimumQuantity") }
        }
      });
      res.render("ingredients", { lowStock, inStock });
    } catch (err) {
      console.error(err);
    }
  });

  app.put("/api/ingredients/:id", (req, res) => {
    db.Ingredient.update(
      { quantity: sequelize.literal("quantity + minimumQuantity*2") },
      {
        where: { id: req.params.id }
      }
    )
      .then(() => {
        res.sendStatus(200);
      })
      .catch(err => console.log(err));
  });
};
