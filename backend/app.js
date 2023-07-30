const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

app.get("/", function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(object);
});

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

var object = {
    name: "Thomas",
    age: 23
}

// https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express