GW2 APIs w/ OAuth2 (in Node)
===========================

1. Install NodeJS if you don't have it
2. From that folder open a command prompt
3. Type `npm i`
4. Once the modules are installed, type `node authorize.js`
5. Login to the account site (if necessary)
6. Approve the app
7. Copy the value of the `code` param from the URL (it won't load, that's fine)
11. Type `node request.js <code>` where `<code>` is the param value from the previous step
12. Assuming everything worked, watch your account details be logged to the console

## Depends on

* [oauth](https://www.npmjs.com/package/oauth)
* [open](https://www.npmjs.com/package/open)
