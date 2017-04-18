// GET /v2/pvp/standings?access_token=token
// Scopes: account, pvp

[
	{
		current : {
			total_points : 101,
			division     : 4,
			tier         : 1,
			points       : 1,
			repeats      : 0,
			rating       : 845,
			decay        : 100
		},
		best : {
			total_points : 200,
			division     : 5,
			tier         : 4,
			points       : 0,
			repeats      : 2
		},
		season_id : "44B85826-B5ED-4890-8C77-82DDF9F2CF2B"
	}
]

// NOTES: 
//  * "current" is the total number of pips/points in the specified
//    and effectively reports the current standing as seen in-game.
//  * "best" is the highest "current" that this account has achieved
//    in the given season. In the above example, my legendary division
//    account has fallen back to ruby in an exceptional losing streak.
//  * "season_id" references /v2/pvp/seasons.
//  * "division" and "tier" are both 0-indexed and refer to the 
//    data returned by /v2/pvp/seasons, e.g., division index 1 of
//    season 1 is "Division 2: Sapphire".
//  * "repeats" refers to the number of times the account has maxed out
//    the "Repeat" division (typically the last one in a season, e.g.
//    Legendary in season 1).
//  * "rating" and "decay" should be set for pvp season 5 and later.
//    they contain your current skill rating and rating decay,
//    respectively.
//
// In the event that the data looks wrong, "total_points" is the
// authoriative field; the others are provided for convenience.
