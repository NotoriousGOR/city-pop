const fs = require("fs");
const path = require("path");
const parse = require("csv-parser");

const csvPath = path.join(__dirname, "../data/city_populations.csv");

exports.cities = new Promise((res, rej) => {
  const cities = [];
  // async file read
  fs.createReadStream(csvPath, { encoding: "utf-8" })
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", (row) => {
      cities.push(row);
    })
    .on("error", (error) => rej(error))
    .on("end", () => res(cities));
});
