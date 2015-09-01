// Normal bulk-expanded endpoint
// GET /v2/colors

[ 1, 2, 3, ... ]

// GET /v2/colors/6
// GET /v2/colors?id=6

{
	"id": 6,
	"name": "Celestial",
	"base_rgb": [
		128,
		26,
		26
	],
	"cloth": {
		"brightness": 52,
		"contrast": 1.44531,
		"hue": 10,
		"saturation": 0.0234375,
		"lightness": 1.5625,
		"rgb": [
			211,
			208,
			207
		]
	},
	"leather": {
		"brightness": 52,
		"contrast": 1.44531,
		"hue": 10,
		"saturation": 0.0234375,
		"lightness": 1.5625,
		"rgb": [
			211,
			208,
			207
		]
	},
	"metal": {
		"brightness": 52,
		"contrast": 1.91406,
		"hue": 10,
		"saturation": 0.0234375,
		"lightness": 1.91406,
		"rgb": [
			197,
			193,
			192
		]
	},
	"item": 20359,
	"categories": [
		"Gray",
		"Metal",
		"Rare"
	]
}

// Possible categories:
// Hue: ["Gray", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
// Material: ["Vibrant", "Leather", "Metal"]
// Rarity: ["Starter", "Common", "Uncommon", "Rare"]

// GET /v2/colors?ids=6,7

[ /* color 6 */, /* color 7 */ ]

// GET /v2/colors?page=0&page_size=2

[ /* color 1 */, /* color 2 */ ]
