/v2/floors changes
==================

Currently, the output from `/v2/floors` looks as follows:

```js
// GET /v2/floors/1/0
{
    "texture_dims" : [ 32768, 32768 ],
    "regions" : {
        "1" : {
            "name" : "Shiverpeak Mountains",
            "label_coord" : [ 19840, 13568 ],
            "maps" : {
                "26" : {
                    "name" : "Dredgehaunt Cliffs",
                    "min_level" : 40,
                    "max_level" : 50,
                    "default_floor" : 1,
                    "map_rect" : [
                        [-27648, -36864 ],
                        [ 27648, 39936 ]
                    ],
                    "continent_rect" : [
                        [ 19456, 14976 ],
                        [ 21760, 18176 ]
                    ],
                    "points_of_interest" : [{
                        "poi_id" : 1577,
                        "name" : "Bear's Jaws Shrine",
                        "type" : "landmark",
                        "floor" : 1,
                        "coord" : [ 19765.9, 16239.2 ]
                    }, {
                        "poi_id" : 1573,
                        "name" : "",
                        "type" : "vista",
                        "floor" : 1,
                        "coord" : [ 20524.4, 16696.5 ]
                    }, {
                        "poi_id" : 612,
                        "name" : "Travelen's Waypoint",
                        "type" : "waypoint",
                        "floor" : 1,
                        "coord" : [ 20141.4, 15425.3 ]
                    }, {
                        "poi_id" : 1288,
                        "name" : "Upper Balcony Waypoint",
                        "type" : "waypoint",
                        "floor" : 2,
                        "coord" : [ 20887.5, 14420.9 ]
                    }],
                    "tasks" : [{
                        "task_id" : 7,
                        "objective" : "Help Explorer Brokkar sabotage dredge munitions.",
                        "level" : 49,
                        "coord" : [ 20414.9, 17761.3 ]
                    }],
                    "skill_challenges" : [{
                        "coord" : [ 20381.6, 16613.8 ]
                    }],
                    "sectors" : [{
                        "sector_id" : 526,
                        "name" : "Dostoev Sky Peak",
                        "level" : 46,
                        "coord" : [ 20564.9, 16726.1 ]
                    }]
                },
                "27" : {
                    // ...
                },
                // ...
            }
        }
    }
}
```

This is difficult to use for a couple of reasons.

* Sectors, Tasks, Skill Challenges, and POIs are arrays. Finding a specific element is at best O(n).
* You can't request only a specific map/region/poi/etc, and the responses for an entire floor across a continent can be very large (200KB+)
* Every sub-field of a map has it's own id key (`task_id` vs `poi_id` vs `sector_id`)

Here's what I'm proposing as a solution to those problems (and a few others).

```js
// GET /v2/continents/1/floors/1
{
    "texture_dims" : [ 32768, 32768 ],
    "regions" : {
        "1" : {
            "name" : "Shiverpeak Mountains",
            "label_coord" : [ 19840, 13568 ],
            "maps" : {
                "26" : {
                    "name" : "Dredgehaunt Cliffs",
                    "min_level" : 40,
                    "max_level" : 50,
                    "default_floor" : 1,
                    "map_rect" : [
                        [-27648, -36864 ],
                        [ 27648, 39936 ]
                    ],
                    "continent_rect" : [
                        [ 19456, 14976 ],
                        [ 21760, 18176 ]
                    ],
                    
                    // Object
                    "points_of_interest" : {
                        // ID field name standardized
                        // Floor removed, same as default_floor
                        "1577" : {
                            "name" : "Bear's Jaws Shrine",
                            "type" : "landmark",
                            "coord" : [ 19765.9, 16239.2 ],
                            "id" : 1577
                        },
                        
                        // ID field name standardized
                        // Floor removed, same as default_floor
                        // Name removed, empty
                        "1573" : {
                            "type" : "vista",
                            "coord" : [ 20524.4, 16696.5 ],
                            "id" : 1573
                        },
                        
                        // ID field name standardized
                        // Floor removed, same as default_floor
                        "612" : {
                            "name" : "Travelen's Waypoint",
                            "type" : "waypoint",
                            "coord" : [ 20141.4, 15425.3 ],
                            "id" : 612
                        },
                        
                        // ID field name standardized
                        "1288" : {
                            "name" : "Upper Balcony Waypoint",
                            "type" : "waypoint",
                            "floor" : 2,
                            "coord" : [ 20887.5, 14420.9 ],
                            "id" : 1288
                        }
                    },
                    
                    // Object
                    "tasks" : {
                        // ID field name standardized
                        "7" : {
                            "objective" : "Help Explorer Brokkar sabotage dredge munitions.",
                            "level" : 49,
                            "coord" : [ 20414.9, 17761.3 ],
                            "id" : 7
                        }
                    },
                    
                    // Still an array since there are no IDs
                    "skill_challenges" : [{
                        "coord" : [ 20381.6, 16613.8 ]
                    }],
                    
                    // Object
                    "sectors" : {
                        // ID field name standardized
                        "526" : {
                            "name" : "Dostoev Sky Peak",
                            "level" : 46,
                            "coord" : [ 20564.9, 16726.1 ],
                            "id" : 526
                        }
                    },
                    // ID field name standardized
                    "id" : 26
                },
                "27" : {
                    // ...
                },
                // ...
            }
        }
    }
}
```

