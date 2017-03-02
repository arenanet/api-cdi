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
//
// Here is the initial id-hint mapping for your development curiosities
//
//   1  : "chicken",
//   2  : "grilled_chicken",
//   3  : "spicy_flank",
//   4  : "spicier_flank",
//   5  : "fire_flank",
//   6  : "prickley_pear_sorbet",
//   7  : "ginger_lime_icecream",
//   8  : "saffron_mango_icecream",
//   9  : "peach_raspberry_icecream",
//   10 : "chicken_day",
//   11 : "chicken_night",
//   12 : "warrior",
//   13 : "mesmer",
//   14 : "ranger",
//   15 : "guardian",
//   16 : "elementalist",
//   17 : "engineer",
//   18 : "revenant",
//   19 : "thief",
//   20 : "necromancer",
//   21 : "lava_skritt",
//   22 : "ghost_peppers",
//   23 : "halloween",
//   24 : "snow_leopard",
//   25 : "frozen", (superheated poultry leek)
//   26 : "ice", (superheated poultry winter veg)
//   27 : "freezer", (superheated poultry lemongrass)
//   28 : "cold", (superheated saffron poultry)
//   29 : "cadeucus",
//   30 : "bundle",
//   // 31 appears unused.
//   32 : "ghost"
