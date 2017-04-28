// There's a handful of endpoints which serve per-guild KDR statistics.
// The kills/deaths only count the final killing blow (not kill credits)
// and only if either (or both) the killer/killee are repping a guild
// at the time of murder.

// GET /v2/wvw/matches/stats/1-1/teams
// Boring endpoints for consistency with other stuff.

[ "red", "blue", "green" ]

// GET /v2/wvw/matches/stats/1-1/teams/blue

[ "top" ]

// GET /v2/wvw/matches/stats/1-1/teams/blue/top

[ "kills", "kdr" ]

// GET /v2/wvw/matches/stats/1-1/teams/blue/top/kills
// Returns the top 10 guilds, sorted by the sum of (not $team) kills.

[
  {
    "guild_id": "2546752E-7C2E-E611-9106-0862664D7672",
    "deaths": {
      "red": 0,
      "blue": 0,
      "green": 0
    },
    "kills": {
      "red": 0,
      "blue": 0,
      "green": 1
    }
  }
]

// GET /v2/wvw/matches/stats/1-1/teams/blue/top/kdr
// Returns the top 10 guilds, sorted by the wilson score of (not $team)
// kills : (not $team) deaths. The idea here is that it's a proxy of
// kdr that favors guilds with higher kill counts so that guilds with
// 1 kill/0 deaths don't populate the top.

[
  {
    "guild_id": "2546752E-7C2E-E611-9106-0862664D7672",
    "deaths": {
      "red": 0,
      "blue": 0,
      "green": 0
    },
    "kills": {
      "red": 0,
      "blue": 0,
      "green": 1
    },
    "wilson": 0.155960133054652
  }
]

// GET /v2/wvw/matches/1-1/guilds/2546752E-7C2E-E611-9106-0862664D7672
// Returns the stats for a given guild in a match.

{
  "guild_id": "2546752E-7C2E-E611-9106-0862664D7672",
  "deaths": {
    "red": 0,
    "blue": 0,
    "green": 0
  },
  "kills": {
    "red": 0,
    "blue": 0,
    "green": 1
  }
}
