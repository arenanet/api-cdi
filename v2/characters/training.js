// Sub-endpoint that dumps only the .training field of /v2/characters
// Requires the "characters" and "builds" scopes.

// GET /v2/characters/:id/training

{
	training : [
		{
			id: 60,
			spent: 20,
			done: true
		},
		{
			id: 58,
			spent: 26,
			done: false
		}
	]
}

// NOTES:
// * training.id references /v2/professions.training
