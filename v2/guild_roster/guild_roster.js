// GET /v2/guild_roster?guild_id=75FD83CF-0C45-4834-BC4C-097F93A487AF
// Authorization: Bearer oauth2-token
//
// Authenticated API - Only allow viewing of guilds that you are a member of
// Supports paging like the other v2 APIs
[
    {
        "account": "Foo.2795",
        "rank": "Guild Master",
        "location": "Cursed Shore",
        "is_rep": true,
        "is_online": true,
        "last_online": "0" // seconds ago
    },
    {
        "account": "Bar.1234",
        "rank": "New Recruit",
        "location": "Lion's Arch",
        "is_rep": null,
        "is_online": false,
        "last_online": "123456" // seconds ago
    }
]