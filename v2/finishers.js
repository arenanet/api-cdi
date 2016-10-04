// Normal bulk-expanded endpoint.

// GET /v2/finishers

[ 1, 2, 3, /* ... */ ]

// GET /v2/finishers?id=42
// GET /v2/finishers/42

{
	"id": 42,
	"unlock_details": "<c=@reminder>This finisher is only available from the Black Lion Trading Company during limited-time sales.</c>",
	"unlock_items": [123],
	"order": 66,
	"icon": "https://render.guildwars2.com/...",
	"name": "Llama Finisher"
}

// GET /v2/finishers?page_size=1&page=1
// GET /v2/finishers?ids=42

[
	{
		"id": 42,
		"unlock_details": "<c=@reminder>This finisher is only available from the Black Lion Trading Company during limited-time sales.</c>",
		"unlock_items": [123],
		"order": 66,
		"icon": "https://render.guildwars2.com/...",
		"name": "Llama Finisher"
	}
]

// NOTE: unlock_items refers to /v2/items.
