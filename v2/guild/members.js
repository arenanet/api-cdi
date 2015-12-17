// Authenticated endpoint that outputs guild members.
// **only available with keys from guild leaders for now**
// Requires scope: "guilds"

[
	{
		name: "Lawton Campbell.9413",
		rank: "Leader",
		joined: "2015-07-22T06:18:35.000Z"
	},
	{
		name: "Lawton Campbell.1450",
		rank: "Member",
		joined: null
	}
]

// "name" is the account name.

// "rank" is the rank id (note: user-editable) and references 
// /v2/guild/:id/ranks.

// "joined" may be null -- the join date was not tracked before
// about March 19th, 2013, so null indicates around or before
// that date
