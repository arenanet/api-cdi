// Bulk-expanded sub-endpoint which returns the mostly-static overview
// data from /v2/wvw/matches.

// GET /v2/wvw/matches/overview

[ "1-1", "1-2" ]

// GET /v2/wvw/matches/overview/1-1

{
  "id": "1-1",
  "worlds": {
    "red": 1008,
    "blue": 1007,
    "green": 1001
  },
  "all_worlds": {
    "red": [
      1008
    ],
    "blue": [
      1007
    ],
    "green": [
      1005,
      1006,
      1001
    ]
  },
  "start_time": "2016-12-21T17:21:00Z",
  "end_time": "2016-12-21T19:21:00Z"
}
