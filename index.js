//
// import express from 'express';
// import path from 'path';
// import routes from './routes';
//
// const port = process.env.PORT || 3000;
// const app = express();
//
// // app.use('/states', routes);
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, './client/index.html'));
// })
//
// app.listen(port, () => {
//  console.log('listening on port ' + port);
// })


var express = require('express');
var path = require('path');
var routes = require('./routes');

var port = process.env.PORT || 3000;
var app = express();

// app.use('/states', routes);
// app.get('/', function(req, res){
//   res.sendFile(path.join(__dirname, './client/index.html'));
// })

app.use('/', express.static(path.join(__dirname, './client')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './client/index.html'));
});

app.get('/api/sah', function(req, res){
  res.send('sahhhhhhh?');
})

app.listen(port, function(){
 console.log('listening on port ' + port);
})
