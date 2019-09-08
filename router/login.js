const express = require('express');
const router = express.Router();
const connection = require("../database");
const jwt = require('jsonwebtoken');
const _ = require('lodash');
//const config = require('../');

router.post("/", function (req, res) {
    console.log('body', req.body)
    let query = "SELECT * FROM `users` WHERE  email = '" + req.body.email + "' AND password='" + req.body.password + "'";
    connection.query(query, function (error, result) {
        if (result != undefined && result.length > 0) {
            const user = _.first(result);
            const token = jwt.sign({ username: user.username, password: user.password }, "test");
            res.send({ 'x-token': token });
        } else {
            res.send(null);
        }
    }
    );
});
module.exports = router;
