// GET /v2/account/materials
// Authorization: Bearer oauth2-token
// Requires "account" and "inventories" scopes.
[
	{
		"id" : 19699,
		"category" : 5,
		"count" : 250
	},
	{
		"id" : 19670,
		"category" : 5,
		"count" : 0
	},
	{
		"id" : 234,
		"category" : 4,
		"count" : 3,
		"binding": "Account"
	},
	...
]
// Where "category" refers to an id fetchable via /v2/materials.
// Note that you can just grab all of the categories via
// /v2/materials?ids=all (in the language of your choice) so
// it's not a terrible number of round-trips.
//
// Array index indicates the slot; empty slots are indicated 
// with count=0. They'll still have the "id" to indicate which
// item id can be stored in them.
