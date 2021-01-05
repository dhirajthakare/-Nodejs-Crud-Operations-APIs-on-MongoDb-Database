const express = require('express');
const app = express();
const mongoose = require('mongoose');
const data = require('./ApiModel');
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.7a6ts.mongodb.net/<database>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

);


app.get("/search/:Name",function(req , res){
    var regex = new RegExp(req.params.Name,'i');
    data.find({Name:regex}).then((result)=>{
        res.status(201).json(result)
    })
})


app.listen(4400);