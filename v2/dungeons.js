// Normal bulk-expanded endpoint; has string keys, supports ?ids=all.

// GET /v2/dungeons

[ "ascalonian_catacombs", "cadecus_manor", ... ]

// GET /v2/dungeons/twilight_arbor
// GET /v2/dungeons?id=twilight_arbor

{
	"id" : "twilight_arbor",
	"paths" : [
		"leurent",
		"vevina",
		"aetherpath"
	]
}

// GET /v2/dungeons?ids=twilight_arbor
// GET /v2/dungeons?page=0&page_size=1

[
	{
		"id" : "twilight_arbor",
		"paths" : [
			"leurent",
			"vevina",
			"aetherpath"
		]
	}
]
