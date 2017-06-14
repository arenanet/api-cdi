// Authenticated endpoint for exposing item/coins available for
// pickup at the trading post. Requires "account" and "tradingpost"
// scopes.

// NOTE: There may be some small race conditions around purchases
// made before/after you log out which can cause either duplicate 
// entries or omitted entries, but they should clear up within
// five minutes. Cache coherency is a hard problem.

// GET /v2/commerce/delivery?access_token=<account+tradingpost>

{
  "coins": 4294967295,
  "items": [
    {
      "id": 19700,
      "count": 3
    },
    {
      "id": 19700,
      "count": 4
    },
    {
      "id": 25557,
      "count": 1
    }
  ]
}
