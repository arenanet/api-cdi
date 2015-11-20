// GET /v2/emblem

[ "foregrounds", "backgrounds" ]


// Normal bulk-expanded endpoints.
// GET /v2/emblem/foregrounds
// GET /v2/emblem/backgrounds

[ 1, 2, 3, ... ]


// GET /v2/emblem/foregrounds/1
// Bulk-expansion works like other endpoints.

{
    id : 1,
    layers : [
        "https://render.guildwars2.com/...",
        "https://render.guildwars2.com/...",
        "https://render.guildwars2.com/..."
    ]
}


// GET /v2/emblem/backgrounds?page=0&page_size=1
// Pagination included.

[
    {
        id : 1,
        layers : [
            "https://render.guildwars2.com/..."
        ]
    }
]
