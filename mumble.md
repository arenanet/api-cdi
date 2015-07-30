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
```
