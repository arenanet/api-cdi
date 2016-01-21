// Two endpoints for fetching guild upgrades:
//
//  * /v2/guild/upgrades provides bulk-expanded unauthenticated
//    access to all possible guild "upgrades" (which includes
//    decorations and stuff).
//
//  * /v2/guild/:id/upgrades provides authenticated access to
//    a guild's current non-stacking upgrades (e.g., the normal
//    upgrade tree, not decorations/consumables).

// GET /v2/guild/:id/upgrades
// * Requires API key from a guild leader with "guild" permission.
// * Returns a list of completed upgrade ids (resolve against
//   /v2/guild/upgrades).

[ 12, 34, 56 ]

// GET /v2/guild/upgrades
// No parameters returns a list of IDs that can be bulk-expanded.
[
    1234,
    4567,
    8910
]

// GET /v2/guild/upgrades/1234
// GET /v2/guild/upgrades?id=1234
// Bulk-expansion works like other endpoints.
{
    "id": 58
    "name": "Guild Vault: Stash",
    "description": "Grants access to a 50-slot guild vault and gold storage.",
    "build_time": 0,
    "type": "BankBag",
    "icon": "https://render.guildwars2.com/...",
    "required_level": 0,
    "experience": 10,
    "prerequisites": [
        240
    ],
    "bag_max_items": 50,
    "bag_max_coins": 10000000,
    "costs": [
        {
            "type": "Collectible",
            "count": 1000,
            "name": "Guild Favor",
            "item_id": 70701
        }
    ]
}

// GET /v2/guild/upgrades?ids=504,84
// Bulk-expansion works like other endpoints.
[
    {
        "id": 504,
        "name": "Guild Enhancement: Karma",
        "description": "Add a selectable personal enhancement at the tavern which will increases the rate of karma gain.",
        "build_time": 0,
        "icon": "https://render.guildwars2.com/...",
        "type": "Unlock",
        "required_level": 1,
        "experience": 35,
        "prerequisites": [
            359
        ],
        "costs": [{
            "type": "Collectible",
            "count": 50,
            "name": "Guild Favor",
            "item_id": 70701
        }, {
            "type": "Item",
            "count": 40,
            "name": "Bowl of Saffron-Mango Ice Cream",
            "item_id": 38210
        }, {
            "type": "Item",
            "count": 30,
            "name": "Bottle of Elonian Wine",
            "item_id": 19663
        }, {
            "type": "Item",
            "count": 20,
            "name": "Obsidian Shard",
            "item_id": 19925
        }, {
            "type": "Item",
            "count": 10,
            "name": "Mystic Crystal",
            "item_id": 20799
        }, {
            "type": "Item",
            "count": 20,
            "name": "Glass Mug",
            "item_id": 71580
        }, {
            "type": "Item",
            "count": 10,
            "name": "Empty Keg",
            "item_id": 72224
        }, {
            "type": "Item",
            "count": 50,
            "name": "Large Claw",
            "item_id": 24350
        }, {
            "type": "Item",
            "count": 50,
            "name": "Large Fang",
            "item_id": 24356
        }]
    },
    {
        "id": 84,
        "name": "+5% Karma Banner",
        "description": "Spawns a guild banner for 30 minutes that will give a +5% karma buff to any ally who touches it.",
        "build_time": 14400,
        "icon": "https://render.guildwars2.com/...",
        "type": "Consumable",
        "required_level": 0,
        "experience": 0,
        "prerequisites": [],
        "costs": [{
            "type": "Collectible",
            "count": 300,
            "name": "Guild Favor",
            "item_id": 70701
        }]
    }
]
