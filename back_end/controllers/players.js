const mongoose = require('mongoose');
Player = mongoose.model('Player');

module.exports = {
    add : function(req,res){
        console.log(" in players.js:", req.body);
        Player.create(req.body, function(err,player){
            if(err){
                res.json({error: err})
            }else{
                res.json({Added: player})
            }
        })
    },

    remove : function(req,res){
        console.log("In players.js");
        Player.remove({_id : req.params.id},function(err){
            if(err){
                res.json({error: err})
            }else{
                res.json({Delete: "success"})
            }
        })
    },

    getAll : function(req,res){
        console.log("In players.js" );
        Player.find({},function(err,players){
            if(err){
                res.json({error: err});
            }else{
                res.json({Players: players})
            }
        })
    },

    status : function(req,res){
        console.log("Player: ", req.params);
        var game_id = req.params.game_id;
        console.log('req.body.status:',req.body.status)
        if(game_id == "1"){
            Player.findOneAndUpdate({_id: req.params.id}, {$set:{ G1: req.body.status}}, function(err){
                if(err){
                    res.json({error:err})
                }else{
                    res.json({Success: "Success"})
                }
            })
        }else if(game_id == "2"){
            Player.findOneAndUpdate({_id: req.params.id}, {$set:{ G2: req.body.status}}, function(err){
                if(err){
                    res.json({error:err})
                }else{
                    res.json({Success: "Success"})
                }
            })
        }else if(game_id == "3"){
            Player.findOneAndUpdate({_id: req.params.id}, {$set:{ G3: req.body.status}}, function(err){
                if(err){
                    res.json({error:err})
                }else{
                    res.json({Success: "Success"})
                }
            })
        }else{
            res.json({Error:"error"})
        }
    }


}