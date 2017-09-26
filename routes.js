const express = require('express');
var router = express.Router();
const  oauth = require('./outhConfig');

    router.get('/',(req, res)=> {
        res.send(4003,{"homepage":"Enpoint"});
    });
    
    router.get('/auth',(req,res)=> {
        var uri = oauth.code.getUri();
          res.redirect(uri);
    });
    router.get('/token',(req, res)=>{
        const params = req.params;
        
        });
    
    router.get('/callback', (req,res)=>{
        oauth.code.getToken(req.originalUrl) 
      .then(function (user){
        
          user.refresh()
          .then(function(updedUser){
            console.log(user.accessToken);
            return res.send('Authorized');
           
          })
          .catch(function(err){
              console.log(err);
          });
          console.log(user.accessToken);
          return res.send('Authorized');
          
      })
      .catch(function(err){
          console.log(err);
      });
    
    });

module.exports = router;