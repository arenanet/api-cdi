// GET /v2/story

[ 111101, 111102 ]

// GET /v2/story/111102
// GET /v2/story?id=111102

// "maps" should contain the IDs for /v2/maps
// Instead of "locations" one could specify the starting location similar to /v1/event_details
{
	"id": 111102,
	"name": "Snaff Would Be Proud",
	"level": 10,
	"locations": ["The Hinterlabs", "Jeztar Falls"],
	"maps": ["Metrica Province"],
	"flags": ["Asura", "Statics"],
	"achievements": [],
	"followed_by": [111103]
}

// GET /v2/story?ids=111101,111102,111202,112102,310001

// "achievements" should contain the IDs for /v2/achievements
[
	{
		"id": 111101,
		"name": "Explosive Intellect",
		"level": 1,
		"locations": ["The Hinterlabs"],
		"maps": ["Metrica Province"],
		"flags": ["Asura"],
		"achievements": [],
		"followed_by": [111102, 111202, 111302]
	},
	{
		"id": 111102,
		"name": "Snaff Would Be Proud",
		"level": 10,
		"locations": ["The Hinterlabs", "Jeztar Falls"],
		"map": ["Metrica Province"],
		"flags": ["Asura", "Statics"],
		"achievements": [],
		"followed_by": [111103]
	},
	{
		"id": 111202,
		"name": "In Snaff's Footsteps",
		"level": 10,
		"locations": [],
		"flags": ["Asura", "Dynamics"],
		"achievements": [],
		"followed_by": [111203]
	},
	{
		"id": 112102,
		"name": "Chain of Command",
		"level": 10,
		"locations": ["Hero's Canton", "Tela Range"],
		"maps": ["Black Citadel", "Plains of Ashford"],
		"flags": ["Charr", "Blood Legion"],
		"achievements": [],
		"followed_by": [112103]
	},
	{
		"id": 310001,
		"name": "Disturbance in Brisban Wildlands",
		"level": 80,
		"locations": ["Tangle Root"],
		"maps": ["Brisbane Wildlands"],
		"flags": [],
		"achievements": ["No One Left Behind", "No Shocks Here", "A Shocking Development"],
		"followed_by": [310002]
	}
]
