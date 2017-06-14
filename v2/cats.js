// Normal bulk-expanded endpoint that returns the possible
// ids for /v2/account/cats. Note that /v2/account/cats may
// have additional id/hint pairs not listed here since they're
// hardcoded and hand-maintained.

// GET /v2/cats

[ 1, 2, 3 ]

// GET /v2/cats/1
// GET /v2/cats?id=1

{
  "id": 1,
  "hint": "chicken"
}

// GET /v2/cats?ids=1,2
// GET /v2/cats?page=0&page_size=2

[
  {
    "id": 1,
    "hint": "chicken"
  },
  {
    "id": 2,
    "hint": "grilled_chicken"
  }
]
