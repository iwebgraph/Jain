const express = require('express');
const router = express.Router();
const connection = require("../database");
const _ = require('lodash');

router.post("/", function (req, res) {
    let body = req.body;
    let currentDate = new Date();

    let insertValue = '';
    let query = "INSERT INTO `users`(";
    if (body.parent_id) {
        query += "`parent_id`,";
        insertValue += body.parent_id + ",";
    }
    query += " `first_name`, ";
    insertValue += "'" + body.first_name + "',";
    if (body.middle_name) {
        query += "`middle_name`,";
        insertValue += "'" +body.middle_name + "',";
    }
    query += " `last_name`, `gender`, `dob_date`,";
    insertValue += "'" +body.last_name + "',";
    insertValue += "'" +body.gender + "',";
    insertValue += "'" +body.dob_date + "',";
    if (body.aniversary_date) {
        query += "`aniversary_date`,";
        insertValue += "'" +body.aniversary_date + "',";
    }
    if (body.blood_group) {
        query += " `blood_group`,";
        insertValue +="'" + body.blood_group + "',";
    }
    if (body.education) {
        query += " `education`,";
        insertValue += "'" +body.education + "',";
    }
    if (body.business_detail) {
        query += " `business_detail`,";
        insertValue += "'" +body.business_detail + "',";
    }
    query += " `mobile_number`, `email`,";
    insertValue += "'" +body.mobile_number + "',";
    insertValue += "'" +body.email + "',";
    if (body.address) {
        query += " `address`, ";
        insertValue += "'" +body.address + "',";
    }
    if (body.proof_type) {
        query += "`proof_type`,";
        insertValue += "'" +body.proof_type + "',";
    }
    if (body.proof_id) {
        query += " `proof_id`,";
        insertValue += "'" +body.proof_id + "',";
    }
    query += " `password`,";
    insertValue += "'" +body.password + "',";
    query += " `created_date`, `modify_date`, `created_by`, `modify_by`)";
    insertValue += "'" +currentDate + "',";
    insertValue += "'" +currentDate + "',";
    insertValue += '"Test"' + ",";
    insertValue += '"Test"';

    query += " VALUES (" + insertValue + " )";
    connection.query(query, function (error, result) {
            if (result != undefined) {
                res.send({Status: 'Success'});
            } else {
                res.send({Status: 'Fail', Error: error});
            }
        }
    );
});
module.exports = router;
