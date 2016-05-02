// Normal bulk-expanded endpoint for dumping story seasons
// which are broad categories for stories (e.g., the collapsable
// headings in the story tab of the hero panel).

// GET /v2/seasons

[ "215AAA0F-CDAC-4F93-86DA-C155A99B5784", /* ... */ ]

// GET /v2/seasons/A515A1D3-4BD7-4594-AE30-2C5D05FF5960
// GET /v2/seasons?id=A515A1D3-4BD7-4594-AE30-2C5D05FF5960

{
	"id": "A515A1D3-4BD7-4594-AE30-2C5D05FF5960",
	"name": "Living World Season 2",
	"order": 2000,
	"stories": [1, 2, 3]
}

// GET /v2/seasons?ids=A515A1D3-4BD7-4594-AE30-2C5D05FF5960
// GET /v2/seasons?page_size=1&page=0

[{
	"id": "A515A1D3-4BD7-4594-AE30-2C5D05FF5960",
	"name": "Living World Season 2",
	"order": 2000,
	"stories": [4, 5, 6]
}]
