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
	"locked_text" : "A text string about how to unlock this",
	"type"        : "Default",
	"flags"       : [
		"Pvp",
		"Daily"
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
			"region" : "Tyria",
			"id"     : 123
		},
		{
			"type"   : "Title",
			"id"     : 6 // references /v2/titles.
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

// GET /v2/achievements?id=2

{
	"id" : 2,
	"icon" : "https://render.guildwars2.com/...",
	"name" : "Some Repeatable Achievement",
	"description" : "Asdf.",
	"requirement" : "You must asdf.",
	"locked_text" : "",
	"type"        : "Default",
	"flags"       : [
		"Pvp",
		"Permanent",
		"Repeatable"
	],
	"tiers"       : [
		{
			"count"  : 200,
			"points" : 5
		}
	],
	"prerequisites" : [
		1
	],
	"point_cap": 250
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
	    "locked_text" : "",
	    "type"        : "Default",
	    "flags"       : [
		"Pvp",
		"Daily"
	    ]

	}
]

// GET /v2/achievements?ids=98,121,129,1681

[
	{
		"id"        : 98,
		"name"      : "To Know the Unknown",
		"tiers"     : [{"count":1,"points":10}],
		"tier_text" : "Story Achievement"
	},
	{
		"id"        : 121,
		"name"      : "Dungeons Discovered",
		"tiers"     : [{"count":1,"points":5},...,{"count":8,"points":5}],
		"tier_text" : "%str1% Dungeon Story[pl:\"Stories\"] Complete"
	},
	{
		"id"        : 129,
		"name"      : "Agent of Entropy",
		"tiers"     : [{"count":200,"points":2}],
		"tier_text" : "%str1%/%str2% Items Salvaged"
	},
	{
		"id"        : 1681,
		"name"      : "Birthday—Year 1",
		"tiers"     : [{"count":1,"points":1}],
		"tier_text" : ""
	}
]

// "type" is either "Default" or "ItemSet".

// "tiers.n.count" is the number of <things> needed to reach this
// tier. "tiers.n.points" is the non-cumulative AP awarded for reaching
// the tier.

// "tier_text" is the format text for each tier. 
// "%str1%" is current count and "%str2%" is final count.

// "point_cap" is the maximum number of AP that may be awarded by
// a repeatable achievement.

// "flags" can contain:
//  * "Pvp" -- can only get progress in PvP or WvW
//  * "CategoryDisplay" -- is a meta achievement
//  * "MoveToTop" -- affects in-game UI collation
//  * "IgnoreNearlyComplete" -- doesn't appear in the "nearly complete" UI
//  * "Repeatable" -- can be repeated multiple times.
//  * "RequiresUnlock" -- requires an item to unlock.
//  * "Hidden" -- is a hidden achievement.
//  * "Daily" -- progress resets with daily reset.
//  * "Weekly" -- progress resets with weekly reset.
//  * "Monthly" -- progress resets with monthly reset.
//  * "Permanent" -- progress never resets.

// "bits.n.type" can be:
//  * "Text" -- Gives a short description of the bit in "text"
//  * "Item" -- Requires an item to be consumed or acquired
//  * "Skin" -- Requires a skin to be unlocked
//  * "MiniPet" -- Requires a minipet to be unlocked
