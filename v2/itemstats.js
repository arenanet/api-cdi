// Bulk-expanded endpoint that provides access to 
// "item stat" objects -- these are basically the
// prefixes that define the attribute ratios for
// items.

// GET /v2/itemstats

[ 161, 162, /* ... */ ]

// GET /v2/itemstats/161
// GET /v2/itemstats?id=161

{
	"name" : "Berserker's",
	"attributes" : {
		"Power"      : 0.35,
		"Precision"  : 0.25,
		"CritDamage" : 0.25
	}
}

// GET /v2/itemstats?page=0&page_size=1
// GET /v2/itemstats?ids=161

[
	{
		"name" : "Berserker's",
		"attributes" : {
			"Power"      : 0.35,
			"Precision"  : 0.25,
			"CritDamage" : 0.25
		}
	}
]

// NOTES:
//  * "attributes" contains the multipliers; these are combined
//    with the item level, rarity, and some additional look-up
//    tables to get the final stat amounts. Since we don't currently
//    provide the other bits, they're only useful for relative
//    comparisons (e.g., Berserker's vs. Celestial). The absolute
//    attribute values are provided in itemstack objects (e.g.
//    when fetched from a character's inventory or bank).
