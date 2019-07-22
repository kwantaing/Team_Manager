const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./back_end/config/mongoose.js')(app)
require('./back_end/models/player.js')(app)
require('./back_end/config/routes.js')(app)

app.listen(8000, function(){
    console.log("listening on port 8000")
})
