const db = require("../models");
const sequelize = require("sequelize");

let inStock;
let lowStock;

module.exports = app => {
  const find = () => {
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
  };

  find();

  app.get("/ingredients", (req, res) => {
    res.render("ingredients", { inStock, lowStock });
  });

  app.put("/api/ingredients/:id", (req, res) => {
    db.Ingredient.update(
      { quantity: sequelize.literal("quantity + minimumQuantity*2") },
      {
        where: { id: req.params.id }
      }
    ).then(() => {
      find();
      res.sendStatus(200);
    });
  });
};
