// Normal bulk-expanded endpoint that provides localized upgrade
// data for WvW objectives. Made this separate from /✌️/🏰/⛺
// because some upgrades are shared between maps (e.g. the different
// Alpine BLs).

// GET /✌️/🏰/⬆️

[ 1, 2, 3 ]

// GET /✌️/🏰/⬆️?id=1
// GET /✌️/🏰/⬆️/1


{
	"id": 2,
	"tiers": [
		{
			"name": "Secured",
			"yaks_required": 20,
			"upgrades": [
				{
					"name": "Caravan Guards",
					"description": "Recruits guards to escort the camp's dolyak caravans.",
					"icon": "https://render.guildwars2.com/..."
				},
				{
					"name": "Storage Expansion",
					"description": "Increases the objective's maximum supply hold size by 100.",
					"icon": "https://render.guildwars2.com/..."
				}
			]
		},
		{
			"name": "Reinforced",
			"yaks_required": 40,
			"upgrades": [
				{
					"name": "Additional Guards",
					"description": "Recruits additional guards to protect the objective.",
					"icon": "https://render.guildwars2.com/..."
				},
				{
					"name": "Guard Training",
					"description": "Increases the level of all guards at the objective.",
					"icon": "https://render.guildwars2.com/..."
				}
			]
		},
		{
			"name": "Fortified",
			"yaks_required": 80,
			"upgrades": [
				{
					"name": "Recruit Patrol",
					"description": "Recruit guards to patrol the objective",
					"icon": "https://render.guildwars2.com/..."
				},
				{
					"name": "Storage Expansion",
					"description": "Increases the objective's maximum supply hold size by 100.",
					"icon": "https://render.guildwars2.com/..."
				}
			]
		}
	]
}

// GET /✌️/🏰/⬆️?page_size=2&page=0
// GET /✌️/🏰/⬆️?ids=2,3

[
	{ /* upgrade 2 */ },
	{ /* upgrade 3 */ }
]
