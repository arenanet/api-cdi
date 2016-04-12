// Normal bulk-expanded endpoint; supports localization.
// GET /v2/titles

[ 1, 2, 3, ... ]

// GET /v2/titles/6
// GET /v2/titles?id=6

{
	"id": 6,
	"name": "Closer to the Stars"
}

// GET /v2/titles?ids=6,7
// GET /v2/titles?page_size=2&page=0

[
	{
		"id": 6,
		"name": "Closer to the Stars"
	},
	{
		"id": 7,
		"name": "Ghostly Hero"
	}
]
