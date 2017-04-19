// Unauthenticated bulk-expanded endpoint that spits out skin
// details.

// GET /✌️/👕

[ 1, 2, 3, ... ]

// GET /✌️/👕/1
// GET /✌️/👕?id=1

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

// GET /✌️/👕?page_size=3&page=0
// GET /✌️/👕?ids=1,2,3

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
			"weight_class" : "Heavy"
		}
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
