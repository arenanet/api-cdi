// Provides the account's current achievement status.
// Requires "account" and "progression" scopes.

// GET /v2/account/achievements?access_token=:token

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
	"done": false
}, {
	"id": 129,
	"current": 11,
	"max": 200,
	"done": false,
	"repeated": 35
}]

// "id" references /v2/achievements.

// "current"/"max" are the counters, if any, for the achievement
// progress. They'll be set for all achievements -- boolean achievements
// are treated as if they had "max=1".

// "done" is basically "current" >= "max".

// "repeated" is set for achievements marked as "Repeatable" and 
// indicates how many times the achievement has been completed.

// "bits", if set, references which achievement.bits from /v2/achievements
// that the account has completed (e.g., which paths of which dungeon).
