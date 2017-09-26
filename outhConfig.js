

const utils = require('./utils');
const outh2 = require('simple-oauth2').create(utils.outh.credentials);

const authorizationUri = outh2.authorizationCode.authorizeURL({
    redirect_uri:utils.callbackURL.prod,
    scope:utils.outh.scopes,
    state: utils.outh.state
});
 const outh = {
    uri:authorizationUri
 };
module.exports = outh;