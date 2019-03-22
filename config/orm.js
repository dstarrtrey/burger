const connection = require('./connection');

const orm = {
  selectAll: () => {
    connection.query('SELECT * FROM burgers', (err, result) => {
      if (err) throw err;
      return result;
    });
  },
  insertOne: burger => {
    connection.query(
      'INSERT INTO burgers (burger_name, devoured) VALUES (?, false)',
      [burger],
      err => {
        if (err) throw err;
      }
    );
  },
  updateOne: () => {
    //
  }
};

module.exports = { orm };
