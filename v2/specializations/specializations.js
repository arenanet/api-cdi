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
    icon: "http://render.local.ncplatform.net/spawned/RenderSrv/file/BD349FDE30ECDCD6D3113A2FCEC414D3E5553F9E/1954407.png"
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
        icon: "http://render.local.ncplatform.net/spawned/RenderSrv/file/BD349FDE30ECDCD6D3113A2FCEC414D3E5553F9E/1954407.png"
    },
    {
        id: 5,
        name: "Alchemy",
        profession: "Engineer",
        elite: false,
        minor_traits: [
            468,
            487,
            413
        ],
        major_traits: [
            396,
            509,
            521,
            520,
            469,
            470,
            473,
            1975,
            1974
        ],
        icon: "http://render.local.ncplatform.net/spawned/RenderSrv/file/C7F6BCDF79FEBE7ACF2747F1796BE83044099D0C/1954403.png"
    }
]
