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

// Example stash events.
{
	"id": 1533,
	"time": "2016-03-04T18:54:02.785Z",
	"type": "stash",
	"user": "Lawton Campbell.9413",
	"operation": "deposit",
	"item_id": 0,
	"count": 0,
	"coins": 20000
}, {
	"id": 1530,
	"time": "2016-03-04T18:52:35.779Z",
	"type": "stash",
	"user": "Lawton Campbell.9413",
	"operation": "withdraw",
	"item_id": 26051,
	"count": 1,
	"coins": 0
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
//   * the one that actually notes the creation of a thing is "completed".
//   * "completed" events have a "count" field indicating how many of the
//     upgrade were inserted.
//   * "recipe_id" may be included if the upgrade was created by a scribe;
//     scribe logs may have an additional "queued" event without a user,
//     this is displayed in-game as well so it's left in the API.
{
	"id": 1286,
	"time": "2015-12-23T00:48:20.539Z",
	"type": "upgrade",
	"upgrade_id": 364,
	"action": "queued",
},
{
	"id": 1470,
	"time": "2016-12-19T20:36:03.000Z",
	"type": "upgrade",
	"recipe_id": 11856,
	"upgrade_id": 776,
	"count": 1,
	"action": "completed",
	"user": "Lawton Campbell.9413"
},
{
	"id": 1522,
	"time": "2016-12-19T20:48:11.000Z",
	"type": "upgrade",
	"upgrade_id": 78477,
	"count": 1,
	"action": "completed",
	"user": "Lawton Campbell.9413"
}]

// There's an additional optional query parameter, ?since, that will
// filter out all log entries not newer than the id passed. Any events
// when an id equal to or less than ?since will be omitted, e.g.,

// GET /v2/guild/:id/log?since=1285
[{
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
