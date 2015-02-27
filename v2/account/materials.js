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
