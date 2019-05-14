const express = require('express');
const parser = require('body-parser');


const app = express();


app.use(parser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, console.log("Server running on port 3000"));