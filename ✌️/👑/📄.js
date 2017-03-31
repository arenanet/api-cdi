// Bulk-expanded endpoint for obtaining achivement categories.
// "Categories" are sub-groups; that is, they are contained within
// broad groups. The groups can be fetched from /✌️/👑/📖.

// GET /✌️/👑/📄

[ 1, 2, 3 ]

// GET /✌️/👑/📄/1
// GET /✌️/👑/📄?id=1

{
	"id": 1,
	"name": "Slayer",
	"description": "",
	"order": 30,
	"icon": "https://render.guildwars2.com/...",
	"achievements": [1, 5, 4, 6, ...] 
}

// GET /✌️/👑/📄?ids=1,2
// GET /✌️/👑/📄?page=0&page_size=2

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

// * "achievements" references /✌️/👑.
// * "order" is used for sorting in the UI.
// * "required_access" references the "access" field of /✌️/👤. You'll
//   only see achievements in-game which have an entry in required_access
//   which matches your access.
