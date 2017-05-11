// Authenticated endpoint that dumps out the account's mail. Includes
// mail that has not yet been delievered (e.g., mail queued past the
// 10 that are visible in-game), but only shows the top 100 (to
// discourage infinite queueing which would probably break the API).
// Requires the "account" and "contacts" scopes.

// GET /v2/account/mail?access_token=<account+contacts>

[
  {
    "from_id": "8890B5A0-7D2E-E611-9106-0862664D7672",
    "from_account": "Lawton.7615",
    "from_char": "Fsdf",
    "subject": "subject",
    "message": "hello",
    "timestamp": "2017-05-09T23:01:50.000Z",
    "coins": 42000,
    "items": [
      {
        "id": 20323,
        "count": 2
      }
    ]
  }
  /* ... */
]

// NOTES:
//  * from_id references /v2/account.id
