const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

let date = new Date();
let resultDate = addDays(date, 100);
let resultFormat = `${resultDate.getDate()}/${
  resultDate.getMonth() + 1
}/${resultDate.getFullYear()}`;

app.get("/", (request, response) => {
  response.send(resultFormat);
});

module.exports = app;
