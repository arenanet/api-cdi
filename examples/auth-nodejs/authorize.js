//jshint node:true
"use strict";

var oauth = require("./oauth2"),

    url = oauth.getAuthorizeUrl({
        redirect_uri  : "http://localhost:8080/oauth2/callback",
        response_type : "code",
        scope         : "account offline"
    });

console.log(url);

require("open")(url);
