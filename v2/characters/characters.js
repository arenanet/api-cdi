// GET /v2/characters
// Authorization: Bearer token123
// Scopes: account, characters
[ "Hello" ]

// GET /v2/characters/Hello
// Authorization: Bearer token123
// Scopes: account, characters
{
	name: "Hello",
	race: "Human",
	gender: "Female",
	profession: "Thief",
	elite : {
		pve : "Elementalist",
		pvp : "Elementalist",
		wvw : "Tempest"
	},
	level: 80,
	completion: 100,
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
		elite : {
			pve : "Elementalist",
			pvp : "Elementalist",
			wvw : "Tempest"
		},
		level: 80,
		completion: 100,
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
{
	name: "Hello",
	race: "Human",
	gender: "Female",
	profession: "Thief",
	elite : {
		pve : "Elementalist",
		pvp : "Elementalist",
		wvw : "Tempest"
	},
	level: 80,
	completion: 100,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	created: "2015-06-05T19:45:00Z",
	age: 91,
	deaths: 0
	equipment: [
		{
			id: 6472,
			slot: "Coat"
		},
		{
			id: 6470,
			slot: "Boots"
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
	]
}

// GET /v2/characters/Hello
// Authorization: Bearer token123
// Scopes: account, characters, builds
//
// NOTE: builds gives access to equipment -- but not the rest of the
// inventory stuff which also gives access to equipment. Kinda weird
// but makes sense, in a way.
{
	name: "Hello",
	race: "Human",
	gender: "Female",
	profession: "Thief",
	elite : {
		pve : "Elementalist",
		pvp : "Elementalist",
		wvw : "Tempest"
	},
	level: 80,
	completion: 100,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	created: "2015-06-05T19:45:00Z",
	age: 91,
	deaths: 0
	equipment: [
		{
			id: 6472,
			slot: "Coat"
		},
		{
			id: 6470,
			slot: "Boots"
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
