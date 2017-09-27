

const utils = require('./utils');
const outh2 = require('simple-oauth2').create(utils.outh.credentials);

const authorizeURL = outh2.authorizationCode.authorizeURL({
    redirect_uri:utils.callbackURL.dev,
    scope:utils.outh.scopes,
    state: utils.outh.state
});
module.exports = {
    outh:outh2,
    authorizeUrl:authorizeURL
    
 };
