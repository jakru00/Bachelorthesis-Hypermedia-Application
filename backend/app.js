const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

app.get("/", function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(thomas);
});

app.get("/rels/patients/create", function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(createRel);
})

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

var thomas = {
    name: "Thomas",
    age: 23
}

var createRel = {
    _links: {
        self: { "href": "http://localhost:3000/rels/patients/create" }
    },
    _templates: {
        default: {
            method: "POST", // crudlq
            target: "/patients", // crudlq
            contentType: "application/json", // crudlq
            properties: [{
                name: "name",
                type: "text",
                readOnly: false, 
                prompt: "Name:",
                placeholder: "Insert Name",
            },
            {
                name: "age",
                type: "text",
                readOnly: false, 
                prompt: "Age:",
                placeholder: "Insert Age",
            },
            {
                name: "in-treatment",
                type: "checkbox",
                readOnly: false, 
                prompt: "In treatment:",
            }]
        }
    }
}

// https://stackoverflow.com/questions/19696240/proper-way-to-return-json-using-node-or-express