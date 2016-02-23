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
		}
	}
]

// NOTES:
//  * "id" is only unique within a guild. It is not necessarily
//    monotonically incrementing.
//  * "members.name" should match up with entries in /v2/guild/:id/members.
//  * "members.role" is only ever one of "Captain" or "Member".
//  * "aggregate" and "ladders" match the format of /v2/pvp/stats.
