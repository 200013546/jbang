var express = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'w5g56xlkqx8nsuh8',
    password: 'mbcuyusgstadog2q',
    database: 'xjh86w1rt52735sx'
});

connection.connect();

var app = express();

app.get('/users', function (req, res) {
    var q = "select title from links as u " +
        "where title like ? order by popularity asc limit 0, 10";
    connection.query(q, ['%' + req.query['term'] + '%'],
        function (err, results, fields) {
            console.log(q);

            if (err) { throw err; }
            var json = JSON.stringify(results);
            res.send(json);
        }
    );

});

app.listen(4000);