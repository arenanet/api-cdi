// GET /v2/story/chapters

[ 1111, 1112, 1211, 3100, 3200 ]

// GET /v2/story/chapters/111
// GET /v2/story/chapters?id=111

{
	"id": 1111,
	"name": "Experiments Gone Wrong",
	"missions": [111101, 111102]
}

// GET /v2/story/chapters?ids=1111,1112,1211,3100,3200

[
	{
		"id": 1111,
		"name": "Experiments Gone Wrong",
		"missions": [111101, 111102]
	},
	{
		"id": 1112,
		"name": "Experiments Gone Wrong",
		"missions": [111101, 111202]
	},
	{
		"id": 1121,
		"name": "Getting the Band Back Together",
		"missions": [112101, 112102]
	},
	{
		"id": 3100,
		"name": "Gates of Maguuma",
		"missions": [310001, 310002]
	},
	{
		"id": 3200,
		"name": "Entanglement",
		"missions": [320001, 320002]
	}
]
