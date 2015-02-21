// GET /v2/guild?id=75FD83CF-0C45-4834-BC4C-097F93A487AF
// GET /v2/guild?name=Veterans%20Of%20Lions%20Arch
// GET /v2/guild/75FD83CF-0C45-4834-BC4C-097F93A487AF
// GET /v2/guild/Veterans%20Of%20Lions%20Arch
// No Authentication
{
    "id": "75FD83CF-0C45-4834-BC4C-097F93A487AF",
    "name": "Veterans Of Lions Arch",
    "tag": "LA",
    "emblem": {
        "background_id": 27,
        "foreground_id": 114,
        "flags": [ ],
        "background_color_id": 11,
        "foreground_primary_color_id": 584,
        "foreground_secondary_color_id": 64
    }
} 

// GET /v2/guild?id=75FD83CF-0C45-4834-BC4C-097F93A487AF
// GET /v2/guild?name=Veterans%20Of%20Lions%20Arch
// GET /v2/guild/75FD83CF-0C45-4834-BC4C-097F93A487AF
// GET /v2/guild/Veterans%20Of%20Lions%20Arch
// Authorization: Bearer oauth2-token
// Account must be a member of the requested guild
{
    "id": "75FD83CF-0C45-4834-BC4C-097F93A487AF",
    "name": "Veterans Of Lions Arch",
    "tag": "LA",
    "motd": "This is an example motd"
    "member_count": 24,
    "influence": 1036381,
    "merits": 30,
    "emblem": {
        "background_id": 27,
        "foreground_id": 114,
        "flags": [ ],
        "background_color_id": 11,
        "foreground_primary_color_id": 584,
        "foreground_secondary_color_id": 64
    },
    "build_queue" : [
        {
            "id": 1234,
            "time_remaining": "P30M5S",
            "in_progress": true
        },
        {
            "id": 1235,
            "time_remaining": "P5M5S",
            "in_progress": false
        }
    ]
    "unlocks" : [ 1238, 1241, 5231 ],
    "consumables" : [
        {
            "id": 1523,
            "count": 5
        },
        {
            "id": 5412,
            "count": 1
        }
    ],
    "active_boosts" : [
        {
            "id": 1523,
            "time_remaining": "P8H30M5S"
        },
        {
            "id": 51231,
            "time_remaining": "P2H12M13S"
        }
    ]
    "available_boosts" : [ 1523, 51231 ]
} 

// GET /v2/guild/75FD83CF-0C45-4834-BC4C-097F93A487AF/roster
// GET /v2/guild/Veterans%20Of%20Lions%20Arch/roster
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
        "last_online": "2015-02-21T08:15:30Z"
    },
    {
        "account": "Bar.1234",
        "rank": "New Recruit",
        "location": "Lion's Arch",
        "is_rep": null,
        "is_online": false,
        "last_online": "2015-02-20T12:13:54Z"
    }
]

// GET /v2/guild/75FD83CF-0C45-4834-BC4C-097F93A487AF/ranks
// GET /v2/guild/Veterans%20Of%20Lions%20Arch/ranks
// Authorization: Bearer oauth2-token
//
// Authenticated API - Only allow viewing of guilds that you are a member of
[
    {
        "name": "Guild Master",
        "permissions": {
            "edit_ranks": true,
            "edit_guild_emblem": true,
            "claim_wvw_forts": true,
            "queue_upgrades": true,
            "modify_upgrades": true,
            "activate_upgrade": true,
            "mission_control": true,
            "admin_lower_ranks": true,
            "edit_motd": true,
            "display_emblem": true,
            "guild_stash_deposit": true,
            "guild_stash_withdraw": true,
            "tt_deposite": true,
            "tt_withdraw": true,
            "new_members_here": false
        }
    },
    {
        "name": "New Recruit",
        "permissions": {
            "edit_ranks": false,
            "edit_guild_emblem": false,
            "claim_wvw_forts": false,
            "queue_upgrades": false,
            "modify_upgrades": false,
            "activate_upgrade": false,
            "mission_control": false,
            "admin_lower_ranks": false,
            "edit_motd": false,
            "display_emblem": true,
            "guild_stash_deposit": false,
            "guild_stash_withdraw": false,
            "tt_deposite": false,
            "tt_withdraw": false,
            "new_members_here": true
        }
    }
]