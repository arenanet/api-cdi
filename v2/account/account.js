// GET /v2/account
// Authorization: Bearer oauth2-token
// Requires "account" scope.
{
	"id"           : "account-guid",
	"age"          : 1452360, // seconds.
	"name"         : "Lawton.1234",
	"world"        : 1007,
	"commander"    : true,
	"guilds" : [
		"DA9137CD-3A86-E411-B57A-00224D566B58",
		"1F5F70AA-1DB6-E411-A2C4-00224D566B58",
		"8B211747-3B86-E411-B57A-00224D566B58"
	],
	"access"  : "HeartOfThorns",
	"created" : "2015-06-05T19:45:00Z",

	// Included only if "guilds" scope is set. Is a list
	// of all guild ids the user is a leader of.
	"guild_leader" : [
		"DA9137CD-3A86-E411-B57A-00224D566B58",
	],

	// Included only if "progression" scope is set.
	"fractal_level" : 6,
	"daily_ap"      : 40,
	"monthly_ap"    : 60,
	"wvw_rank"      : 1111
}

// "access" is one of:
//  * None -- should probably never happen
//  * PlayForFree -- has not yet purchased the game
//  * GuildWars2 -- has purchased base game, but no expansions
//  * HeartOfThorns -- has purchased HoT
//
// Access levels are hierarchical -- e.g. "HeartOfThorns" implies
// all access levels beneath it.
//
// "age" is tracked with minute-granularity and totally unrelated
// to the sum of character ages.
