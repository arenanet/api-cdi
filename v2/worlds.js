// Normal bulk-expanded endpoint that dumps out the list
// of GW2 worlds and associated metadata.

// GET /v2/worlds
[ 1001, 1002, 1003, ... ]

// GET /v2/worlds/1001
{
	"id": 1001,
	"name": "Anvil Rock"
	"population": "Medium"
}

// GET /v2/worlds?page=0&page_size=3
// GET /v2/worlds?ids=1001,1002,1003
[
	{
		"id": 1001,
		"name": "Anvil Rock",
		"population": "High"
	},
	{
		"id": 1002,
		"name": "Borlis Pass"
		"population": "VeryHigh"
	},
	{
		"id": 1003,
		"name": "Yak's Bend"
		"population": "Full"
	}

]

// Population is one of "Low", "Medium", "High", "VeryHigh", "Full".
