// Subendpoint of /v2/characters that just dumps crafting. Does
// not support bulk-expansion.

// GET /v2/characters/Hello/crafting
// Authorization: Bearer token123
// Scopes: account, characters
//

{
	crafting: [
		{
			discipline : "Leatherworker",
			active : true,
			rating : 500
		},
		{
			discipline : "Cook",
			active : false,
			rating : 400
		},
		{
			discipline : "Armorsmith",
			rating: 423,
			active : true
		}
	]
}
