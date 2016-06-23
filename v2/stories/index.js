// Normal bulk-expanded endpoint for dumping story data. Stories
// are the sub-entries in the story tab of the hero panel.

// GET /v2/stories

[ 1, 2, 3, /* ... */ ]

// GET /v2/stories/1
// GET /v2/stories?id=1

{
	"id": 1,
	"season": "215AAA0F-CDAC-4F93-86DA-C155A99B5784",
	"name": "My Story",
	"description": "",
	"timeline": "1325 AE",
	"level": 1,
	"races": ["Charr"],
	"order": 0,
	"chapters": [{
		"name": "1. Getting the Band Back Together"
	}, {
		"name": "2. Sins of the Father"
	}, {
		"name": "3. Crystal Corruption"
	}]
}

// GET /v2/stories?page_size=2&page=0
// GET /v2/stories?ids=1,15

[{
	"id": 1,
	"season": "215AAA0F-CDAC-4F93-86DA-C155A99B5784",
	"name": "My Story",
	"description": "",
	"timeline": "1325 AE",
	"level": 1,
	"races": ["Charr"],
	"order": 0,
	"chapters": [{
		"name": "1. Getting the Band Back Together"
	}, {
		"name": "2. Sins of the Father"
	}, {
		"name": "3. Crystal Corruption"
	}]
}, {
	"id": 15,
	"season": "A515A1D3-4BD7-4594-AE30-2C5D05FF5960",
	"name": "3. The Dragon's Reach, Part 1",
	"description": "With an Elder Dragon's corruption spreading, the heroes of Tyria set out in an attempt to gather allies to meet this new threat. But with problems of their own close to home, will world leaders add their support or just introduce more challenges?",
	"timeline": "1327 AE",
	"level": 80,
	"order": 2020,
	"chapters": [],
	"flags": ["RequiresUnlock"]
}]

// NOTES:
//  * "season" refers to /v2/stories/seasons
