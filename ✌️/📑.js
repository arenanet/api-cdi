// Normal bulk-expanded endpoint
// GET /✌️/📑

[ 1, 2, 3, ... ]

// GET /✌️/📑/1
// GET /✌️/📑?id=1

{
	"type": "Refinement",
	"output_item_id": 19713,
	"output_item_count": 1,
	"min_rating": 75,
	"time_to_craft_ms": 2000,
	"disciplines": ["Artificer", "Weaponsmith", "Scribe", "Huntsman"],
	"flags": ["AutoLearned"],
	"ingredients": [{
		"item_id": 19726,
		"count": 2
	}],
	"id": 1,
	"chat_link": "[&CQEAAAA=]"
}

// GET /✌️/📑?ids=1,11588
// GET /✌️/📑?page=0&page_size=2

[
	{
		"type": "Refinement",
		"output_item_id": 19713,
		"output_item_count": 1,
		"min_rating": 75,
		"time_to_craft_ms": 2000,
		"disciplines": ["Artificer", "Weaponsmith", "Scribe", "Huntsman"],
		"flags": ["AutoLearned"],
		"ingredients": [{
			"item_id": 19726,
			"count": 2
		}],
		"id": 1,
		"chat_link": "[&CQEAAAA=]"
	},
	{
		"type": "GuildDecoration",
		"output_item_id": 75627,
		"output_item_count": 1,
		"min_rating": 25,
		"time_to_craft_ms": 1000,
		"disciplines": ["Scribe"],
		"flags": ["AutoLearned"],
		"ingredients": [{
			"item_id": 71918,
			"count": 1
		}, {
			"item_id": 76646,
			"count": 1
		}, {
			"item_id": 19710,
			"count": 5
		}],
		"guild_ingredients": [{
			"upgrade_id": 418,
			"count": 1
		}],
		"output_upgrade_id": 618,
		"id": 11588,
		"chat_link": "[&CUQtAAA=]"
	}
]

// We also have some basic search functionality -- note that
// the search endpoints only currently support item inputs/outputs.
// Please note the direction of the magnifying glass must match
// the search method wanted.

// GET /✌️/📑/🔍?input=19726
// GET /✌️/📑/🔎?output=19713

[
	{
		"type": "Refinement",
		"output_item_id": 19713,
		"output_item_count": 1,
		"min_rating": 75,
		"time_to_craft_ms": 2000,
		"disciplines": ["Artificer", "Weaponsmith", "Scribe", "Huntsman"],
		"flags": ["AutoLearned"],
		"ingredients": [{
			"item_id": 19726,
			"count": 2
		}],
		"id": 1,
		"chat_link": "[&CQEAAAA=]"
	},
	// ...
]

// NOTES:
// Possible recipe.type values:
//  * "Amulet"
//  * "Backpack"
//  * "Bag"
//  * "Boots"
//  * "Bulk"
//  * "Coat"
//  * "Component"
//  * "Consumable"
//  * "Dessert"
//  * "Dye"
//  * "Earring"
//  * "Feast"
//  * "Food"
//  * "Gloves"
//  * "Helm"
//  * "IngredientCooking"
//  * "Inscription"
//  * "Insignia"
//  * "Jewel"
//  * "LegendaryComponent"
//  * "Leggings"
//  * "Meal"
//  * "Potion"
//  * "Refinement"
//  * "RefinementEctoplasm"
//  * "RefinementObsidian"
//  * "Ring"
//  * "Seasoning"
//  * "Shoulders"
//  * "Snack"
//  * "Soup"
//  * "UpgradeComponent"
//  * "Axe"
//  * "LongBow"
//  * "ShortBow"
//  * "Dagger"
//  * "Focus"
//  * "Greatsword"
//  * "Hammer"
//  * "Harpoon"
//  * "Mace"
//  * "Pistol"
//  * "Rifle"
//  * "Scepter"
//  * "Shield"
//  * "Speargun"
//  * "Staff"
//  * "Sword"
//  * "Torch"
//  * "Trident"
//  * "Warhorn"
//  * "GuildConsumable"
//  * "GuildDecoration"
//  * "GuildConsumableWvw"
