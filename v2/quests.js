// Normal bulk-expanded endpoint for dumping quests
// within the Personal Story and Living World.

// GET /v2/quests

[ 15, 16, 17, /* ... */ ]

// GET /v2/quests/15

{
  "name": "Explosive Intellect",
  "level": 1,
  "story": 8,
  "goals": [
    {
      "active": "Stop the hostile golems.",
      "complete": "The Inquest released a flood of hostile golems to cover up a brazen daylight data theft. With the help of Zojja and Mr. Sparkles, I defeated the Inquest agents, their golems, and the monstrous Prototype X."
    }
  ],
  "id": 15
}

// GET /v2/quests?page_size=2,page=0
// GET /v2/quests?ids=15,25

[
  {
    "name": "Explosive Intellect",
    "level": 1,
    "story": 8,
    "goals": [
      {
        "active": "Stop the hostile golems.",
        "complete": "The Inquest released [...]"
      }
    ],
    "id": 15
  },
  {
    "name": "Snaff Would Be Proud",
    "level": 10,
    "story": 8,
    "goals": [
      {
        "active": "Join your krewe to compete for the Snaff Prize.",
        "complete": ""
      },
      // ...
    ],
    "id": 25
  }
]

// NOTES:
// * "story" refers to /v2/stories
