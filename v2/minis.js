// Normal bulk-expanded endpoint
// GET /v2/minis

[ 1, 2, 3, ... ]

// GET /v2/minis/1
// GET /v2/minis?id=1

{
	"id" : 1,
	"name" : "Mini Orrian Wraith",
	"icon" : "https://render.guildwars2.com/...",
	"order" : 154,
	"item_id" : 20166
}

// GET /v2/minis?ids=1,2

[ /* mini 1 */, /* mini 2 */ ]

// GET /v2/minis?page=0&page_size=3

[ /* mini 1 */, /* mini 2 */, /* mini 3 */ ]

// NOTES:
// * "order" is the sort order that's used for displaying the minis in-game.
// * "item_id" is the item which unlocks the mini and can be resolved against
//   /v2/items.
