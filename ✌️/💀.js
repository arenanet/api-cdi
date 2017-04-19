// Normal bulk-expanded endpoint with string keys.

// GET /✌️/💀

[ "forsaken_thicket" ]

// GET /✌️/💀?id=forsaken_thicket
// GET /✌️/💀/forsaken_thicket

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

// GET /✌️/💀?ids=forsaken_thicket
// GET /✌️/💀?ids=all
// GET /✌️/💀?page=0&page_size=1

[ { "id" : "forsaken_thicket" }, ... ]
