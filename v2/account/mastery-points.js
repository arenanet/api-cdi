// Authenticated endpoint for getting the account's unlocked
// mastery points, in addition to how many have been earned/spent.
// Requires the "account" and "progression" scopes.

// GET /v2/account/mastery/points?access_token=<account+progression>


{
  "totals": [
    {
      "region": "Tyria",
      "spent": 49,
      "earned": 82
    },
    {
      "region": "Maguuma",
      "spent": 120,
      "earned": 199
    }
  ],
  "unlocked": [
    1,
    2,
    3,
    4,
    5
    /* ... */
  ]
}
