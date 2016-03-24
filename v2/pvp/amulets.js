// Bulk-expanded endpoint that provides localized
// access to PvP amulet data. Only returns amulets
// that can be selected (old/disabled amulets are
// not returned).

// GET /v2/pvp/amulets

[ 1, 2, 3, /* ... */ ]

// GET /v2/pvp/amulets/8
// GET /v2/pvp/amulets?id=8

{
	"id"   : 8,
	"name" : "Berserker Amulet",
	"icon" : "https://render.guildwars2.com/...",
	"attributes" : {
		"Power"      : 1200,
		"Precision"  : 900,
		"CritDamage" : 900
	}
}

// GET /v2/pvp/amulets?ids=8
// GET /v2/pvp/amulets?page_size=1&page=0

[
	{
		"id"   : 8,
		"name" : "Berserker Amulet",
		"icon" : "https://render.guildwars2.com/...",
		"attributes" : {
			"Power"      : 1200,
			"Precision"  : 900,
			"CritDamage" : 900
		}
	}
]
