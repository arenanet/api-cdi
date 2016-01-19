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

// GET /v2/recipes?ids=1,11588
// GET /v2/recipes?page=0&page_size=2

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
	},
	{
		"type": "GuildDecoration",
		"output_item_id": 75627,
		"output_item_count": 1,
		"min_rating": 25,
		"time_to_craft_ms": 1000,
		"disciplines": ["Scribe"],
		"flags": ["AutoLearned"],
		"ingredients": [{
			"item_id": 71918,
			"count": 1
		}, {
			"item_id": 76646,
			"count": 1
		}, {
			"item_id": 19710,
			"count": 5
		}],
		"guild_ingredients": [{
			"upgrade_id": 418,
			"count": 1
		}],
		"output_upgrade_id": 618,
		"id": 11588,
		"chat_link": "[&CUQtAAA=]"
	}
]
