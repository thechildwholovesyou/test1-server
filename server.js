let express = require("express");
let data = require("./data.json");

let server = express();

server.get("/details", function (req, res) {
  let reqObj = [];
  for (let i = 0; i < data.length; i++) {
    let id = data[i].id;
    let name = data[i].name;
    let animal = data[i].animal;
    let city = data[i].city;
    let breed = data[i].breed;

    reqObj.push({
      id: id,
      name: name,
      animal: animal,
      city: city,
      breed: breed,
    });
  }
  res.json(reqObj);
});

server.listen(4000);

