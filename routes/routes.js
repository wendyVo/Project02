const db = require('../models');

module.exports = (app) => {
  app.get('/api/login/:pinNumber', (req, res) => {
    db.Employee.findAll({
      where: {
        pinNumber: req.params.pinNumber,
      },
    })
      .then((response) => {
        console.log(response);
        return res.json(response);
      })
      .catch((err) => {
        console.log(err);
        return res.json(err);
      });
  });

  app.get('/', (req, res) => {
    res.render('login');
  });

  app.get('/waiter', (req, res) => {
    res.render('waiter');
  });

  app.get('/chef', async (req, res) => {
    let data = null;
    await db.Dish.findAll().then((dishes) => {
      data = {
        dishes: dishes.map((dish) => {
          if (!dish.isReady)
            return {
              id: dish.id,
              title: dish.title,
              price: dish.price,
            };
        }),
        readyDishes: dishes.map((dish) => {
          if (dish.isReady)
            return {
              id: dish.id,
              title: dish.title,
              price: dish.price,
            };
        }),
      };
    });
    var filteredDishes = data.dishes.filter(function(el) {
      return el != null;
    });
    var filteredReadyDishes = data.readyDishes.filter(function(el) {
      return el != null;
    });

    data = { dishes: filteredDishes, readyDishes: filteredReadyDishes };
    res.render('chef', { data: data });
  });

  app.post('/api/kitchen/ready/:id', async (req, res) => {
    const id = req.params.id;
    await db.Dish.update({ isReady: true }, { where: { id: id } }).then(
      function(rowsUpdated) {
        res.json(rowsUpdated);
      }
    );
  });

  app.get('/ingredients', (req, res) => {
    res.render('ingredients');
  });

  app.get('/manager', (req, res) => {
    res.render('manager');
  });
};
