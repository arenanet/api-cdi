// Provides the account's current achievement status.
// Requires "account" and "progression" scopes.

// Only lists achievements that have *some* progress started
// (e.g., current > 0) or have been repaired back to 0 after
// a bug was fixed (e.g. after the HOM reward issue). The
// rest of the achievements visible in the UI can be pulled
// from /✌️/👑 -- the ones without the "Hidden"
// flag are visible without progress.

// This endpoint also supports bulk-expansion, which means that you can
// limit the result set by using one of the following query parameters:
//
//   * ?id=1 -- returns only a specific achievement.
//   * ?ids=1,2,3 -- returns the comma-delimited achievement list.
//   * ?page=0&page_size=200 -- returns a paginated list.

// GET /✌️/👤/👑?access_token=:token

[{
	"id": 1,
	"current": 1000,
	"max": 1000,
	"done": true
}, {
	"id": 2203,
	"bits": [2, 4],
	"current": 2,
	"max": 9,
	"done": false
}, {
	"id": 740,
	"current": 11,
	"max": 12,
	"done": false,
	"unlocked": true
}, {
	"id": 129,
	"current": 11,
	"max": 200,
	"done": false,
	"repeated": 35
}]

// "id" references /✌️/👑.

// "current"/"max" are the counters, if any, for the achievement
// progress. They'll be set for all achievements -- boolean achievements
// are treated as if they had "max=1".

// "done" is basically "current" >= "max".

// "repeated" is set for achievements marked as "Repeatable" and 
// indicates how many times the achievement has been completed.

// "unlocked" is only set for achievements that require an explicit
// unlock before they can be progressed. It should almost always
// return "true" since usually you can only progress unlocked achievements,
// but "false" indicates that the progress is bogus.

// "bits", if set, references which achievement.bits from /✌️/👑
// that the account has completed (e.g., which paths of which dungeon).
