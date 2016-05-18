// GET /v2/characters
// Authorization: Bearer token123
// Scopes: account, characters
[ "Hello" ]

// GET /v2/characters/Hello
// Authorization: Bearer token123
// Scopes: account, characters
//
// Without additional permissions, only a minimum amount of data is exposed.
//
{
	name: "Hello",
	race: "Human",
	gender: "Female",
	profession: "Thief",
	level: 80,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	created: "2015-06-05T19:45:00Z",
	age: 91, // in seconds.
	deaths: 0,
	crafting: [
		{
			discipline : "Leatherworker",
			active : true,
			rating : 500
		},
		{
			discipline : "Cook",
			active : false,
			rating : 400
		},
		{
			discipline : "Armorsmith",
			rating: 423,
			active : true
		}
	]
}

// GET /v2/characters?page=0
// Authorization: Bearer token123
// Scopes: account, characters
[
	{
		name: "Hello",
		race: "Human",
		gender: "Female",
		profession: "Thief",
		level: 80,
		guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58"
		created: "2015-06-05T19:45:00Z",
		age: 91,
		deaths: 0,
		crafting: [
			{
				discipline : "Cook",
				rating : 400,
				active : true
			}
		]
	}
]

// GET /v2/characters/Hello
// Authorization: Bearer token123
// Scopes: account, characters, inventories
//
// The "inventories" permission grants access to the following additional fields:
//  * equipment: what the character currently has equipped. Refer to the notes
//    on the bottom of this document for possible slot enumeration values. Note
//    that the "builds" permission will also expose equipment.
//  * bags: which inventory bags the character has equipped, and their contents.
//  * recipes: the recipe ids for recipes unlocked by this character. Will be
//    [] if the character has unlocked no recipes. Does not include recipes
//    marked with the AutoLearned flag.
//
{
	name: "Hello",
	race: "Human",
	gender: "Female",
	profession: "Thief",
	level: 80,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	created: "2015-06-05T19:45:00Z",
	age: 91,
	deaths: 0
	equipment: [
		{
			id: 6472,
			slot: "Coat",
			binding: "Account"
		},
		{
			id: 6470,
			slot: "Boots"
			binding: "Character",
			bound_to: "Hello",
			// stats only present for choosy-stat items.
			stats: {
				// id refers to /v2/itemstacks.
				id: 161,
				attributes: {
					Power: 251,
					Precision: 179,
					CritDamage: 179
				}
			}
		},
		{
			id: 6549,
			slot: "Helm"
		},
		{
			id: 6473,
			slot: "Leggings"
		},
		{
			id: 33345,
			slot: "WeaponA1"
		},
		{
			id: 49812,
			slot: "WeaponB1"
			upgrades: [
				24607,
				24548
			]
		}
	],
	bags: [
		{
			id: 8941,
			size: 4
			inventory: [
				null,
				{
					id: 32134,
					count: 1
				},
				null,
				null
			]
		},
		null,
		{
			id: 8932,
			size: 20
			inventory: [
				null,
				null,
				...
			]
		},
		{
			id: 48715,
			size: 20
		},
		null
	],
	recipes : [
		1, 2, 3
	]
}

// GET /v2/characters/Hello
// Authorization: Bearer token123
// Scopes: account, characters, builds
//
// With the builds permission, the following fields are added:
//  * equipment - will be included with either "inventories" or "builds".
//  * specializations - the character's equipped specializations and traits.
//  * skills - the character's equipped slot skills(heal, utility, elite), pets (for rangers), legends(for revenants).
//
{
	name: "Hello",
	race: "Human",
	gender: "Female",
	profession: "Thief",
	level: 80,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	created: "2015-06-05T19:45:00Z",
	age: 91,
	deaths: 0
	equipment: [
		{
			id: 6472,
			slot: "Coat",
			binding: "Account"
		},
		{
			id: 6470,
			slot: "Boots",
			binding: "Character",
			bound_to: "Hello"
		},
		{
			id: 6549,
			slot: "Helm"
		},
		{
			id: 6473,
			slot: "Leggings"
		},
		{
			id: 33345,
			slot: "WeaponA1"
		},
		{
			id: 49812,
			slot: "WeaponB1"
			upgrades: [
				24607,
				24548
			]
		}
	],
	skills: {
		pve: {
			legends: ["Legend1", "Legend3"],
			heal: 123,
			utility: [ 
				234,
				345,
				456
				],
			elite: 567
		},
		pvp: {
			legends: ["Legend1", "Legend3"],
			heal: 123,
			utility: [ 
				234,
				345,
				456
				],
			elite: 567
		},
		wvw: {
			pets: {
				terrestrial : [ 8, 26 ],
				aquatic : [ 8 ]
			},
			heal: 123,
			utility: [ 
				234,
				345,
				456
				],
			elite: 567	
		}
	},
	specializations : {
		pve : [
			{
				id: 36,
				traits: [
					1276,
					1292,
					null
				]
			},
			{
				id: 34,
				traits: [
					1163,
					1277,
					1158
				]
			},
			null
			
		],
		pvp : [
			{
				id: 36,
				traits: [
					1276,
					1292,
					1269
				]
			},
			{
				id: 35,
				traits: [
					1284,
					1130,
					1135
				]
			},
			{
				id: 34,
				traits: [
					1163,
					1277,
					1158
				]
			}
		],
		wvw : [
			{
				id: 36,
				traits: [
					1276,
					1292,
					null
				]
			},
			{
				id: 34,
				traits: [
					1163,
					1277,
					1158
				]
			},
			{
				id: 50,
				traits: [
					null,
					null,
					null
				]
			}
		]
	},
	equipment_pvp : {
		amulet : 8,     // references /v2/pvp/amulets
		rune   : 10293, // references /v2/items
		sigils : [      // references /v2/items
			10293,  // order matches UI, left -> right
			23948,
			10293,
			23948
		]
	},
	crafting : []
}

// Possible equipment slots:
//  * HelmAquatic
//  * Backpack
//  * Coat
//  * Boots
//  * Gloves
//  * Helm
//  * Leggings
//  * Shoulders
//  * Accessory1
//  * Accessory2
//  * Ring1
//  * Ring2
//  * Amulet
//  * WeaponAquaticA
//  * WeaponAquaticB
//  * WeaponA1 (primary mainhand)
//  * WeaponA2 (primary offhand)
//  * WeaponB1 (secondary mainhand)
//  * WeaponB2 (secondary offhand)
//  * Sickle
//  * Axe
//  * Pick
