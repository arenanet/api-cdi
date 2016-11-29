// Normal bulk-expanded endpoint
// GET /v2/wvw/ranks

[ 1, 2, 3, ... ]

// GET /v2/wvw/ranks/6
// GET /v2/wvw/ranks?id=6

{
	"id": 6,
	"title": "Soldier",
	"min_rank": 30
}

// GET /v2/wvw/ranks?ids=6,7

[ /* rank 6 */, /* rank 7 */ ]

// GET /v2/wvw/ranks?page=0&page_size=2

[ /* rank 1 */, /* rank 2 */ ]
