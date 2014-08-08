var express = require('express');
var app = express();

var appHomePath = process.env.deployPath || '';
var listenPortNumber = process.env.PORT || 8080;


app.get(appHomePath + '/foo', function (req, res) {
    res.send('Hello from foo! [express sample]');
});

app.get(appHomePath + '/bar', function (req, res) {
    res.send('Hello from bar! [express sample]');
});

app.get(appHomePath + '/info', function (req, res) {
    res.send(__dirname);
});

console.log('appHomePath: "' + appHomePath + '"');
console.log('listenPortNumber: "' + listenPortNumber + '"');

app.listen(listenPortNumber, function()
     {
           console.log('Socket ON')
    });
