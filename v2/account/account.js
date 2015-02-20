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
			"slot"     : 0,
			"count"    : 250
		},
		{
			"id"       : 19699,
			"slot"     : 1,
			"count"    : 12 
		},
		{
			"id"       : 30692,
			"slot"     : 4,
			"count"    : 1,
			"upgrades" : [ 24607 ]
		}
	],
	"materials" : [
		{
			"id"       : 19699,
			"count"    : 250
		}
	]
}

// Note that the "bank" array is sparse -- any empty
// slots are simply omitted from the result set. Slots
// are 0-indexed. The "materials" objects do not include
// slots as they cannot be re-ordered.
