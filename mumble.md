```json
// Mumble Link Identity
// JSON-encoded string with the following fields --
{
	"name": "Stabby Mcstabberson",
	"profession": 5,
	"map_id": 50,
	"world_id": 1001,
	"team_color_id": 0,
	"commander": false
}
// Where profession values have the following mapping:
//
// 1 = Guardian
// 2 = Warrior
// 3 = Engineer
// 4 = Ranger
// 5 = Thief
// 6 = Elementalist
// 7 = Mesmer
// 8 = Necromancer
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
