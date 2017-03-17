// Bulk-expanded endpoint that provides access to journal story episodes.

// GET /v2/journal/episodes

[ 1, 2, 3 ]

// GET /v2/journal/episodes/1
// GET /v2/journal/episodes?id=1

{
	"id" : 1,
	"name" : "My Story",
	"description" : "",
	"timeline" : "1325 AE",
	"required_level" : 1,
	"required_race" : "Charr",
	"season" : "215AAA0F-CDAC-4F93-86DA-C155A99B5784",
	"sort" : 0,
	"chapters" : [
		{
			"name" : "1. Getting the Band Back Together"
		},
		{
			"name" : "2. Sins of the Father"
		},
		{
			"name" : "3. Crystal Corruption"
		}
	]
}

// GET /v2/journal/episodes?ids=1
// GET /v2/journal/episodes?page=0&page_size=1

[
	{ /* episode 1 */ }
]
