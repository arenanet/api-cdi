// GET /v2/spvp/matches
// Authorization: GW2 Token
// Dependencies: 
//	- /v2/character

// Retrieves the last played ranked/unranked matches of the character
// GET /v2/spvp/matches?character=Field Strategist

[
	{
		matchid: 1234,
		match_start: "2014-12-15T14:43:35+00:00",
		match_end: "2014-12-15T14:43:35+00:00",
		ranked: true,
		blue_score: 500,
		red_score: 350,
		blue:
		{
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>
		},
		red:
		{
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>
		}
		
	},
	{
		matchid: 4321,
		match_start: "2014-12-15T14:43:35+00:00",
		match_end: "2014-12-15T14:43:35+00:00",
		ranked: false,
		blue_score: 321,
		red_score: 500,
		blue:
		{
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>
		},
		red:
		{
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>,
			<Charactername>
		}	
	}
]
