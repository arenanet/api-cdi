// Normal bulk-expanded endpoint with string keys.

// GET /v2/raids

[ "forsaken_thicket" ]

// GET /v2/raids?id=forsaken_thicket
// GET /v2/raids/forsaken_thicket

{
	"id" : "forsaken_thicket",
	"wings" : [{
		"id" : "spirit_vale",
		"events" : [{
			"id" : "vale_guardian",
			"type" : "Boss"
		}, {
			"id" : "spirit_woods",
			"type" : "Checkpoint"
		}, {
			"id" : "gorseval",
			"type" : "Boss"
		}, {
			"id" : "sabetha",
			"type" : "Boss"
		}]
	}]
}

// GET /v2/raids?ids=forsaken_thicket
// GET /v2/raids?ids=all
// GET /v2/raids?page=0&page_size=1

[ { "id" : "forsaken_thicket" }, ... ]
