// Normal bulk-expanded endpoint with string keys; dumps
// out localized revenant legend data.

// GET /v2/legends

[ "Legend1", "Legend2", ... ]

// GET /v2/legends/Legend1
// GET /v2/legends?id=Legend1

{
	"id": "Legend1",
	"swap": 28229,
	"heal": 27220,
	"elite": 27760,
	"utilities": [28379, 27014, 26644]
}

// GET /v2/legends?page=0&page_size=1
// GET /v2/legends?ids=1

[
	{
		"id": "Legend1",
		"swap": 28229,
		"heal": 27220,
		"elite": 27760,
		"utilities": [28379, 27014, 26644]
	}
]

// NOTES:
//  * "swap" is the skill id used to swap legends (e.g., the profession skill)
//  * "heal", "elite" and "utilities" are all skill ids too.
