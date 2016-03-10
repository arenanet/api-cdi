// Unauthenticated endpoint which outputs public details of a guild.

// GET /v2/guilds
// This will output all currently registered guilds ids to the user.
// Example:
[
    "F05AA71F-37CD-4857-B632-517909765E4F",
    "20034A78-E176-44B5-A5FE-07F80C1E7A05",
    "3E579C5D-055F-48A6-9E09-F921588F83B1",
    "61443D40-BACD-4D09-83A6-3C761A7BAAE3",
    ...
]

// GET v2/guilds/:id or v2/guilds?ids=:id
// This will output the public details of a guild a given od
// Example:
{
   "id": "75FD83CF-0C45-4834-BC4C-097F93A487AF",
   "name": "Veterans Of Lions Arch",
   "tag": "LA",
   "member_count": 20,
   "member_capacity": 50,
   "emblem": {
     "background": 27,
     "foreground": 114,
     "flags": [],
     "background_color": 11,
     "foreground_primary_color": 584,
     "foreground_secondary_color": 64
   }
 }

 // GET v2/guilds?ids=:ids
 // Same as above only that an array of guild details is returned
