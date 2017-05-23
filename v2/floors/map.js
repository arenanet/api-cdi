// GET /v2/continents/1/floors/1/regions/1/maps/26
{
    "name" : "Dredgehaunt Cliffs",
    "min_level" : 40,
    "type" : "Public",
    "max_level" : 50,
    "default_floor" : 1,
    "label_coord": [ 20000, 15000 ],
    "map_rect" : [
        [-27648, -36864 ],
        [ 27648, 39936 ]
    ],
    "continent_rect" : [
        [ 19456, 14976 ],
        [ 21760, 18176 ]
    ],
    "adventures": [ {
        "coord": [
            1234.1,
            1348.3,
            2948.9
        ],
        "id": "8D00FA87-28CD-4402-AAEF-501A610E0447",
        "name": "Not a Real Adventure",
        "description": "I just made this up"
    } ],
    "points_of_interest" : {
        "1577" : {
            "name" : "Bear's Jaws Shrine",
            "type" : "landmark",
            "coord" : [ 19765.9, 16239.2 ],
            "id" : 1577
        },
        "1573" : {
            "type" : "vista",
            "coord" : [ 20524.4, 16696.5 ],
            "id" : 1573
        },
        "612" : {
            "name" : "Travelen's Waypoint",
            "type" : "waypoint",
            "coord" : [ 20141.4, 15425.3 ],
            "id" : 612
        },
        "1288" : {
            "name" : "Upper Balcony Waypoint",
            "type" : "waypoint",
            "floor" : 2,
            "coord" : [ 20887.5, 14420.9 ],
            "id" : 1288
        }
    },
    "tasks" : {
        "7" : {
            "objective" : "Help Explorer Brokkar sabotage dredge munitions.",
            "level" : 49,
            "coord" : [ 20414.9, 17761.3 ],
            "id" : 7
        }
    },
    "skill_challenges" : [{
        "coord" : [ 20381.6, 16613.8 ],
        "id": "0-29"
    }],
    "sectors" : {
        "526" : {
            "name" : "Dostoev Sky Peak",
            "level" : 46,
            "coord" : [ 20564.9, 16726.1 ],
            "id" : 526
        }
    },
    "events": {
        "31CEBA08-E44D-472F-81B0-7143D73797F5": {
            "name": "Defeat the shadow behemoth.",
            "id": "31CEBA08-E44D-472F-81B0-7143D73797F5",
            "level": 15,
            "event_type": "boss",
            "flags": [
                "group_event"
            ],
            "location": {
                "type": "circle",
                    "center": [
                    12058,
                    13661
                ],
                "radius": 250
            }
        }
    },
    "id" : 26
}

// NOTES:
// 
// map.type may be one of the following values:
//  * "Pvp"
//  * "Instance"
//  * "Public"
//  * "Center" (EB)
//  * "BlueHome", "RedHome", "GreenHome" (Borderlands)
//  * "JumpPuzzle" (Obsidian Sanctum)
//  * "EdgeOfTheMists"
