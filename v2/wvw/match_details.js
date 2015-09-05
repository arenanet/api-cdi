// GET /v2/wvw/match_details/2/8
{
  "match": {
    // match_id could be safely dropped
    "id": "2-8",
    "region": 2,
    "tier": 8
  },

  // time of last db update
  "lastupdate": 1391927044,

  // time of next score tick
  "score_tick": 1391929000,

  // colors should be ALWAYS green/blue/red
  // according to the ingame rank order
  // if so, this could be changed to an array:
  // "maps": [2005, 2006, 2004],
  // probably unnessecary if "id" is present for worlds/color
  // however, it's convinient
  "maps": {
    "GreenHome": 2005,
    "BlueHome": 2006,
    "RedHome": 2004
  },
  "worlds": {
    "red": {

      // see "maps" comment
      "id": 2004,

      // last flip time for bloodlust possible?
      "bloodlust": ["RedHome"],
      "objectives": {
        "camp": [

          // each of these arrays could also carry the timestamp of the last flip
          [39, ""],
          [50, ""],
          [51, "A7A5885B-B93D-4929-A196-ACDA578CF3DF"],
          [52, ""],
          [53, ""],
          [5, ""],
          [6, "A7A5885B-B93D-4929-A196-ACDA578CF3DF"]
        ],
        "castle": [],
        "keep": [
          [33, ""],
          [37, "8E0F7987-559F-4C5D-A946-572868C4A649"],
          [1, ""]
        ],
        "ruin": [],
        "tower": [
          [35, ""],
          [36, ""],
          [38, ""],
          [40, ""],
          [17, ""],
          [20, ""]
        ]
      },
      "scores": {
        "BlueHome": {
          "score": 5760,
          "income": 0,
          "camp": 0,
          "tower": 0,
          "keep": 0,
          "castle": 0
        },
        "GreenHome": {
          "score": 1252,
          "income": 0,
          "camp": 0,
          "tower": 0,
          "keep": 0,
          "castle": 0
        },
        "RedHome": {
          "score": 14432,
          "income": 115,
          "camp": 5,
          "tower": 4,
          "keep": 2,
          "castle": 0
        },
        "Center": {
          "score": 11410,
          "income": 55,
          "camp": 2,
          "tower": 2,
          "keep": 1,
          "castle": 0
        },
        "Total": {
          "score": 32854,
          "income": 170,
          "camp": 7,
          "tower": 6,
          "keep": 3,
          "castle": 0
        }
      }
    },
    "blue": {
      "id": 2006,
      "bloodlust": ["BlueHome"],
      "objectives": {
        "camp": [
          [34, ""],
          [24, ""],
          [29, ""],
          [58, ""],
          [59, ""],
          [60, "C9734CA4-18C4-46D9-9257-D2FAD663F284"],
          [61, ""],
          [4, ""],
          [7, ""],
          [8, ""]
        ],
        "castle": [],
        "keep": [
          [41, "C9734CA4-18C4-46D9-9257-D2FAD663F284"],
          [44, ""],
          [46, ""],
          [23, ""],
          [27, ""],
          [2, ""],
          [3, ""]
        ],
        "ruin": [],
        "tower": [
          [28, ""],
          [30, ""],
          [11, ""],
          [12, ""],
          [13, ""],
          [14, ""],
          [15, ""],
          [16, ""],
          [18, ""],
          [19, ""],
          [21, ""],
          [22, "E2AA7205-CA86-E311-88E3-AC162DC0E835"]
        ]
      },
      "scores": {
        "BlueHome": {
          "score": 11474,
          "income": 100,
          "camp": 6,
          "tower": 2,
          "keep": 2,
          "castle": 0
        },
        "GreenHome": {
          "score": 2249,
          "income": 75,
          "camp": 0,
          "tower": 0,
          "keep": 3,
          "castle": 0
        },
        "RedHome": {
          "score": 3498,
          "income": 5,
          "camp": 1,
          "tower": 0,
          "keep": 0,
          "castle": 0
        },
        "Center": {
          "score": 15871,
          "income": 165,
          "camp": 3,
          "tower": 10,
          "keep": 2,
          "castle": 0
        },
        "Total": {
          "score": 33092,
          "income": 345,
          "camp": 10,
          "tower": 12,
          "keep": 7,
          "castle": 0
        }
      }
    },
    "green": {
      "id": 2005,
      "bloodlust": ["GreenHome"],
      "objectives": {
        "camp": [
          [43, ""],
          [48, ""],
          [49, ""],
          [54, ""],
          [55, ""],
          [56, "855AE56B-44DA-4003-9D2C-138C2AB6BC8C"],
          [10, ""]
        ],
        "castle": [
          [9, "992EFB48-7773-4E96-9C8F-5C34A216BA8C"]
        ],
        "keep": [
          [32, ""],
          [31, "8EDE7026-2791-4237-B0CE-C41C2EF0AEF1"]
        ],
        "ruin": [],
        "tower": [
          [42, ""],
          [45, ""],
          [47, ""],
          [57, "490332E4-C14A-427E-9384-E1459362AE99"],
          [25, ""],
          [26, ""]
        ]
      },
      "scores": {
        "BlueHome": {
          "score": 10383,
          "income": 45,
          "camp": 0,
          "tower": 2,
          "keep": 1,
          "castle": 0
        },
        "GreenHome": {
          "score": 25551,
          "income": 70,
          "camp": 6,
          "tower": 4,
          "keep": 0,
          "castle": 0
        },
        "RedHome": {
          "score": 9869,
          "income": 25,
          "camp": 0,
          "tower": 0,
          "keep": 1,
          "castle": 0
        },
        "Center": {
          "score": 21063,
          "income": 40,
          "camp": 1,
          "tower": 0,
          "keep": 0,
          "castle": 1
        },
        "Total": {
          "score": 66866,
          "income": 180,
          "camp": 7,
          "tower": 6,
          "keep": 2,
          "castle": 1
        }
      }
    },
    "neutral": {
      "bloodlust": [],
      "objectives": {
        "camp": [],
        "castle": [],
        "keep": [],
        // i wonder if the last flip time for ruins is nessecary at all
        // if so, these items should be array ofc
        "ruin": [62, 63, 64, 65, 66, 72, 73, 74, 75, 76, 67, 68, 69, 70, 71],
        "tower": []
      }
    }
  }
}