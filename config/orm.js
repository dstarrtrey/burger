const connection = require('./connection');

const orm = {
  selectAll: (tableName, cb) => {
    console.log('Selecting all from', tableName);
    const queryString = 'SELECT * FROM ??';
    connection.query(queryString, [tableName], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: (tableName, col1, col2, val1, val2) => {
    const queryString = 'INSERT INTO ?? (??, ??) VALUES (?, ?)';
    connection.query(queryString, [tableName, col1, col2, val1, val2], err => {
      if (err) throw err;
    });
  },
  updateOne: (tableName, col1, col2, val1, val2, selector, selectorVal) => {
    const queryString = 'UPDATE ?? SET ??=?, ??=? WHERE ??=?';
    connection.query(
      queryString,
      [tableName, col1, val1, col2, val2, selector, selectorVal],
      err => {
        if (err) throw err;
      }
    );
  }
};

module.exports = orm;
