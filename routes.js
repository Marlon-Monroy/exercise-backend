const express = require('express');
const router = express.Router();
const  oauth = require('./outhConfig');
const db = require('./dbConfig');

    router.get('/',(req, res)=> {
        
        res.send({"homepage":"unhandle route"});
    });
    

    router.get('/auth',(req,res)=> {
        console.log(oauth.uri);
          res.redirect(oauth.uri);
    });

    router.get('/token',(req, res)=>{
        
    });
    
    router.get('/callback', (req,res)=>{
       const code = req.query.code;
       console.log(code); 
       res.send(code);
      
    });

module.exports = router;