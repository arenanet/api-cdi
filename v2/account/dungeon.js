// GET /v2/account/dungeon
// Authorization: Bearer oauth2-token
// Requires "account" scope.
// This exact format should also have an endpoint under character, for
// determining, e.g., which story mode unlocks are needed per character.
{
  "Ascalonian Catacombs": { // Name of dungeon
    "Story": { // Path id, either "Story" or "Path X". Alternatively, "Hodgins" "Tzaark", etc.
      "first": "<timestamp>", // Timestamp of when dungeon was first completed.
      "last": "<timestamp>", // Timestamp of most recent completion.
      "count": 4 // Total number of times dungeon has been completed.
    },
    "Path 1": {
      "first": ...
    },
    ...
  },
  "Twilight Arbor": { ... },
  ...
  "Fractals Of The Mist": { // Fractals too!
    "Scale 1:" {
      "first": ...
    },
    ...,
    "Scale 50": {
      ...
    }
  }
}
