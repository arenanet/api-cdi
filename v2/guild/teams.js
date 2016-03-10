// Authenticated endpoint that outputs guild team info.
// **only available with keys from guild leaders for now**
// Requires scope: "guilds"

[
	{
		"id" : 1,
		"members" : [
			{
				"name" : "Lawton.9413",
				"role" : "Captain"
			},
			{
				"name" : "NotLawton.3149",
				"role" : "Member"
			}
		],
		"name" : "1v1 Me Bro",
		"aggregate" : {
			"wins"       : 3,
			"losses"     : 0,
			"desertions" : 0,
			"byes"       : 0,
			"forfeits"   : 0
		},
		"ladders" : {
			"unranked" : {
				"wins"       : 3,
				"losses"     : 0,
				"desertions" : 0,
				"byes"       : 0,
				"forfeits"   : 0
			}
		},
		"games" : [
			{
				"id": "98EBE4DC-E36B-4A6C-A38C-A5B898AF53A4",
				"map_id": 549,
				"started": "2015-08-29T13:42:45.000Z",
				"ended": "2015-08-29T13:53:49.000Z",
				"result": "Victory",
				"team": "Blue",
				"scores": {
					"red": 344,
					"blue": 500
				},
				"rating_type" : "Ranked"
			}
		]
	}
]

// NOTES:
//  * "id" is only unique within a guild. It is not necessarily
//    monotonically incrementing.
//  * "members.name" should match up with entries in /v2/guild/:id/members.
//  * "members.role" is only ever one of "Captain" or "Member".
//  * "aggregate" and "ladders" match the format of /v2/pvp/stats.
//  * "games" matches the format of /v2/pvp/games with profession omitted.
