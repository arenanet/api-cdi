// GET /v2/characters/Hello
// Authorization: Bearer token123
// Scopes: account, progression

// story.selected is the currently selected story mission
// story.storylines indicates the maximum progress in any of the storylines
// story.flags indicates the choices made at various times
{
	"name": "Hello",
	"race": "Human",
	"gender": "Female",
	"profession": "Thief",
	"level": 80,
	"story": {
		"selected": 310001,
		"storylines": [181101, 230001, 310001],
		"flags": ["Human", "Commoner", "Vigil"]
	}
}

