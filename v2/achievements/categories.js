// Bulk-expanded endpoint for obtaining achivement categories.
// "Categories" are sub-groups; that is, they are contained within
// broad groups. The groups can be fetched from /v2/achievement/groups.

// GET /v2/achievement/categories

[ 1, 2, 3 ]

// GET /v2/achievement/categories/1
// GET /v2/achievement/categories?id=1

{
	"id": 1,
	"name": "Slayer",
	"description": "",
	"order": 30,
	"icon": "https://render.guildwars2.com/...",
	"achievements": [1, 5, 4, 6, ...] 
}

// GET /v2/achievements/categories?ids=1,2
// GET /v2/achievements/categories?page=0&page_size=2

[
	{
		"id": 1,
		"name": "Slayer",
		"description": "",
		"order": 30,
		"icon": "https://render.guildwars2.com/...",
		"achievements": [1, 5, 4, 6, ...] 
	},
	{
		"id": 2,
		"name": "Hero",
		"description": "",
		"order": 40,
		"icon": "https://render.guildwars2.com/...",
		"achievements": [134, 9, 137, ...]
	}
]

// "achievements" references /v2/achievements.
// "order" is used for sorting in the UI.
