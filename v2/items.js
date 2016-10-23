// Normal bulk-expanded endpoint
// GET /v2/items

[ 1, 2, 3, ... ]

// GET /v2/items/6
// GET /v2/items?id=1

{

    "name": "Stick of Butter",
    "description": "Ingredient",
    "type": "CraftingMaterial",
    "level": 0,
    "rarity": "Basic",
    "vendor_value": 1,
    "game_types": [
        "Activity",
        "Wvw",
        "Dungeon",
        "Pve"
    ],
    "flags": [ ],
    "restrictions": [ ],
    "id": 12138,
    "chat_link": "[&AgFqLwAA]",
    "icon": "https://render.guildwars2.com/file/CA45CEE2BA3BA040E7C294965CA3756FC3F33FD1/63248.png",
    "salvage_into": {}
        "basic_material": {
            "id": 19700,
            "min": 1,
            "max": 2
        },
        "fine_material": {
            "id": 24290,
            "min": 0,
            "max": 1
        },
        "upgrade": {
            "id": 24606,
            "min": 0,
            "max": 1
        },
        "luck": {
            "id": 45177,
            "min": 0,
            "max": 2
        }
    }
}

// GET /v2/items?ids=6,7

[ /* item 6 */, /* item 7 */ ]

// GET /v2/items?page=0&page_size=2

[ /* item 1 */, /* item 2 */ ]
