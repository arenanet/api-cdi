```json
// Mumble Link Identity
// JSON-encoded string with the following fields --
{
    "character_id": "11111111-2222-3333-4444-555555555555",
    "map_id": 50,
    "team_color_id": 0,
    "commander": false,
    "health": 27586, // questionable, requires realtime updates
    "supply": 15,
    ...
}
```

```c++
// Mumble Link Context
// Just raw bytes.
struct MumbleContext {
    byte serverAddress[28]; // contains sockaddr_in or sockaddr_in6
    unsigned mapId;
    unsigned mapType;
    unsigned shardId;
    unsigned instance;
    unsigned buildId;
};

// mapType has some values roughly:
// 0 = Redirect (e.g., when you log in while in a PvP match)
// 1 = Character Create
// 2 = Competitive PvP (probably unused)
// 3 = GvG (lol unused ;_;)
// 4 = Instance (probably dungeons/story content)
// 5 = Public (probably general stuff)
// 6 = Tournament (probably unused)
// 7 = Tutorial (maybe unused?)
// 8 = User Tournament (probably unused)
// 9 = Eternal Battlegrounds
// 10 = Blue Borderlands
// 11 = Green Borderlands
// 12 = Red Borderlands
// 13 = Fortune's Vale (probably unused)
// 14 = Obsidian Sanctum
// 15 = Edge of the Mists
```
