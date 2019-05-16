const express = require('express');
const parser = require('body-parser');
const router = require('./router.js');
const db = require('../database/index.js');


const app = express();


app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.use('/api', router);

app.listen(3000, console.log("Server running on port 3000"));