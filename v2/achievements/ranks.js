// Normal bulk-expanded endpoint
// GET /v2/pvp/ranks

[ 1, 2, 3, ... ]

// GET /v2/pvp/ranks/6
// GET /v2/pvp/ranks?id=6

{
	"id": 6,
	"title": "Rabbit",
	"icon": "",
	"points_required": 1500,
	"points_total": 3500,
}

// GET /v2/pvp/ranks?ids=6,7

[ /* rank 6 */, /* rank 7 */ ]

// GET /v2/pvp/ranks?page=0&page_size=2

[ /* rank 1 */, /* rank 2 */ ]
