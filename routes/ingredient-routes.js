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
  console.log(`inStock: ${inStock} 
  lowStock: ${lowStock}`);

  app.get("/ingredients", (req, res) => {
    res.render("ingredients", { inStock, lowStock });
  });

  // app.put("/api/ingredients/:id", (req, res) => {
  //   db.Ingredient.update(
  //     { quantinty: 50 },
  //     {
  //       where: { id: req.params.id }
  //   }).then(function (record) {
  //     res.sendStatus(200);
  // });
};
