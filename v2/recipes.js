// Normal bulk-expanded endpoint
// GET /v2/recipes

[ 1, 2, 3, ... ]

// GET /v2/recipes/1
// GET /v2/recipes?id=1

{
	"type": "Refinement",
	"output_item_id": 19713,
	"output_item_count": 1,
	"min_rating": 75,
	"time_to_craft_ms": 2000,
	"disciplines": ["Artificer", "Weaponsmith", "Scribe", "Huntsman"],
	"flags": ["AutoLearned"],
	"ingredients": [{
		"item_id": 19726,
		"count": 2
	}],
	"id": 1,
	"chat_link": "[&CQEAAAA=]"
}

// GET /v2/recipes?ids=1
// GET /v2/recipes?page=0&page_size=1

[
	{
		"type": "Refinement",
		"output_item_id": 19713,
		"output_item_count": 1,
		"min_rating": 75,
		"time_to_craft_ms": 2000,
		"disciplines": ["Artificer", "Weaponsmith", "Scribe", "Huntsman"],
		"flags": ["AutoLearned"],
		"ingredients": [{
			"item_id": 19726,
			"count": 2
		}],
		"id": 1,
		"chat_link": "[&CQEAAAA=]"
	}
]
