const express = require('express');
const router = express.Router();
const connection = require("../database");
const jwt = require('jsonwebtoken');
const _ = require('lodash');
//const config = require('../');

router.get("/", function (req, res) {
    let query = "SELECT * FROM `users`";
    connection.query(query, function (error, result) {
        if (result != undefined && result.length > 0) {
            res.send(result);
        } else {
            res.send(null);
        }
    }
    );
});
module.exports = router;
