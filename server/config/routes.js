﻿var users = require('../routes/users');
var home = require('../routes/index');
var signUpRoutes = require('../routes/signup');


module.exports = function (app) {

    app.use('/', home);
    app.use('/api/signup', signUpRoutes);
    //app.use('/users', users);

    app.all('/api/*', function (req, res) {
        res.send(404);
    });

};