const burgerOrm = require('../models/burger.js');

module.exports = app => {
  app.get('/', function(req, res) {
    burgerOrm.selectAll(result => {
      res.render('index', {
        uneatenBurgers: result.filter(x => x.devoured == false),
        eatenBurgers: result.filter(x => x.devoured == true)
      });
    });
  });
  app.post('/burgers', (req, res) => {
    const newBurger = req.body;
    burgerOrm.insertOne(newBurger.burger_name, newBurger.devoured);
  });
  app.put('/burgers/:id', (req, res) => {
    const { id } = req.params;
    const updated = req.body;
    console.log('New Burger:', id, updated);
    burgerOrm.updateOne(updated.burger_name, updated.devoured, id);
  });
};
