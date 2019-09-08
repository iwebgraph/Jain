express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const jwt_decode = require('jwt-decode');
const connection = require("./database");
const login = require("./router/login");
const register = require("./router/register");
const _ = require('underscore');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use(express.static("www"));

app.use(express.json());
app.use('/login',login);
app.use('/register',register);

app.listen(process.env.PORT || 3000, () => {
    console.log("server started");
});
