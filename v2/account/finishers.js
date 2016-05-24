// Authenticated endpoint that dumps an account's finisher
// unlocks. Requires the "account" and "unlocks" permissions.

// GET /v2/account/finishers?access_token=$APIKEY

[
	{
		"id" : 1,
		"permanent" : true
	},
	{
		"id" : 42,
		"permanent" : true
	},
	{
		"id" : 28,
		"permanent" : false,
		"quantity" : 50
	}
]
