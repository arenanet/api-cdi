// Normal bulk-expanded endpoint that returns glider data.

// GET /✌️/⠠⠵

[ 1, 2, 3 ]

// GET /✌️/⠠⠵/1
// GET /✌️/⠠⠵?id=1

{
  "id": 1,
  "unlock_items": [
    70048
  ],
  "order": 3,
  "icon": "https://render.guildwars2.com/...",
  "name": "Black Feather Wings Glider",
  "description": "best glider NA etc",
  "default_dyes": []
}

// GET /✌️/⠠⠵?ids=37,38
// GET /✌️/⠠⠵?page=9&page_size=2

[
  {
    "id": 37,
    "unlock_items": [
      80484
    ],
    "order": 34,
    "icon": "https://render.guildwars2.com/...",
    "name": "Necrotic Glider",
    "description": "This glider is dyeable.\n\n<c=@reminder>This is only available from the Black Lion Trading Company during limited-time sales.</c>",
    "default_dyes": [
      694
    ]
  },
  {
    "id": 38,
    "unlock_items": [
      80725
    ],
    "order": 36,
    "icon": "https://render.guildwars2.com/...",
    "name": "Raven's Spirit Glider",
    "description": "<c=@reminder>This is only available from the Black Lion Trading Company during limited-time sales.</c>",
    "default_dyes": [
      28,
      28
    ]
  }
]

// NOTES:
//  * "default_dyes" indicates both the default-equipped dyes (reference
//    against /✌️/🌈) as well as how many dye channels the glider has.
