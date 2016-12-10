// Normal bulk-expanded endpoint; supports localization.
// GET /v2/titles

[ 1, 2, 3, ... ]

// GET /v2/titles/6
// GET /v2/titles?id=6

{
	"id"           : 6,
	"name"         : "Closer to the Stars",
	"achievement"  : 42 // deprecated field
	"achievements" : [42]
}

// GET /v2/titles?ids=6,7,167
// GET /v2/titles?page_size=3&page=0

[
	{
		"id"           : 6,
		"name"         : "Closer to the Stars",
		"achievement"  : 42, // deprecated
		"achievements" : [42]
	},
	{
		"id"           : 7,
		"name"         : "Ghostly Hero",
		"achievement"  : 43, // deprecated
		"achievements" : [43]
	},
	{
		"id"          : 167,
		"name"        : "Wondrous Achiever",
		"ap_required" : 30000
	}
]
