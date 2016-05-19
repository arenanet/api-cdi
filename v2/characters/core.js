// Subendpoint of /v2/characters that just dumps core stats. Does
// not support bulk-expansion.

// GET /v2/characters/Hello/core
// Authorization: Bearer token123
// Scopes: account, characters
//
{
	name: "Hello",
	race: "Human",
	gender: "Female",
	profession: "Thief",
	level: 80,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	created: "2015-06-05T19:45:00Z",
	age: 91, // in seconds.
	deaths: 0,
}
