const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors())

app.get("/rels/patients/create", function (req, res) {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.json(createRel);
})

app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});

var createRel = {
    _links: {
        self: { "href": "http://localhost:3000/rels/patients/create" }
    },
    _templates: {
        default: {
            method: "POST",
            properties: [{
                name: "name",
                type: "text",
                required: true,
                readOnly: false,
                prompt: "Name:",
                placeholder: "Insert Name",
                minLength: 3,
                maxLength: 20
            },
            {
                name: "age",
                type: "number",
                required: true,
                readOnly: false,
                prompt: "Age:",
                placeholder: "Insert Age",
                min: 0,
                max: 150,
                step: 1
            },
            {
                name: "sex",
                type: "select",
                required: false,
                readOnly: false,
                prompt: "Sex:",
                placeholder: "Select Sex",
                options: {
                    inline: [{
                        prompt: "female",
                        value: "f"
                    },
                    {
                        prompt: "male",
                        value: "m"
                    },
                    {
                        prompt: "diverse",
                        value: "d"
                    }]
                }
            },
            {
                name: "in-treatment",
                type: "checkbox",
                readOnly: true,
                prompt: "In treatment:",
            }]
        }
    }
}