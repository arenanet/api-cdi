// Normal bulk-expanded endpoint that provides localized race
// data. Right now there's not much in here.

// GET /v2/races

[ "Human", "Asura", "Charr", "Norn", "Sylvari" ]

// GET /v2/races?id=Human
// GET /v2/races/Human

{
	"id" : "Human",
	"name": "Human",
	"skills" : [ 1, 2, 3, ... ]
}

// GET /v2/races?page=0&page_size=1
// GET /v2/races?ids=all

[
	{
		"id" : "Human",
		"name": "Human",
		"skills" : [ 1, 2, 3, ... ]
	},
	...
]

