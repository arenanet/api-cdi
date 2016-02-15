// GET /v2/pvp/standings?access_token=token
// Scopes: account, pvp

[
	{
		current : {
			total_points : 101,
			division     : 4,
			tier         : 1,
			points       : 1,
			repeats      : 0
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
//
// In the event that the data looks wrong, "total_points" is the
// authoriative field; the others are provided for convenience.
