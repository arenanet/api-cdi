// Bulk-expanded endpoint that returns mailcarrier data.

// GET /v2/mailcarriers

[ 4, 5 ]

// GET /v2/mailcarriers/4
// GET /v2/mailcarriers?id=4


{
  "id": 4,
  "unlock_items": [],
  "order": 0,
  "icon": "https://render.guildwars2.com/...",
  "name": "Mail-Carrier Pigeon",
  "flags": [
    "Default"
  ]
}

// GET /v2/mailcarriers?ids=4,5
// GET /v2/mailcarriers?page=0&page_size=2

[
  {
    "id": 4,
    "unlock_items": [],
    "order": 0,
    "icon": "https://render.guildwars2.com/...",
    "name": "Mail-Carrier Pigeon",
    "flags": [
      "Default"
    ]
  },
  {
    "id": 5,
    "unlock_items": [
      68780
    ],
    "order": 1,
    "icon": "https://render.guildwars2.com/...",
    "name": "Griffon Mail Carrier",
    "flags": []
  }
]

// NOTES:
//  * flags right now only has "Default", which is the default-unlocked
//    pidgeon mailcarrier.
