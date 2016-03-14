// Without parameters, returns a list of available IDs.
// GET /v2/specializations

[ 1, 2, 3, 4, ... ]

// IDs may be requested individually to resolve objects.
// GET /v2/specializations/4

{
    id: 4,
    name: "Inventions",
    profession: "Engineer",
    elite: false,
    minor_traits: [
        518,
        508,
        519
    ],
    major_traits: [
        394,
        2037,
        507,
        1707,
        2023,
        445,
        472,
        1709,
        2024
    ],
    icon: "https://render.guildwars2.com/...",
    background: "https://render.guildwars2.com/..."
}

// Or in bulk, either by ID or paginated.
// GET /v2/specializations?ids=4,5
// GET /v2/specializations?page=0&page_size=5

[
    {
        id: 4,
        name: "Inventions",
        profession: "Engineer",
        elite: false,
        minor_traits: [
            518,
            508,
            519
        ],
        major_traits: [
            394,
            2037,
            507,
            1707,
            2023,
            445,
            472,
            1709,
            2024
        ],
        icon: "https://render.guildwars2.com/...",
        background: "https://render.guildwars2.com/..."
    },
    {
    {
        "id": 43,
        "name": "Scrapper",
        "profession": "Engineer",
        "elite": true,
        "minor_traits": [
            1959,
            2014,
            1877
        ],
        "major_traits": [
            1917,
            1971,
            1867,
            1954,
            1999,
            1860,
            1981,
            2052,
            1849
        ],
        icon: "https://render.guildwars2.com/...",
        background: "https://render.guildwars2.com/...",
	profession_icon: "https://render.guildwars2.com/...",
	profession_icon_big: "https://render.guildwars2.com/..."
    }
]

// NOTE: profession_icon and profession_icon_big override the
//       icons listed in /v2/professions when you have the elite
//       spec slotted..
