// Normal bulk-expanded endpoint
// GET /v2/pvp/ranks

[ 1, 2, 3, ... ]

// GET /v2/pvp/ranks/1
// GET /v2/pvp/ranks?id=1

{
  "id": 1,
  "finisher_id": 1,
  "name": "Rabbit",
  "icon": "https://render.guildwars2.com/...",
  "min_rank": 1,
  "max_rank": 9,
  "levels": [
    {
      "min_rank": 1,
      "max_rank": 5,
      "points": 500
    },
    {
      "min_rank": 6,
      "max_rank": 9,
      "points": 1500
    }
  ]
}

// GET /v2/pvp/ranks?ids=6,7

[ /* rank 6 */, /* rank 7 */ ]

// GET /v2/pvp/ranks?page=0&page_size=2

[ /* rank 1 */, /* rank 2 */ ]
