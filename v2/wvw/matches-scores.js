// Bulk-expanded sub-endpoint of /v2/wvw/matches. Provides access to
// just the score fields.

// GET /v2/wvw/matches/scores

[ "1-1", "1-2" ]

// GET /v2/wvw/matches/scores/1-1

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
