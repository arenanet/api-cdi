// Authenticated endpoint that dumps out per-character super adventure
// progression. Requires the "characters" and "progression" scopes.

// GET /v2/characters/Archomeda/sab?access_token=<asdf>

{
  "zones": [
    {
      "id": 1,
      "mode": "normal",
      "world": 1,
      "zone": 1
    },
    {
      "id": 2,
      "mode": "normal",
      "world": 1,
      "zone": 2
    },
    {
      "id": 13,
      "mode": "infantile",
      "world": 1,
      "zone": 1
    },
    {
      "id": 14,
      "mode": "infantile",
      "world": 1,
      "zone": 2
    }
  ],
  "unlocks": [
    {
      "id": 12,
      "name": "candle"
    }
  ],
  "songs": [
    {
      "id": 1,
      "name": "secret_song"
    },
    {
      "id": 2,
      "name": "gatekeeper_lullaby"
    },
    {
      "id": 3,
      "name": "shatter_serenade"
    }
  ]
}

// Possible id/name values for unlocks:
//
//   1 = chain_stick
//   3 = slingshot
//   6 = whip
//   9 = mini_bomb
//  12 = candle
//  13 = torch
//  15 = wooden_whistle
//  18 = digger
//  19 = nice_scoop
//  21 = glove_of_wisdom
//  24 = bauble_purse
//  25 = bauble_tote_bag
//  27 = moto_breath
//  28 = moto_finger
//  31 = health_vessel_1
//  32 = health_vessel_2
//  34 = medium_health_potion
