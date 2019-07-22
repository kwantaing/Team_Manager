const mongoose = require('mongoose');

module.exports  = function(app){
    var PlayerSchema = new mongoose.Schema({
        name: {type : String, required: [true, "Player name is required."]},
        position: { type: String, default:"None"},
        G1: {type: String, default: "undecided"},
        G2: {type: String, default: "undecided"},
        G3: {type: String, default: "undecided"}
    })

    mongoose.model('Player', PlayerSchema);

}