const express = require('express');
const app = express();
const mongoose = require('mongoose');
const data = require('./ApiModel');
const bodyparse = require('body-parser');
const jsondata = bodyparse.json();
mongoose.connect('mongodb+srv://<username>:<password>@cluster0.7a6ts.mongodb.net/<database>?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

);

app.delete('/DeleteApi/:id',function(req , res){


    data.deleteOne({_id:req.params.id}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>console.warn(err))
    

})

app.listen(4400);