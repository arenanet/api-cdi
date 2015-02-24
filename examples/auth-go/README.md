GW2 APIs w/ OAuth2 (in Go)
==========================

1. Install [Go](https://golang.org/) if you don't have it.
2. Set up your environment according to the documentation, put main.go into the appropriate place (e.g., `$GOPATH/auth-go/main.go`).
3. From that folder open a shell.
4. Type `go get` to fetch dependencies, then `go build` to compile the application.
5. Once the modules are installed, type `./auth-go`.
6. Navigate to `http://localhost:3000`. You'll be redirected to the GW2 account site.
7. Log in, authorize, etc. You'll be redirected back to the app, which will now display the output of `/v2/account`.
9. `http://localhost:3000/token` will emit your current OAuth2 token.
10. `http://localhost:3000/oauth2/login` will restart the OAuth2 login flow.

## Depends on

* [code.google.com/p/goauth2/oauth](http://godoc.org/code.google.com/p/goauth2/oauth)
* [github.com/lye/router](http://godoc.org/github.com/lye/router)
