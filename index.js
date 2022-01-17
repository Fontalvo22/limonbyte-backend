const express = require("express");
const app = express();
const port = 3000;

const routerApi = require('./src/routes');


app.get("/", (req, res) => {
    res.json({
        Hola: "Mundo"
    });
});

routerApi(app);

app.listen(port, () => {
    console.log('running');
});