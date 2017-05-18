// Bulk-expanded endpoint that provides profession metadata.

// GET /v2/professions

[ "Thief", "Warrior", "Necromancer", /* ... */ ]

// GET /v2/professions/Thief
// GET /v2/professions?id=Thief

{
	"id" : "Thief",
	"name" : "Thief",
	"icon" : "https://render.guildwars2.com/...",
	"icon_big" : "https://render.guildwars2.com/...",
	"specializations" : [
		28, 35, 20, 54, 44, 7
	],
	"training" : [
		{
			"id" : 52,
			"category" : "Skills",
			"name" : "Signet Training",
			"track" : [
				{
					"cost" : 2,
					"type" : "Skill",
					"skill_id" : 13064
				},
				{
					"cost" : 5,
					"type" : "Skill",
					"skill_id" : 13046
				},
				// ...
			]
		},
		{
			"id" : 116,
			"category" : "Specializations",
			"name" : "Shadow Arts",
			"track" : [
				{
					"cost" : 2,
					"type" : "Trait",
					"trait_id" : 1294
				},
				{
					"cost" : 5,
					"type" : "Trait",
					"trait_id" : 1160
				},
				// ...
			]
		},
		{
			"id" : 106,
			"category" : "EliteSpecializations",
			"name" : "Daredevil",
			"track" : [
				{
					"cost" : 30,
					"type" : "Trait",
					"trait_id" : 1957
				},
				{
					"cost" : 40,
					"type" : "Trait",
					"trait_id" : 1994
				},
				{
					"cost" : 55,
					"type" : "Skill",
					"skill_id" : 31623
				}
				// ...
			]
		}
	],
	"weapons" : {
		"Dagger" : {
			"flags" : [ "Mainhand", "Offhand" ],
			"skills" : [
				// Most skills look like this.
				{
					"id"   : 13004,
					"slot" : "Weapon_1"
				},

				// Each thief dual-wield indicates which
				// offhand it requires.
				{
					"id"      : 14003,
					"slot"    : "Weapon_3",
					"offhand" : "Dagger"
				},

				// Elementalist skills indicate their
				// attunement.
				{
					"id"         : 1200,
					"slot"       : "Weapon_1",
					"attunement" : "Fire"
				}
			]
		},
		"Staff" : {
			"flags" : ["TwoHand"],
			// Weapons that require a specialization to
			// use have an extra "specialization" field.
			"specialization" : 12,
			"skills" : [ /* ... */ ]
		}
	},
	// List of all non-weapon skills that can be equipped by this
	// profession (doesn't include transform skills and such).
	"skills" : [
		{
			"id"   : 34,
			"slot" : "Profession_1",
			"type" : "Profession"
		},
		{
			"id"   : 45,
			"slot" : "Utility",
			"type" : "Utility"
		},
		{
			"id"   : 98,
			"slot" : "Heal",
			"type" : "Heal"
		},
		{
			"id"   : 102,
			"slot" : "Elite",
			"type" : "Elite"
		},
		// NOTE: Thief steal skills will have a 'source' field
		// indicating the profession from which the skill can
		// be stolen.
		{
			"id"     : 1033,
			"slot"   : "Profession_2",
			"type"   : "Profession",
			"source" : "Guardian"
		}
	],
	"flags" : []
}

// NOTES:
//  * flags may currently contain:
//     - "NoRacialSkills": this profession cannot equip racial skills.
//     - "NoWeaponSwap": this profession can only use one weapon set.
//  * weapon.flags can contain:
//     - "Mainhand": equippable into the mainhand slot.
//     - "Offhand": equippable into the offhand slot.
//     - "TwoHand": equippable into both slots.
//     - "Aquatic": equippable into underwater slot.

// Can also fetch multiple professions via bulk-expanded options, e.g.
//
// GET /v2/professions?ids=Thief,Warrior
// GET /v2/professions?page=0&page_size=2

[
	{
		"id" : "Thief",
		// ...
	},
	{
		"id" : "Warrior",
		// ...
	}
]
