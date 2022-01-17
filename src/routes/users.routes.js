const express = require("express");
const UsersService = require("../services/users.service.js");
const router = express.Router();

const service = new UsersService();

router.use(express.json());

router.get("/", (req, res) => {
    service.index().then(data => {
        res.json(data);
    })
});

router.patch("/update/:id", (req, res) => {

    const body = req.body;

    service.update(body, id);
    res.send('Hola');
});

module.exports = router;