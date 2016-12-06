// Provides a paginated list of leaderboard entries for a pvp season.
// The available boards for the season are listed in the /v2/pvp/seasons
// objects under the "leaderboards" field -- and all the configuration
// and stuff is in there too.
//
// All current seasons only have "guild" and "legendary" leaderboards
// which have slightly different outputp formats (since one's for
// individual users and the other is for guild teams).
//
// Endpoints can be paginated with ?page_size and ?page query parameters.
// They should additionally emit pagination-related headers.

// GET /v2/pvp/seasons/:id/leaderboards/legendary

[
	{
		"name" : "Lawton.1697",
		"rank" : 1,
		"date" : "2016-06-22T22:19:58Z",
		"scores" : [{
			// NOTE: id refers to the localized data in
			// leaderboard.scorings.
			"id" : "E6487336-4B5B-4BFA-9CFA-9FF232CAEF85",
			"value" : 6
		}]
	}
]

// GET /v2/pvp/seasons/:id/leaderboards/guild

[
	{
		// Guild name + id.
		"name" : "Platinum",
		"id"   : "BBE25502-92A3-E511-BFAD-78E7D159680D",

		// Guild team info. If the team or guild has been disbanded
		// this won't be available.
		"team"    : "Karen",
		"team_id" : 1,

		"rank"   : 1,
		"date"   : "2016-01-05T23:40:50Z",
		"scores" : [{
			"id"    : "16F74226-5DDF-4FE7-ADC5-72A49DA30572",
			"value" : 1350
		},{
			"id"    : "9A9CB2FD-7D73-4DFE-8FDD-A97A9C7C0B0C",
			"value" : 30
		},{
			"id"    : "9064DD25-2C75-48D6-88C9-7FAD18DC784D",
			"value" : 0
		}]
	}
]
