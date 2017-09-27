const express = require('express');
const router = express.Router();
const oauth = require('./outhConfig');
const db = require('./dbConfig');
const Token = require('./token');
const utils = require('./utils');
    db.connect();
    router.get('/',(req, res)=> {
        
        res.send({"homepage":"unhandle route"});
    });
    
    router.get('/auth',(req,res)=> {
        console.log(oauth.authorizeUrl);
          res.redirect(oauth.authorizeUrl);
    });

    router.get('/token',(req, res)=>{
        const code = req.query.code;
        console.log(code);
        const tokenConfig = {
            code: code,
            redirect_uri:utils.callbackURL.dev
          };
        oauth.outh.authorizationCode.getToken(tokenConfig)
        .then((result)=>{
            const accessToken = oauth.outh.accessToken.create(result);
            console.log(accessToken);
            res.send(accessToken);
        })
        .catch((err)=>{
            console.log(err);
        });

    });
    
    router.get('/callback', (req,res)=>{
       const code = req.query.code;
       console.log(code); 
       if (code !== "" ) {
        
         res.redirect("code://"+code); 
          //res.send(code);
       }
      
    });

module.exports = router;