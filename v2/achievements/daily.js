// Provides today's daily achievements.

// GET /v2/achievements/daily

[ "na", "eu" ]

// GET /v2/achievements/daily/{na,eu}

{
	pve : [
		{
			id    : 34,
			level : {
				min : 1,
				max : 80
			}
		},
		{
			id    : 35,
			level : {
				min : 11,
				max : 79
			}
		}
	],
	pvp : [
		...
	],
	wvw : [
		...
	]
}

// "id" corresponds to the achievement id and can be resolved
// against /v2/achievements.

// "level" is the min/max character level that this achievement
// will be attainable for. The range is includive on both ends.
