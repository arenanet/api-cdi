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
	],
	"tiers"       : [
		{
			"count"  : 10,
			"points" : 1
		},
		{
			"count"  : 100,
			"points" : 5
		}
	],
	"rewards"     : [
		{
			"type"  : "Item",
			"id"    : 30001,
			"count" : 1
		},
		{
			"type"   : "Mastery",
			"region" : "Tyria"
		}
	],
	"bits"        : [
		{
			"type" : "Text",
			"text" : "Mission Complete"
		},
		{
			"type" : "Item",
			"id"   : 47496
		}
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

// "tiers.n.count" is the number of <things> needed to reach this
// tier. "tiers.n.points" is the non-cumulative AP awarded for reaching
// the tier.

// "flags" can contain:
//  * "Pvp" -- can only get progress in PvP or WvW
//  * "CategoryDisplay" -- is a meta achievement
//  * "MoveToTop" -- affects in-game UI collation
//  * "IgnoreNearlyComplete" -- doesn't appear in the "nearly complete" UI

// "bits.n.type" can be:
//  * "Text" -- Gives a short description of the bit in "text"
//  * "Item" -- Requires an item to be consumed or acquired
//  * "Skin" -- Requires a skin to be unlocked
//  * "MiniPet" -- Requires a minipet to be unlocked
