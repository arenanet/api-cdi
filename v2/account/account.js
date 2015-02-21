// GET /v2/account
// Authorization: Bearer oauth2-token
// Requires "account" scope.
{
	"id"    : "account-guid",
	"name"  : "Lawton.1234",
	"world" : 1007
}

// GET /v2/account/bank
// Authorization: Bearer oauth2-token
// Requires "account" and "inventories" scopes.
[
	{
		"id"       : 19699,
		"count"    : 250
	},
	{
		"count"    : 0
	},
	{
		"id"       : 19699,
		"count"    : 12 
	},
	{
		"id"       : 30692,
		"count"    : 1,
		"upgrades" : [ 24607 ]
	}
]
// Slot is indicated by array index; the number of slots is
// implied by the length of the array. Empty slots are shown
// with count=0 and id=undefined.

// GET /v2/account/materials
// Authorization: Bearer oauth2-token
// Requires "account" and "inventories" scopes.
[
	{
		"id" : 19699,
		"type" : "common",
		"count" : 250
	},
	{
		"id" : 19670,
		"type" : "common",
		"count" : 0
	},
	{
		"id" : 234,
		"type" : "fine",
		"count" : 3
	}
]
// Where "type" is one of:
//
//  * "common"
//  * "fine"
//  * "rare"
//  * "ascended"
//  * "jewels"
//  * "cooking"
//  * "festive"
//
// And indicates the category the material is stored in.
//
// Array index indicates the slot; empty slots are indicated 
// with count=0.
