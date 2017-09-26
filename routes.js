const express = require('express');
var router = express.Router();
const  oauth = require('./outhConfig');

    router.get('/',(req, res)=> {
        res.send({"homepage":"Enpoint"});
    });
    
    router.get('/auth',(req,res)=> {
        var uri = oauth.code.getUri();
          res.redirect(uri);
    });
    
    router.get('/callback', (req,res)=>{
        oauth.code.getToken(req.originalUrl) 
      .then(function (user){
        
          user.refresh()
          .then(function(updedUser){
            console.log("refreshing");
              return res.send({"access_token":user.accessToken});
          })
          .catch(function(err){
              console.log(err);
          });
          
          return res.send({"access_token":user.accessToken});
      })
      .catch(function(err){
          console.log(err);
      });
    
    });

module.exports = router;