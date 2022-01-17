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

router.post("/create", (req, res) => {

    const body = req.body;
    service.create(body)
        .then(data => {
            res.json({ message: 'created' });
        });
});

router.patch("/update/:id", (req, res) => {

    const body = req.body;
    const id = req.params.id;

    service.update(body, id)
        .then(() => {
            res.json({
                message: 'update'
            })
        });
});

router.delete("/delete/:id", (req, res) => {

    const id = req.params.id;

    service.delete(id)
        .then(() => {
            res.json({
                message: 'deleted'
            })
        });
});


module.exports = router;