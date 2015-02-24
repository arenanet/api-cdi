var oauth = require("./oauth2");

oauth.getOAuthAccessToken(
    process.argv[2],
    {
        redirect_uri : "http://localhost:8080/oauth2/callback",
        grant_type   : "authorization_code",
        response_type : "code"
    },
    function(err, access, refresh, result) {
        if(err) {
            return console.log(err);
        }

        oauth.get(
            "https://api.guildwars2.com/v2/account",
            access,
            function(err, body, response) {
                console.log(body);
            }
        );
    }
);
