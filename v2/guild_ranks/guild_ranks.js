// GET /v2/guild_ranks?guild_id=75FD83CF-0C45-4834-BC4C-097F93A487AF
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