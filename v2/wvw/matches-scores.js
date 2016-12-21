// Bulk-expanded sub-endpoint of /v2/wvw/matches. Provides access to
// just the score fields. The ?world parameter may be used to select
// a match by world id.

// GET /v2/wvw/matches/scores

[ "1-1", "1-2" ]

// GET /v2/wvw/matches/scores/1-1
// GET /v2/wvw/matches/scores?world=1008

{
  "id": "1-1",
  "scores": {
    "red": 48,
    "blue": 48,
    "green": 48
  },
  "maps": [
    {
      "id": 38,
      "type": "Center",
      "scores": {
        "red": 48,
        "blue": 48,
        "green": 48
      }
    }
  ]
}
