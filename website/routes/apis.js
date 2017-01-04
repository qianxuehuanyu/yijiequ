var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/apis', function(req, res, next) {
    res.send('respond with a resource');
});
const conn = require("./MySqlConnection");


module.exports = router;
