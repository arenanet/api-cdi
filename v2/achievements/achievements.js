// GET /v2/achievements
[
    {
        "id" : 1,
        "type" : "achievement",
        "title" : "If We Only Had Marshmallows",
        "description" : "At least you'll be warm.",
        "hint" : "Your team lit every bonfire in Snowblind fractal inside the Fractals of the Mists.",
        "related_maps": [123], // for those with location hints, map ids
        "category": 2,
        "tiers":
            [
                {
                    "tier": 1,
                    "threshold": 1, // amount of objectives that must be reached
                    "points": 5
                }
            ],
        "objective_count": 1 // "1" for directly unlockable achievements such as skill based achievements
    },
    {
        "id" : 2,
        "type" : "achievement",
        "title" : "Dungeon Master",
        "description" : "Mastering the deepest secrets of the darkest corners.",
        "hint" : "Complete 8 explorable dungeons.",
        "category": 3,
        "tiers":
            [
                {
                    "tier": 1,
                    "threshold": 3,
                    "points": 10
                }
            ],
        "rewards":
        {
            "title": "Dungeon Master"
        },
        "objective_count": 3, // in this case the count of achievements that must be unlocked
        "achievement_ids": [3,4,5]
    },
    {
        "id" : 3,
        "type" : "collection",
        "title" : "Luminescent Gloves",
        "description" : "Mastering the deepest secrets of the darkest corners.",
        "hint" : "Collect the 10 parts required to assemble Luminescent Gloves.",
        "category": 5,
        "tiers":
            [
                {
                    "tier": 1,
                    "threshold": 1,
                    "points": 1
                },
                {
                    "tier": 2,
                    "threshold": 5,
                    "points": 1
                },
                {
                    "tier": 3,
                    "threshold": 10,
                    "points": 3
                }
            ],
        "rewards":
        {
            "items": [1000] // not sure if there exist achievements with multiple item rewards
        },
        "objective_count": 3, // in this case the count of collectables
        "collectables": [1001,1002,1003] // items that need to be collected
    }
]