```json
// Mumble Link Identity
// JSON-encoded string with the following fields --
{
	"name": "Stabby Mcstabberson",
	"profession": 5,
    "spec": 55, // Character's third specialization, or 0 if no specialization is present.
    "race": 4,
	"map_id": 50,
	"world_id": 1001,
	"team_color_id": 0,
	"commander": false,
	"fov": 0.873, // vertical fov
    "uisz": 1 // ui size
}

// Where profession values have the following mapping:
// 1 = Guardian
// 2 = Warrior
// 3 = Engineer
// 4 = Ranger
// 5 = Thief
// 6 = Elementalist
// 7 = Mesmer
// 8 = Necromancer
// 9 = Revenant

// Where race values have the following mapping:
// 0 = Asura
// 1 = Charr
// 2 = Human
// 3 = Norn
// 4 = Sylvari

// Where uisz values have the following mapping:
// 0 = Small
// 1 = Normal
// 2 = Large
// 3 = Larger

```

```c++
// Mumble Link Context
// Just raw bytes.
struct MumbleContext {
    byte serverAddress[28]; // contains sockaddr_in or sockaddr_in6
    uint32_t mapId;
    uint32_t mapType;
    uint32_t shardId;
    uint32_t instance;
    uint32_t buildId;
    // Additional data beyond the 48 bytes Mumble uses for identification
    uint32_t uiState;
    uint16_t compassWidth; // pixels
    uint16_t compassHeight; // pixels
    float compassRotation; // radians
    float playerX; // continentCoords
    float playerY; // continentCoords
    float mapCenterX; // continentCoords
    float mapCenterY; // continentCoords
    float mapScale;
    uint32_t processId;
    uint8_t mountIndex;
};

// uiState bitmask:
// 1 = IsMapOpen
// 2 = IsCompassTopRight
// 3 = DoesCompassHaveRotationEnabled
// 4 = Game has focus
// 5 = Is in Competitive game mode
// 6 = Textbox has focus
// 7 = Is in Combat

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
