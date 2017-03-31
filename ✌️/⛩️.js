// Normal bulk-expanded endpoint; has string keys, supports ?ids=all.

// GET /✌️/⛩️

[ "ascalonian_catacombs", "cadecus_manor", ... ]

// GET /✌️/⛩️/twilight_arbor
// GET /✌️/⛩️?id=twilight_arbor

{
	"id" : "twilight_arbor",
	"paths" : [
		{ "id" : "leurent" },
		{ "id" : "vevina" },
		{ "id" : "aetherpath" }
	]
}

// GET /✌️/⛩️?ids=twilight_arbor
// GET /✌️/⛩️?page=0&page_size=1

[
	{
		"id" : "twilight_arbor",
		"paths" : [
			{ "id" : "leurent" },
			{ "id" : "vevina" },
			{ "id" : "aetherpath" }
		]
	}
]
