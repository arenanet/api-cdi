// Authenticated endpoint which outputs the guild log.
// **only available with keys from guild leaders for now**
// Requires scope: "guilds"

// GET /v2/guilds/:id/log?access_token=:token

[{
	"id": 1190,
	"time": "2015-12-10T23:58:49.106Z",
	"type": "treasury",
	"user": "Lawton Campbell.9413",
	"item_id": 24299,
	"count": 150
}, {
	"id": 1111,
	"time": "2015-12-10T23:52:01.099Z",
	"type": "motd",
	"user": "Lawton Campbell.9413",
	"motd": "FSFOSDFJS"
}]

// NOTES:
//  * Retenion policies are on a per-event type and are
//    roughly "last 100 events", IIRC.
//  * "id" is guarenteed to be unique within a guild's
//    log data (but not globally).
