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
	level: 80,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58"
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
	level: 80,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	equipment: [
		{
			id: 69091,
			slot: "HelmAquatic"
		},
		{
			id: 49371,
			slot: "Backpack",
			infusions: [
				49453
			]
		},
		{
			id: 48085,
			slot: "Coat",
			infusions: [
				37131
			]
		},
		{
			id: 48084,
			slot: "Boots"
		},
		{
			id: 48086,
			slot: "Gloves"
		},
		{
			id: 48088,
			slot: "Leggings"
		},
		{
			id: 48089,
			slot: "Shoulders"
		},
		{
			id: 39233,
			slot: "Accessory"
		},
		{
			id: 39232,
			slot: "Accessory"
		},
		{
			id: 37075,
			slot: "Ring"
		},
		{
			id: 37086,
			slot: "Ring"
		},
		{
			id: 39308,
			slot: "Amulet"
		},
		{
			id: 46771,
			slot: "Weapon"
		},
		{
			id: 46760,
			slot: "Weapon"
		},
		{
			id: 46767,
			slot: "Weapon"
		},
		{
			id: 23029,
			slot: "Sickle"
		},
		{
			id: 23030,
			slot: "Axe"
		},
		{
			id: 23031,
			slot: "Pick"
		}
	],
	inventory: [
		null,
		null,
		null,
		null,
		{
			id: 12138,
			count: 217
		},
		null,
		{
			id: 626,
			count: 1,
			upgrades: [
				24797
			]
		},
		null,
		null,
		{
			id: 19976,
			count: 1
		},
		{
			id: 67134,
			count: 1
		},
		{
			id: 8934,
			count: 1
		},
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		{
			id: 12138,
			count: 33
		}
	],
	bags: [
		{
			id: 8941,
			size: 4
		},
		null,
		{
			id: 8932,
			size: 20
		},
		{
			id: 48715,
			size: 20
		},
		{
			id: 48715,
			size: 20
		}
	]
}
