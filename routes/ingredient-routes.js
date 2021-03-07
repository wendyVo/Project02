const db = require("../models");
const sequelize = require("sequelize");

let inStock;
let lowStock;

module.exports = app => {
  // get the ingredients where are greater from the minimun quantity
  db.Ingredient.findAll({
    where: {
      quantity: { [sequelize.Op.gt]: sequelize.col("minimumQuantity") }
    }
  }).then(data => {
    inStock = data;
  });

  // get the ingredients where are less or equal from the minimun quantity
  db.Ingredient.findAll({
    where: {
      quantity: { [sequelize.Op.lte]: sequelize.col("minimumQuantity") }
    }
  }).then(data => {
    lowStock = data;
  });

  app.get("/ingredients", (req, res) => {
    res.render("ingredients", { inStock, lowStock });
  });

  app.put("/api/ingredients/:id", (req, res) => {
    db.Ingredient.update(
      { quantity: sequelize.literal("quantity + 40") },
      {
        where: { id: req.params.id }
      }
    ).then(() => {
      res.sendStatus(200);
    });
  });
};
