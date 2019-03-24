const orm = require('../config/orm');

//code that will call the ORM functions using burger specific input for the ORM.

const burgerOrm = {
  selectAll: cb => {
    orm.selectAll('burgers', cb);
  },
  insertOne: (val1, val2) => {
    orm.insertOne('burgers', 'burger_name', 'devoured', val1, val2);
  },
  updateOne: (val1, val2, id) => {
    orm.updateOne('burgers', 'burger_name', 'devoured', val1, val2, 'id', id);
  }
};

module.exports = burgerOrm;
