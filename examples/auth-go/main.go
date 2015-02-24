package main

import (
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"io"
	"log"
	"net"
	"net/http"
	"time"

	"code.google.com/p/goauth2/oauth"
	"github.com/lye/router"
)

const (
	localAddr     = "localhost:3000"
	localBase     = "http://" + localAddr
	accountBase   = "https://account.guildwars2.com"
	sessionCookie = "session"
)

type session struct {
	token *oauth.Token
	state string
}

var (
	sessions = map[string]*session{}

	oauthConfig = &oauth.Config{
		ClientId:     "gw2_api_demo",
		ClientSecret: "0357A930-2126-4C87-A006-5AB470298ADA",
		Scope:        "account offline",
		AuthURL:      accountBase + "/oauth2/authorization",
		TokenURL:     accountBase + "/oauth2/token",
		RedirectURL:  "http://localhost:3000/oauth2/callback",
	}
)

func randomString(length int) string {
	bs := make([]byte, length/2+1)
	if _, er := rand.Reader.Read(bs); er != nil {
		log.Fatal(er)
	}

	str := hex.EncodeToString(bs)
	return str[:length]
}

func main() {
	addr, er := net.ResolveTCPAddr("tcp", localAddr)
	if er != nil {
		log.Fatal(er)
	}

	list, er := net.ListenTCP("tcp", addr)
	if er != nil {
		log.Fatal(er)
	}

	log.Printf("Listening on %s", localAddr)
	log.Fatal(http.Serve(list, buildRouter()))
}

func buildRouter() http.Handler {
	rtr := router.NewRouter()

	rtr.SetErrorHandler("GET", "/", rtError)

	rtr.Handle("GET", "/", rtRoot)
	rtr.Handle("GET", "/token", rtToken)
	rtr.Handle("GET", "/oauth2/login", rtOauthLogin)
	rtr.Handle("GET", "/oauth2/callback", rtOauthCallback)
	rtr.Handle("GET", "/oauth2/icon", rtOauthIcon)
	rtr.Handle("GET", "/about", rtAbout)

	return rtr
}

func getSession(r *http.Request) *session {
	cookie, _ := r.Cookie(sessionCookie)
	if cookie == nil {
		return nil
	}

	return sessions[cookie.Value]
}

func rtError(w http.ResponseWriter, r *http.Request, er error) {
	log.Printf("[ERROR] %s", er.Error())
	fmt.Fprintf(w, "ERROR! %s", er.Error())
}

func rtRoot(w http.ResponseWriter, r *http.Request, args []string) error {
	sess := getSession(r)
	if sess == nil || sess.token == nil {
		http.Redirect(w, r, "/oauth2/login", http.StatusFound)
		return nil
	}

	t := oauth.Transport{
		Config: oauthConfig,
		Token:  sess.token,
	}

	if er := t.Refresh(); er != nil {
		return er
	}

	res, er := t.Client().Get("https://api.guildwars2.com/v2/account")
	if er != nil {
		return er
	}

	w.Header().Set("Content-Type", "application/json")
	io.Copy(w, res.Body)

	return nil
}

func rtOauthLogin(w http.ResponseWriter, r *http.Request, args []string) error {
	sessId := randomString(16)
	state := randomString(16)
	sessions[sessId] = &session{
		state: state,
	}

	http.SetCookie(w, &http.Cookie{
		Name:     sessionCookie,
		Value:    sessId,
		Path:     "/",
		Expires:  time.Now().Add(24 * time.Hour),
		HttpOnly: true,
	})

	http.Redirect(w, r, oauthConfig.AuthCodeURL(state), http.StatusFound)
	return nil
}

func rtOauthCallback(w http.ResponseWriter, r *http.Request, args []string) error {
	sess := getSession(r)
	if nil == sess {
		return fmt.Errorf("invalid session")
	}

	if r.FormValue("state") != sess.state {
		return fmt.Errorf("invalid oauth state returned (got %v, expected %v)", r.FormValue("State"), sess.state)
	}

	code := r.FormValue("code")

	log.Printf("[NEW-SESSION] Scopes: %s", r.FormValue("scopes"))

	transport := &oauth.Transport{Config: oauthConfig}
	token, er := transport.Exchange(code)
	if er != nil {
		return er
	}

	sess.token = token

	http.Redirect(w, r, "/", http.StatusFound)

	return nil
}

func rtToken(w http.ResponseWriter, r *http.Request, args []string) error {
	sess := getSession(r)
	if nil == sess {
		fmt.Fprintf(w, "you have no local session")

	} else if nil == sess.token {
		fmt.Fprintf(w, "you did not authorize this app yet")

	} else {
		fmt.Fprintf(w, "%#v", sess.token)
	}

	return nil
}

func rtOauthIcon(w http.ResponseWriter, r *http.Request, args []string) error {
	http.ServeFile(w, r, "icon.png")
	return nil
}

func rtAbout(w http.ResponseWriter, r *http.Request, args []string) error {
	fmt.Fprintf(w, "about")
	return nil
}
