// GET /v2/pvp/stats?access_token=token
// Scopes: account, pvp

[
	{
		pvp_rank : 80,
		pvp_rank_points : 1106510,
		pvp_rank_rollovoers : 4,
		aggregate : {
			wins       : 1,
			losses     : 2,
			desertions : 0,
			byes       : 2,
			forfeits   : 0
		},
		professions : {
			mesmer : {
				wins       : 0,
				losses     : 1,
				desertions : 0,
				byes       : 1,
				forfeits   : 0
			},
			thief: {
				wins       : 1,
				losses     : 1,
				desertions : 0,
				byes       : 1,
				forfeits   : 0
			}
		},
		ladders : {
			unranked : {
				wins       : 0,
				losses     : 1,
				desertions : 0,
				byes       : 0,
				forfeits   : 0
			},
			ranked : {
				wins       : 2,
				losses     : 1,
				desertions : 0,
				byes       : 2,
				forfeits   : 0
			}
		}
	}
]

// NOTES:
//  * pvp_rank_rollovers is the number of times that you've levelled
//    up since reaching rank 80. If you're not yet rank 80, it should
//    be 0.
