// Endpoint for fetching guild storage.

// GET /v2/guild/:id/storage
// * Requires API key from a guild leader with "guild" permission.
// * Returns a list of stored guild upgrades (resolve against
//   /v2/guild/upgrades).

[
	{ "id" : 42, "count" : 100 },
	{ "id" : 9, "count" : 3 },
	// ...
]
