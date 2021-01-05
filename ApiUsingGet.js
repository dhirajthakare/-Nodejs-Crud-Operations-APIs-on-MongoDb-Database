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


app.get('/GetApi',function(req , res){
    data.find().select('Name Mob').then((data)=>{
        res.status(201).json(data);
    })
})
app.listen(4400);