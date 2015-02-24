//jshint node:true
"use strict";

var OAuth2 = require("oauth").OAuth2,
    oauth2;

// Live
oauth2 = new OAuth2(
    "gw2_api_demo",
    "0357A930-2126-4C87-A006-5AB470298ADA",
    "https://account.guildwars2.com",
    "/oauth2/authorization",
    "/oauth2/token"
);

// Have to auth for every type of request
oauth2.useAuthorizationHeaderforGET(true);

module.exports = oauth2;
