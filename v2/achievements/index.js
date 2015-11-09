// Normal bulk-expanded endpoint for fetching achievements.

// GET /v2/achievements

[ 1, 2, 3 ]

// GET /v2/achievements/1

{
	"id"          : 1,
	"icon"        : "https://render.guildwars2.com/...",
	"name"        : "Some Achievement",
	"description" : "A short text string about this achievement",
	"requirement" : "What's displayed in-game about the requirements for this",
	"type"        : "Default",
	"flags"       : [
		"Pvp"
	]
}

// GET /v2/achievements?ids=1
// GET /v2/achievements?page=0&page_size=1

[
	{

	    "id"          : 1859,
	    "icon"        : "https://render.guildwars2.com/...",
	    "name"        : "Daily WvW Caravan Disruptor",
	    "description" : "Cut off the enemy supply chain in the Mists.",
	    "requirement" : "Destroy  enemy supply caravan in World versus World.",
	    "type"        : "Default",
	    "flags"       : [
		"Pvp"
	    ]

	}
]

// "type" is either "Default" or "ItemSet".

// "flags" can contain:
//  * "Pvp" -- can only get progress in PvP or WvW
//  * "CategoryDisplay" -- is a meta achievement
//  * "MoveToTop" -- affects in-game UI collation
//  * "IgnoreNearlyComplete" -- doesn't appear in the "nearly complete" UI

