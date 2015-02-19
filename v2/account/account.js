// GET /v2/account
// Authorization: Bearer oauth2-token

// With the "account" scope:
{
	"id"    : "account-guid",
	"name"  : "Lawton.1234",
	"world" : 1007
}

// With the "account" and "inventories" scopes:
{
	"id"        : "account-guid",
	"name"      : "Lawton.1234",
	"world"     : 1007
	"bank"      : [
		{
			"id"       : 19699,
			"slot"     : 1,
			"count"    : 250
		},
		{
			"id"       : 30692,
			"slot"     : 2,
			"count"    : 1,
			"upgrades" : [ 24607 ]
		}
	],
	"materials" : [
		{
			"id"       : 19699,
			"slot"     : 1,
			"count"    : 250
		}
	]
}

