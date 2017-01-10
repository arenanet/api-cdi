// Bulk-expanded subset of /v2/matches. Contains KDR and any other
// statistics we add in. The ?world parameter may be used to select
// a match by world id.

// GET /v2/wvw/matches/stats

[ "1-1", "1-2" ]

// GET /v2/wvw/matches/stats/1-1
// GET /v2/wvw/matches/stats?world=1008

{
  "id": "1-1",
  "deaths": {
    "green": 0,
    "blue": 0,
    "red": 0
  },
  "kills": {
    "green": 0,
    "blue": 0,
    "red": 0
  },
  "maps": [
    {
      "id": 38,
      "type": "Center",
      "deaths": {
        "green": 0,
        "blue": 0,
        "red": 0
      },
      "kills": {
        "green": 0,
        "blue": 0,
        "red": 0
      }
    }
  ]
}
