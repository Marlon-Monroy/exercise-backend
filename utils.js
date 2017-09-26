module.exports = {
    //accessTokenUri:'https://api.npr.org/authorization/v2/token',
    //authorizationUri:'https://api.npr.org/authorization/v2/authorize'
    callbackURL: {
        
        dev:"http://localhost:8080/callback",
        prod:"https://npr-client.herokuapp.com/callback"
    },
    outh: {
      credentials: {
        client:{
        id:'nprone_trial_QpygBBVs2ywc',
        secret:'zsQ9mXCPMEFTCdTbybAmHOEEXDhdEINGj3YoMEvr',
        },
        auth: {
            tokenHost: 'https://api.npr.org',
            tokenPath: '/authorization/v2/token',
            authorizePath: '/authorization/v2/authorize',
          }
      }, 

    scopes:['identity.readonly','listening.readonly'],
    state:"nc98P987bcpncYhoadjoiydc9ajDlcn"  
    },
    env: {
        port:process.env.PORT || 8080
    }
};
