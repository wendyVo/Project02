const db = require("../models");
// const { Op } = require("sequelize");
const Op = Sequelize.Op;

module.exports = app => {
  // get the ingredients where are greater minimun quantity
  app.get("/api/ingredients", (req, res) => {
    db.Ingredient.findAll({
      where: {
        quantity: { $gt: sequelize.col('minimumQuantity') } // > 20
        // quantity: { [Op.gt]: sequelize.col('minimumQuantity') } // > 20
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
        quantity: { [Op.lte]: 20 } // < = 20
      }
    }).then(data => res.json(data));
  });
};
