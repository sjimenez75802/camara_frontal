const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
//creacion de un puerto
const server = http.createServer(app);
server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
//
const router = require('./router');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
