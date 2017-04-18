// GET /v2/characters/Hello/recipes
// Authorization: Bearer oauth2-token
// Requires "account", "characters" and "inventories" permissions.

// NOTE: This endpoint pre-dates account-wide recipe unlocks;
// consider using /v2/account/recipes instead.

{
	"recipes" : [
		1, 2, 3
	]
}