There are comments above each changed element, but I'll also list them out.

* `/v2/floors` has been removed. You access floor information under `/v2/continents` because a floor requires a continent ID anyways.
* the `points_of_interest`, `tasks`, and `sectors` for a map are now objects with elements keyed by their id. Looking up any of these items can now be done in O(1) time.
* `poi_id`/`sector_id`/`task_id` have now been standardized to `id`.
* If a POI is on the `default_floor` for the map it doesn't repeat that information now.

There's another part of this proposal that should help with the issue of response size. You can now drill down even further into these objects to get a more concise view of the data you care about.

```js
// GET /v2/continents/1/floors/1/regions/1
{

    "name" : "Shiverpeak Mountains",
    "label_coord" : [ 19840, 13568 ],
    "maps" : {
        "26" : {
        // ...
        }
    },
    "id" : 1
}

// GET /v2/continents/1/floors/1/regions/1/maps/26
{
    "name" : "Dredgehaunt Cliffs",
    "min_level" : 40,
    "max_level" : 50,
    "default_floor" : 1,
    // ...
    "points_of_interest" : {
        // ...
    },
    "id" : 26
}

// GET /v2/continents/1/floors/1/regions/1/maps/26/poi/1577
{
    "name" : "Bear's Jaws Shrine",
    "type" : "landmark",
    "coord" : [ 19765.9, 16239.2 ],
    "id" : 1577
}

// GET /v2/continents/1/floors/1/regions/1/maps/26/tasks/7
{
    
    "objective" : "Help Explorer Brokkar sabotage dredge munitions.",
    "level" : 49,
    "coord" : [ 20414.9, 17761.3 ],
    "id" : 7
}

// GET /v2/continents/1/floors/1/regions/1/maps/26/sectors/526
{
    "name" : "Dostoev Sky Peak",
    "level" : 46,
    "coord" : [ 20564.9, 16726.1 ],
    "id" : 526
}
```

All of these new endpoints support the standard pagination params and headers to ease iterating through them and selecting just the data you care about.

```js
// GET /v2/continents/1/floors
// GET /v2/continents/1/floors?ids=all
// GET /v2/continents/1/floors?ids=1,2
// GET /v2/continents/1/floors?page=0
// GET /v2/continents/1/floors/1/regions
// GET /v2/continents/1/floors/1/regions?ids=all
// GET /v2/continents/1/floors/1/regions?ids=1,2
// GET /v2/continents/1/floors/1/regions?page=0
// GET /v2/continents/1/floors/1/regions/1/maps
// GET /v2/continents/1/floors/1/regions/1/maps?ids=all
// GET /v2/continents/1/floors/1/regions/1/maps?ids=1,2
// GET /v2/continents/1/floors/1/regions/1/maps?page=0
// GET /v2/continents/1/floors/1/regions/1/maps/26/pois
// GET /v2/continents/1/floors/1/regions/1/maps/26/pois?ids=all
// GET /v2/continents/1/floors/1/regions/1/maps/26/pois?ids=1,2
// GET /v2/continents/1/floors/1/regions/1/maps/26/pois?page=0
// GET /v2/continents/1/floors/1/regions/1/maps/26/tasks
// GET /v2/continents/1/floors/1/regions/1/maps/26/tasks?ids=all
// GET /v2/continents/1/floors/1/regions/1/maps/26/tasks?ids=1,2
// GET /v2/continents/1/floors/1/regions/1/maps/26/tasks?page=0
// GET /v2/continents/1/floors/1/regions/1/maps/26/sectors
// GET /v2/continents/1/floors/1/regions/1/maps/26/sectors?ids=all
// GET /v2/continents/1/floors/1/regions/1/maps/26/sectors?ids=1,2
// GET /v2/continents/1/floors/1/regions/1/maps/26/sectors?page=0
```
The URLs do get a little hilariously long by the end, but I think it's worth it to be able to deeply select just the necessary data for a single POI/Task/Sector.
