// Unauthenticated bulk-expanded endpoint that spits out skin
// details.

// GET /v2/skins

[ 1, 2, 3, ... ]

// GET /v2/skins/1
// GET /v2/skins?id=1

{
	"id"    : 1,
	"name"  : "Worn Chain Legs",
	"type"  : "Armor",
	"icon"  : "https://render.guildwars2.com/...",
	"flags" : [
		"ShowInWardrobe"
	],
	"rarity" : "Basic",
	"restrictions" : [],
	"details"      : {
		"type"         : "Leggings",
		"weight_class" : "Heavy"
	}
}

// GET /v2/skins?page_size=3&page=0
// GET /v2/skins?ids=1,2,3

[
	{
		"id"    : 1,
		"name"  : "Worn Chain Legs",
		"type"  : "Armor",
		"icon"  : "https://render.guildwars2.com/...",
		"flags" : [
			"ShowInWardrobe"
		],
		"rarity" : "Basic",
		"restrictions" : [],
		"details"      : {
			"type"         : "Leggings",
			"weight_class" : "Heavy",
			"dye_slots": {
				"default": [
					{
						"color_id": 1,
						"material": "cloth"
					},
					{
						"color_id": 1,
						"material": "metal"
					},
					{
						"color_id": 1,
						"material": "cloth"
					},
					null
				],
				"overrides": {}
			}
		},
	},
	{
		"id"    : 2,
		"name"  : "Holographic Dragon Wings",
		"description" : "<c=@flavor>Wings are decorative only. Please don't jump off expecting to fly.</c>",
		"type"  : "Back",
		"icon"  : "https://render.guildwars2.com/...",
		"flags" : [
			"ShowInWardrobe"
		],
		"rarity" : "Basic",
		"restrictions" : []
	},
	{
		"id"    : 3,
		"name"  : "Lovestruck Rifle",
		"type"  : "Weapon",
		"icon"  : "https://render.guildwars2.com/...",
		"flags" : [
			"ShowInWardrobe"
		],
		"rarity" : "Basic",
		"restrictions" : [],
		"details"      : {
			"type"         : "Rifle",
			"damage_type"  : "Physical"
		}
	}
]

// An example of a skin with dye slot overrides. The possible overrides
// are:
//   * AsuraMale
//   * AsuraFemale
//   * CharrMale
//   * CharrFemale
//   * HumanMale
//   * HumanFemale
//   * NornMale
//   * NornFemale
//   * SylvariMale
//   * SylvariFemale

  {
    "name": "Archon Boots",
    "type": "Armor",
    "flags": [
      "ShowInWardrobe"
    ],
    "restrictions": [
      "Charr"
    ],
    "rarity": "Basic",
    "id": 358,
    "icon": "http://render.local.ncplatform.net:8888/file/0EEA53BF153A52B8CB0E1C0E59570C0E94EFC87E/230263.png",
    "details": {
      "type": "Boots",
      "weight_class": "Light",
      "dye_slots": {
        "default": [
          {
            "color_id": 1,
            "material": "cloth"
          },
          {
            "color_id": 1,
            "material": "cloth"
          },
          {
            "color_id": 1,
            "material": "leather"
          },
          null
        ],
        "overrides": {
          "CharrFemale": [
            {
              "color_id": 1,
              "material": "cloth"
            },
            {
              "color_id": 1,
              "material": "cloth"
            },
            {
              "color_id": 1,
              "material": "leather"
            },
            {
              "color_id": 1,
              "material": "leather"
            }
          ],
          "CharrMale": [
            {
              "color_id": 1,
              "material": "cloth"
            },
            {
              "color_id": 1,
              "material": "cloth"
            },
            {
              "color_id": 1,
              "material": "leather"
            },
            {
              "color_id": 1,
              "material": "leather"
            }
          ],
          "SylvariFemale": [
            null,
            {
              "color_id": 1,
              "material": "cloth"
            },
            null,
            {
              "color_id": 1,
              "material": "cloth"
            }
          ],
          "SylvariMale": [
            null,
            {
              "color_id": 1,
              "material": "cloth"
            },
            {
              "color_id": 1,
              "material": "leather"
            },
            {
              "color_id": 1,
              "material": "leather"
            }
          ]
        }
      }
    }
  }

// NOTES:
//
// "type" is one of the following values and determines what's in .details.
//   * "Armor"
//   * "Weapon"
//   * "Back"
//   * "Gathering"
//
// "flags" can have any of the following values:
//   * "ShowInWardrobe"
//   * "HideIfLocked" -- doesn't show up in the wardrobe if not unlocked
//   * "NoCost" -- doesn't cost transmutation charges to apply
//   * "OverrideRarity" -- skin overrides item rarity when applied
//
// "restrictions" indicates race restrictions and may contain any of:
//   * "Human"
//   * "Asura"
//   * "Charr"
//   * "Norn"
//   * "Sylvari"
//
// "rarity" can have one of the following values:
//   * "Junk"
//   * "Basic"
//   * "Fine"
//   * "Masterwork"
//   * "Rare"
//   * "Exotic"
//   * "Ascended"
//   * "Legendary"
