const mongoose = require('mongoose');



module.exports = {

     connect() {
        mongoose.connect(
            "mongodb://mosaic:BWu-v4K-G5S-LSB@ds149974.mlab.com:49974/mosaic",
            {useMongoClient:true})
            .then((connected)=>{
            console.log('connected');
            })
            .catch((error)=>{
            console.log("Error connecting to mongo. \nError: "+error);
            });
    }
  
};
