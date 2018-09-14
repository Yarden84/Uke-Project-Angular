// const express =  require('express');
// const app = express();
// const path = require('path');

// app.use(express.static(__dirname + '/dist'));

// app.listen(process.env.PORT || 8080);



// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/src/index.html'));
// })

// console.log('Console listening');

var express =  require('express');
var app = express();

//set port
var port = process.env.PORT || 8080

app.use(express.static(__dirname + "/dist"));

//routes

app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function(){
    console.log("app running");
})