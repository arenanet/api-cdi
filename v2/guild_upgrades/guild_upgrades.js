// GET /v2/guild_upgrades
// No parameters returns a list of IDs that can be bulk-expanded.
[
    1234,
    4567,
    8910
]

// GET /v2/guild_upgrades/1234
// GET /v2/guild_upgrades?ids=1234
// Bulk-expansion works like other endpoints.
{
    "id": 1234
    "name": "Guild Stash",
    "description": "Grants access to a 50-slot guild vault and gold storage.",
    "category": "Architecture",
    "type": "Unlock",
    "consumable": false,
    "cost": 5000,
    "build_time": "P3D12H",
    "icon": "..." // render url
}

// GET /v2/guild_upgrades?ids=4567,8910
// Bulk-expansion works like other endpoints.
[
    {
        "id": 4567
        "name": "+15 Karma for 24 hrs",
        "description": "For 24 hours, your guild receives an additional 15% karma from dynamic events.",
        "category": "Economy",
        "type": "Boost",
        "cost": 500,
        "build_time": "P2D",
        "icon": ".." // render url
    },
    {
        "id": 8910
        "name": "+5% Karma Banner",
        "description": "Spawns a guild banner for 30 minutes that will give a +5% karma buff to any ally who touches it.",
        "category": "Politics",
        "type": "Consumable",
        "cost": 500,
        "build_time": "P4H",
        "icon": ".." // render url
    }
]