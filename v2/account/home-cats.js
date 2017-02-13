// Authenticated endpoint that returns the account's cat unlocks for
// their home instance. Refer to
// https://wiki.guildwars2.com/wiki/Hungry_cat_scavenger_hunt for
// more details. Requires the "progression" scope.

// GET /v2/account/home/cats?access_token=foo

[
  {
    "id": 5,
    "hint": "fire_flank"
  },
  {
    "id": 12,
    "hint": "warrior"
  },
  {
    "id": 56
  }
]

// NOTES: a "hint" field is provided for ease-of-use; since the cats
// don't have any human-readable identifier the hint typically corresponds
// to the item or restriction that identifies the cat. Hints may change
// or may be omitted (since they're a hand-maintained list).
