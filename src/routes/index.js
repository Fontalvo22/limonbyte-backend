const express = require('express');

const userRoutes = require('./users.routes');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/', router);
    router.use('/users', userRoutes);
}

module.exports = routerApi;