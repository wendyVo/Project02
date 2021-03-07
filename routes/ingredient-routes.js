const db = require("../models");
const sequelize = require("sequelize");

module.exports = app => {
  // get the ingredients where are greater minimun quantity
  app.get("/ingredients", (req, res) => {
    db.Ingredient.findAll({
      where: {
        quantity: { [sequelize.Op.gt]: sequelize.col("minimumQuantity") }
      }
    }).then(inStock => {
      res.render("ingredients", { inStock });
    });
  });

  // app.get("/ingredients", (req, res) => {
  //   res.render("ingredients", { inStock: "data" });
  // });

  // get the ingredients where are less or equal minimun quantity
  app.get("/api/ingredient", (req, res) => {
    db.Ingredient.findAll({
      where: {
        quantity: { [sequelize.Op.lte]: sequelize.col("minimumQuantity") }
      }
    }).then(data => res.json(data));
  });
};
