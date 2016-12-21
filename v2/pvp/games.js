// Bulk-expanded endpoint with GUID keys.
// Authenticated; requires "pvp" permission.

// GET /v2/pvp/games?access_token=foo
[
	"98EBE4DC-E36B-4A6C-A38C-A5B898AF53A4",
	"F861A5A7-C667-4AAB-81B7-ED3DB6FD2985",
	"1AFF2CA2-FE13-45BD-A9E7-90BA276C106F",
	"9AE1480D-1FF0-48F0-A2CD-E654AC184D87",
	"E5DC4CC0-B3A0-41B2-B18C-57F03DB752DE",
	"2BD1031A-D995-484F-82E4-E5BEDF55685B",
	"23BF71E1-505B-4E24-8883-86EE16825383",
	"30AD07F3-85AB-4CA7-9410-D349F24E39FE",
	"3BE267B8-69EF-4E4A-B1F6-5804ECD826E6",
	"99CCE661-9DCC-473B-B106-666FE9942721"
]

// GET /v2/pvp/games/98EBE4DC-E36B-4A6C-A38C-A5B898AF53A4?access_token=foo
// GET /v2/pvp/games?id=98EBE4DC-E36B-4A6C-A38C-A5B898AF53A4&access_token=foo

{
	"id": "98EBE4DC-E36B-4A6C-A38C-A5B898AF53A4",
	"map_id": 549,
	"started": "2015-08-29T13:42:45.000Z",
	"ended": "2015-08-29T13:53:49.000Z",
	"result": "Victory",
	"team": "Blue",
	"profession": "Thief",
	"scores": {
		"red": 344,
		"blue": 500
	},
	"rating_type" : "Ranked",
	"rating_change" : 33,
	"season" : "49CCE661-9DCC-473B-B106-666FE9942721"
}

// GET /v2/pvp/games?ids=all&access_token=foo

[
	{
		"id": "98EBE4DC-E36B-4A6C-A38C-A5B898AF53A4",
		"map_id": 549,
		"started": "2015-08-29T13:42:45.000Z",
		"ended": "2015-08-29T13:53:49.000Z",
		"result": "Victory",
		"team": "Blue",
		"profession": "Thief",
		"scores": {
			"red": 344,
			"blue": 500
		},
		"rating_type" : "Ranked",
		"rating_change" : 100
	},
	...
]

// NOTES:
//  "rating_type" is one of the following values:
//
//   * "None" -- custom arenas and such
//   * "Unranked"
//   * "Ranked"
//   * "SoloArenaRated" -- deprecated
//   * "TeamArenaRated" -- deprecated
//
//  you shouldn't be able to get the deprecated enumeration values unless
//  you've got an API key for an account that hasn't PvP'd since those
//  queues were available.
//
//  "season" may be omitted -- believe it's only present for games with
//  rating_type="Ranked". Can be cross-referenced against /v2/pvp/seasons.
//
//  "rating_change" will be negative when a game resulted in rating loss.
