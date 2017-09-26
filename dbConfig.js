const mongoose = require('mongoose');



module.exports =  function() {
    mongoose.connect(
        "mongodb://mosaic:BWu-v4K-G5S-LSB@ds149974.mlab.com:49974/mosaic",
        {useMongoClient:true})
        .then((connected)=>{
        console.log('connected');
        })
        
        .catch((error)=>{
        
        });
};
