const fs = require("fs");
const sqlite3 = require("sqlite3").verbose();
const filepath = "../data/population.db";

function connectToDatabase() {
  if (fs.existsSync(filepath)) {
    return new sqlite3.Database(filepath);
  } else {
    const db = new sqlite3.Database(filepath, (error) => {
      if (error) {
        return console.error(error.message);
      }
      //   for case where DB doesn't exist
      createTable(db);

      console.log("Connected to the database successfully");
    });

    return db;
  }
}

function createTable(db) {
  db.exec(`
  CREATE TABLE city_populations
  (
    city       VARCHAR(10),
    state      VARCHAR(10),
    population_count      INT
  )
`);
}

module.exports = connectToDatabase();
