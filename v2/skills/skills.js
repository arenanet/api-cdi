// GET /v2/skills
// No parameters returns a list of IDs that can be bulk-expanded.

[
	1175,
	5486,
	5487,
	...
]

// GET /v2/skills/5497
// GET /v2/skills?ids=5497
// Bulk-expansion works like other endpoints.

{
	name: "Flamewall",
	description: "Create a wall of flame at the target area that burns foes.",
	type: "Weapon",
	weapon_type: "Focus",
	attunement: "Fire",
	professions: [
		"Elementalist"
	],
	slot: "Weapon_4",
	icon: "...",
	flags: [],
	id: 5497
}


// GET /v2/skills?page=0&page_size=1
// Pagination included.

[
	{
		name: "Bandage",
		description: "Call your allies for help. Restores health while you channel it.",
		type: "Weapon",
		weapon_type: "None",
		professions: [
			"Guardian",
			"Warrior",
			"Engineer",
			"Ranger",
			"Thief",
			"Elementalist",
			"Mesmer",
			"Necromancer"
		],
		slot: "Downed_4",
		icon: "...",
		flags: [],
		id: 1175
	}
]

// GET /v2/skills?ids=5534
// Some skills have weird fields -- transform_skills refers to a skill bar
// that replaces your weapon skills. The list contains skill ids.

{
	name: "Tornado",
	description: "Transform. Gain stability and shape-shift into a tornado that damages and launches foes.",
	type: "Elite",
	weapon_type: "None",
	professions: [
		"Elementalist"
	],
	slot: "Elite",
	categories: [
		"Transform"
	],
	transform_skills: [
		5752,
		5753,
		5754,
		10586,
		10586
	],
	icon: "...",
	flags: [],
	id: 5534
}

// GET /v2/skills?ids=5516,5517
// bundle_skills is basically the same thing; the distinction (I think?)
// is that you can weapon-swap away a bundle and still have access to your
// utilities.

[
	{
		name: "Conjure Fiery Greatsword",
		description: "Conjure. Manifest a fiery greatsword in your hands and at the target location. When it lands, it damages and burns foes. Wielders of this weapon gain increased power and condition damage.",
		type: "Elite",
		weapon_type: "None",
		professions: [
			"Elementalist"
		],
		slot: "Elite",
		categories: [
			"Conjure"
		],
		bundle_skills: [
			5532,
			5533,
			5697,
			5517,
			5531
		],
		icon: "..",
		flags: [ "GroundTargeted", "NoUnderwater" ],
		id: 5516
	},
	{
		name: "Fiery Rush",
		description: "Charge at your foe, leaving a line of fire behind you.",
		type: "Bundle",
		weapon_type: "None",
		professions: [
			"Thief",
			"Mesmer",
			"Warrior",
			"Elementalist",
			"Necromancer",
			"Guardian",
			"Ranger",
			"Engineer"
		],
		slot: "Weapon_4",
		icon: "...",
		flags: [],
		id: 5517
	}
]

// GET /v2/skills?ids=5812,6111
// Engineer utilities have a toolbelt_skill to indicate the associated 
// skill. The flip_skill seems a bit weird, but indicates that "Bomb Kit"
// turns into "Stow Bomb Kit" when in use.

[
	{
		name: "Bomb Kit",
		description: "Device Kit. Equip a kit that replaces your weapon with bomb skills.",
		type: "Utility",
		weapon_type: "None",
		professions: [
			"Engineer"
		],
		slot: "Utility",
		toolbelt_skill: 5813,
		flip_skill: 6111,
		categories: [
			"Kit"
		],
		bundle_skills: [
			5842,
			5823,
			5822,
			5824,
			5939
		],
		icon: "...",
		flags: [],
		id: 5812
	},
	{
		name: "Stow Bomb Kit",
		description: "Stow your bomb kit.",
		type: "Utility",
		weapon_type: "None",
		professions: [
			"Engineer"
		],
		slot: "Utility",
		toolbelt_skill: 5813,
		icon: "...",
		flags: [],
		id: 6111
	}
]

// GET /v2/skills/14375
// Warrior burst skills have a "cost" to indicate the adrenaline cost.
// Also note the slot.

{
	name: "Arcing Slice",
	description: "Burst. Deliver a circular attack to foes around you, and gain fury. Deal more damage to foes with low health.",
	type: "Profession",
	weapon_type: "None",
	professions: [
		"Warrior"
	],
	slot: "Profession_1",
	cost: 30,
	flip_skill: 14545,
	categories: [
		"Burst"
	],
	icon: "...",
	flags: [],
	id: 14375
}

// GET /v2/skills/13005
// Thief stealth skills have the "StealthAttack" category.

{
	name: "Backstab",
	description: "Stealth Attack. Attack your foe from the shadows, striking for double damage if you hit from behind.",
	type: "Weapon",
	weapon_type: "Dagger",
	professions: [
		"Thief"
	],
	slot: "Weapon_1",
	categories: [
		"StealthAttack"
	],
	icon: "...",
	flags: [],
	id: 13005
}

// GET /v2/skills/13006
// And normal thief weapon skills have their initiative cost listed in
// the "initiative" field. For their dual-wield skills, the offhand weapon
// type is listed in the dual_wield field.

{
	name: "Death Blossom",
	description: "Dual Wield. Do an evasive attack over your target, striking nearby foes three times. Each hit causes bleeding.",
	type: "Weapon",
	weapon_type: "Dagger",
	professions: [
		"Thief"
	],
	slot: "Weapon_3",
	dual_wield: "Dagger",
	categories: [
		"DualWield"
	],
	initiative: 4,
	icon: "...",
	flags: [],
	id: 13006
}
