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
		"required_access": ["GuildWars2", "HeartOfThorns"]
	},
	{
		"id": 2,
		"name": "Hero",
		"description": "",
		"order": 40,
		"icon": "https://render.guildwars2.com/...",
		"achievements": [134, 9, 137, ...]
		"required_access": ["GuildWars2", "HeartOfThorns"]
	}
]

// * "achievements" references /v2/achievements.
// * "order" is used for sorting in the UI.
// * "required_access" references the "access" field of /v2/account. You'll
//   only see achievements in-game which have an entry in required_access
//   which matches your access.
