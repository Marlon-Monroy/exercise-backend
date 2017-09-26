const ClientOAuth2 = require('client-oauth2');
const  port = process.env.port || 3000;
const nprAuth = new ClientOAuth2({
    clientId:'nprone_trial_QpygBBVs2ywc',
    clientSecret:'zsQ9mXCPMEFTCdTbybAmHOEEXDhdEINGj3YoMEvr',
    accessTokenUri:'https://api.npr.org/authorization/v2/token',
    authorizationUri:'https://api.npr.org/authorization/v2/authorize',
    redirectUri:'http://localhost:{port}/callback',
    scopes: ['identity.readonly','listening.readonly'],
    state:'nc98P987bcpncYhoadjoiydc9ajDlcn'
});

module.exports = nprAuth;