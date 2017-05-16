// Normal bulk-expanded endpoint for dumping out PvP heroes and
// hero skins.

// GET /v2/pvp/heroes

[
  "115C140F-C2F5-40EB-8EA2-C3773F2AE468",
  "B7EA9889-5F16-4636-9705-4FCAF8B39ECD",
  "BEA79596-CA8B-4D46-9B9C-EA1B606BCF42",
  "CF977AE5-C605-4586-A802-3E25F0F35772"
]

// GET /v2/pvp/heroes/115C140F-C2F5-40EB-8EA2-C3773F2AE468
// GET /v2/pvp/heroes?id=115C140F-C2F5-40EB-8EA2-C3773F2AE468

{
  "id": "115C140F-C2F5-40EB-8EA2-C3773F2AE468",
  "name": "Nika",
  "description": "Nika was a proficient assassin schooled in her youth at Shing Jea Monastery. She served Cantha as a member of the Obsidian Flame.",
  "type": "Specialist Hero",
  "stats": {
    "offense": 3,
    "defense": 2,
    "speed": 4
  },
  "skins": [
    {
      "id": 1,
      "name": "Nika",
      "icon": "https://render.guildwars2.com/...",
      "unlock_items" : [ 123 ],
      "default": true
    },
    // ...
  ]
}

// GET /v2/pvp/heroes?ids=<comma-delimited-list>
// GET /v2/pvp/heroes?ids=all
// GET /v2/pvp/heroes?page=0&page_size=200

[
   { /* hero 1 */ },
   { /* hero 2 */ }
]

// NOTES:
//   * skins[n].id's are globally unique -- they're not per-hero.
//   * skins[n].id is referenced from /v2/account/pvp-heroes.
