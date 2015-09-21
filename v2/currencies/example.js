// Normal bulk-expanded endpoint that dumps the metadata associated
// with currencies which appear in the currency window.

// GET /v2/currencies
[ 1, 2, 3, 4, ... ]

// GET /v2/currencies/5
{
	id          : 5,
	name        : "Ascalonian Tear",
	description : "Earned in Ascalonian Catacombs. Spent in ...",
	order       : 110,
	icon        : "https://render.guildwars2.com/..."
}
// order is an arbitrary number indicating what order the currencies
// are sorted in-game; lowest currencies come first.

// Also supports the ?lang parameter to get the localized names.

// GET /v2/currencies?ids=all&lang=en
[
	{
		id          : 5,
		name        : "Ascalonian Tear",
		description : "Earned in Ascalonian Catacombs. Spent in ...",
		order       : 110,
		icon        : "https://render.guildwars2.com/..."
	},
	...
]
