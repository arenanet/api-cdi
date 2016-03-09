// Bulk-expanded endpoint that exposes PvP season data. Supports
// localization via the ?lang parameter.

// GET /v2/pvp/seasons

[ "44B85826-B5ED-4890-8C77-82DDF9F2CF2B" ]

// GET /v2/pvp/seasons?id=44B85826-B5ED-4890-8C77-82DDF9F2CF2B
// GET /v2/pvp/seasons/44B85826-B5ED-4890-8C77-82DDF9F2CF2B

{
    "id": "44B85826-B5ED-4890-8C77-82DDF9F2CF2B",
    "name": "PvP League Season One",
    "start": "2016-02-23T00:00:00.000Z",
    "end": "2016-04-18T07:00:00.000Z",
    "active": false,
    "divisions": [
    {
        "name": "Division 1: Amber",
        "flags": [],
        "large_icon": "https://render...",
        "small_icon": "https://render...",
        "pip_icon": "https://render...",
        "tiers": [
        {
            "points": 5
        },
        {
            "points": 5
        },
        {
            "points": 5
        }]
    },
    // ...
    {
        "name": "Division 6: Legendary",
        "flags": ["CanLosePoints", "CanLoseTiers", "Repeatable"],
        "large_icon": "https://render...",
        "small_icon": "https://render...",
        "pip_icon": "https://render...",
        "tiers": [
        {
            "points": 5
        },
        {
            "points": 5
        },
        {
            "points": 5
        },
        {
            "points": 5
        },
        {
            "points": 5
        }]
    }]
}
