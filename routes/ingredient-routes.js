const db = require("../models");
const sequelize = require("sequelize");

module.exports = app => {
  // get the ingredients where are greater minimun quantity
  app.get("/api/ingredients", (req, res) => {
    db.Ingredient.findAll({
      where: {
        quantity: { [sequelize.Op.gt]: sequelize.col("minimumQuantity") }
      }
    })
      .then(response => {
        console.log(response);
        return res.json(response);
      })
      .catch(err => {
        console.log(err);
        return res.json(err);
      });
  });
  // get the ingredients where are less or equal minimun quantity
  app.get("/api/ingredient", (req, res) => {
    db.Ingredient.findAll({
      where: {
        quantity: { [sequelize.Op.lte]: sequelize.col("minimumQuantity") }
      }
    }).then(data => res.json(data));
  });
};
