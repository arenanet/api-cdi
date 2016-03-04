// Authenticated endpoint which outputs the guild log.
// **only available with keys from guild leaders for now**
// Requires scope: "guilds"

// GET /v2/guilds/:id/log?access_token=:token

// Example roster events.
[{
	"id": 1377,
	"time": "2016-02-16T01:08:10.539Z",
	"type": "joined",
	"user": "Lawton Campbell III.7615"
}, {
	"id": 1375,
	"time": "2016-02-16T01:08:07.538Z",
	"type": "invited",
	"user": "Lawton Campbell III.7615",
	"invited_by": "Lawton Campbell.9413"
}, {
	"id": 1217,
	"time": "2015-12-16T01:18:46.536Z",
	"type": "kick",
	"user": "Lawton Campbell II.8307",
	"kicked_by": "Lawton Campbell.9413"
}, {
	"id": 1214,
	"time": "2015-12-16T01:18:25.534Z",
	"type": "rank_change",
	"user": "Lawton Campbell II.8307",
	"changed_by": "Lawton Campbell.9413",
	"old_rank": "Member",
	"new_rank": "Foo"
},

// Example MOTD events.
{
	"id": 1111,
	"time": "2015-12-10T23:52:01.493Z",
	"type": "motd",
	"user": "Lawton Campbell.9413",
	"motd": "FSFOSDFJS"
},

// Example treasury events.
{
	"id": 1283,
	"time": "2015-12-23T00:48:02.555Z",
	"type": "treasury",
	"user": "Lawton Campbell.9413",
	"item_id": 19746,
	"count": 10
},

// Example upgrade events.
// NOTES:
//   * action is one of "queued", "cancelled", "completed", "sped_up".
//   * I'm not sure if these are emitted correctly in the new system.
{
	"id": 1286,
	"time": "2015-12-23T00:48:20.539Z",
	"type": "upgrade",
	"upgrade_id": 364,
	"action": "queued",
	"user": "Lawton Campbell.9413"
}]

// FURTHER NOTES:
//  * There are also "influence" events which are still included
//    due to the retention policy, but AFAIK they're not really
//    useful anymore. Left undocumented for now.
//  * Retenion policies are on a per-event type and are
//    roughly "last 100 events", IIRC.
//  * "id" is guarenteed to be unique within a guild's
//    log data (but not globally).
