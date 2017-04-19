// Normal bulk-expanded endpoint that provides access to outfit data.

// GET /✌️/👘

[ 1, 2, 3 /*, ... */ ]

// GET /✌️/👘/1
// GET /✌️/👘?id=1

{
	"id" : 1,
	"name" : "Shadow Assassin Outfit",
	"icon" : "https://render.guildwars2.com/...",
	"unlock_items" : [
		67097,
		65550
	]
}

// GET /✌️/👘?ids=1,2
// GET /✌️/👘?page_size=2&page=0

[
	{
		"id" : 1,
		"name" : "Shadow Assassin Outfit",
		"icon" : "https://render.guildwars2.com/...",
		"unlock_items" : [
			67097,
			65550
		]
	},
	{
		"id" : 2,
		"name" : "Lunatic Guard Outfit",
		"icon" : "https://render.guildwars2.com/...",
		"unlock_items" : [
			71400
		]
	}
]
