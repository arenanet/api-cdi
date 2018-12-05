// Bulk-expanded endpoint that exposes PvP season data. Supports
// localization via the ?lang parameter.

// GET /v2/pvp/seasons

[ "44B85826-B5ED-4890-8C77-82DDF9F2CF2B" ]

// GET /v2/pvp/seasons?id=44B85826-B5ED-4890-8C77-82DDF9F2CF2B
// GET /v2/pvp/seasons/44B85826-B5ED-4890-8C77-82DDF9F2CF2B

{
    "id": "44B85826-B5ED-4890-8C77-82DDF9F2CF2B",
    "name": "PvP League Season One",
    "start": "2016-02-23T00:00:00.000Z",
    "end": "2016-04-18T07:00:00.000Z",
    "active": false,
    "divisions": [
        {
            "name": "Division 1: Amber",
            "flags": [],
            "large_icon": "https://render...",
            "small_icon": "https://render...",
            "pip_icon": "https://render...",
            "tiers": [
                {
                    "points": 5
                },
                {
                    "points": 5
                },
                {
                    "points": 5
                }
            ]
        },
        // ...
        {
            "name": "Division 6: Legendary",
            "flags": ["CanLosePoints", "CanLoseTiers", "Repeatable"],
            "large_icon": "https://render...",
            "small_icon": "https://render...",
            "pip_icon": "https://render...",
            "tiers": [
                {
                    "points": 5
                },
                {
                    "points": 5
                },
                {
                    "points": 5
                },
                {
                    "points": 5
                },
                {
                    "points": 5
                }
            ]
        }
    ],
    // Ranks only applies for season 5+ (I think?). The earlier 
    // seasons don't have this data.
    "ranks" : [
        {
	    "name" : "Bronze",
	    "description" : "This PvP league badge ...",
	    // icon is the badge icon that's on the nameplate
	    "icon" : "https://render.guildwars2.com/...",
	    "overlay" : "https://render.guildwars2.com/...",
	    "overlay_small" : "https://render.guildwars2.com/...",
	    "tiers" : [
	    	// rating is the _maximum_ rating to be in the tier,
		// so if you exceed that you're in the next tier, e.g.
	        { "rating" : 849 }, // ratings 0-849
		{ "rating" : 949 }, // ratings 850-949
		{ "rating" : 1049 } // ratings 950-1049
	    ]
	}
    ],
    "leaderboards": {
	// leaderboards keys correspond to leaderboards available
	// at /v2/pvp/seasons/:id/leaderboards/:key.
        "guild": {
            "settings": {
				// "name" and "duration", I believe, are always null for
				// pvp leaderboards but are used for adventures (the duration
				// indicates the reset time of the board for e.g. daily
				// leaders -- null  means "infinite duration").
                "name": "",
                "duration": null,

				// "scoring" is refers to leaderboard.scorings and indicates
				// the primary scoring component.
                "scoring": "16F74226-5DDF-4FE7-ADC5-72A49DA30572",

                "tiers": [
                    {
                        "color": "#E5E4E2",
                        "type": "Rank",
                        "name": "Platinum",
                        "range": [
                            1,
                            1
                        ]
                    },
                    {
                        "color": "#EAC117",
                        "type": "Rank",
                        "name": "Gold",
                        "range": [
                            25,
                            2
                        ]
                    },
                    {
                        "color": "#C0C0C0",
                        "type": "Rank",
                        "name": "Silver",
                        "range": [
                            100,
                            26
                        ]
                    },
                    {
                        "color": "#D2691E",
                        "type": "Rank",
                        "name": "Bronze",
                        "range": [
                            250,
                            101
                        ]
                    },
                    {
                        "color": "#C87533",
                        "type": "Rank",
                        "name": "Copper",
                        "range": [
                            1000,
                            251
                        ]
                    }
                ]
            },
            "scorings": [
                {
                    "id": "16F74226-5DDF-4FE7-ADC5-72A49DA30572",
                    "type": "Integer",
                    "description": "Team rating represents your team's skill level.",
                    "name": "Skill Rating",
                    "ordering": "MoreIsBetter"
                },
                {
                    "id": "9A9CB2FD-7D73-4DFE-8FDD-A97A9C7C0B0C",
                    "type": "Integer",
                    "description": "",
                    "name": "Wins",
                    "ordering": "MoreIsBetter"
                },
                {
                    "id": "9064DD25-2C75-48D6-88C9-7FAD18DC784D",
                    "type": "Integer",
                    "description": "",
                    "name": "Losses",
                    "ordering": "LessIsBetter"
                }
            ]
        },
        "legendary": {
            "settings": {
                "name": "",
                "duration": null,
                "scoring": "E6487336-4B5B-4BFA-9CFA-9FF232CAEF85",
                "tiers": [
                    {
                        "range": [
                            1,
                            0.95
                        ]
                    },
                    {
                        "range": [
                            0.95,
                            0.9
                        ]
                    },
                    {
                        "range": [
                            0.9,
                            0.75
                        ]
                    }
                ]
            },
            "scorings": [
                {
                    "id": "E6487336-4B5B-4BFA-9CFA-9FF232CAEF85",
                    "type": "Integer",
                    "description": "Current prestige rank. Prestige rank can be gained or lost by winning or losing ranked matches in the legendary division.",
                    "name": "Prestige",
                    "ordering": "MoreIsBetter"
                }
            ]
        }
    }
}
