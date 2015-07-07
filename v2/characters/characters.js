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
	crafting:[
		"Leatherworker",
		"Weaponsmith",
		"Tailor",
		null,
		],
	order:"Order of Whispers",
	storymode:[
		"Ascalonian Catacombs",
		"Caudecus's Manor",
		"Twilight Arbor",
		null,
		null,
		null,
		null,
		"The Ruined City of Arah",
		],
// or
	storymodes: [
		 {
		  dungeon: "Ascalonian Catacombs",
		  done : true
		 }
		 	 {
		  dungeon: "Caudecus's Manor",
		  done : true
		 }
		 	 {
		  dungeon: "Twilight Arbor",
		  done : false
		 }
		 	 {
		  dungeon: "Sorrow's Embrace",
		  done : false
		 }
		 	 {
		  dungeon: "Citadel of Flame",
		  done : false
		 }
		 	 {
		  dungeon: "Honor of the Waves",
		  done : true
		 }
		 	 {
		  dungeon: "Crucible of Eternity",
		  done : true
		 }
		 	 {
		  dungeon: "The Ruined City of Arah",
		  done : true
		 }
	]
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
			crafting:[
			"Leatherworker",
			"Weaponsmith",
			"Tailor",
			null,
			],
		order:"Order of Whispers",
		storymode:[
			"Ascalonian Catacombs",
			"Caudecus's Manor",
			"Twilight Arbor",
			null,
			null,
			null,
			null,
			"The Ruined City of Arah",
		],
// or
	storymodes: [
		 {
		  dungeon: "Ascalonian Catacombs",
		  done : true
		 }
		 	 {
		  dungeon: "Caudecus's Manor",
		  done : true
		 }
		 	 {
		  dungeon: "Twilight Arbor",
		  done : false
		 }
		 	 {
		  dungeon: "Sorrow's Embrace",
		  done : false
		 }
		 	 {
		  dungeon: "Citadel of Flame",
		  done : false
		 }
		 	 {
		  dungeon: "Honor of the Waves",
		  done : true
		 }
		 	 {
		  dungeon: "Crucible of Eternity",
		  done : true
		 }
		 	 {
		  dungeon: "The Ruined City of Arah",
		  done : true
		 }
	]
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
	crafting:[
		"Leatherworker",
		"Weaponsmith",
		"Tailor",
		null,
		],
	order:"Order of Whispers",
	storymode:[
		"Ascalonian Catacombs",
		"Caudecus's Manor",
		"Twilight Arbor",
		null,
		null,
		null,
		null,
		"The Ruined City of Arah",
		],
// or
	storymodes: [
		 {
		  dungeon: "Ascalonian Catacombs",
		  done : true
		 }
		 	 {
		  dungeon: "Caudecus's Manor",
		  done : true
		 }
		 	 {
		  dungeon: "Twilight Arbor",
		  done : false
		 }
		 	 {
		  dungeon: "Sorrow's Embrace",
		  done : false
		 }
		 	 {
		  dungeon: "Citadel of Flame",
		  done : false
		 }
		 	 {
		  dungeon: "Honor of the Waves",
		  done : true
		 }
		 	 {
		  dungeon: "Crucible of Eternity",
		  done : true
		 }
		 	 {
		  dungeon: "The Ruined City of Arah",
		  done : true
		 }
	]
	level: 80,
	guild: "1F5F70AA-1DB6-E411-A2C4-00224D566B58",
	equipment: {
		aquatic_helm: {
			id: 69091
		},
		backpack: {
			id: 49371,
			infusions: [
				49453
			]
		},
		coat: {
			id: 48085,
			infusions: [
				37131
			]
		},
		boots: {
			id: 48084
		},
		gloves: {
			id: 48086
		},
		leggings: {
			id: 48088
		},
		shoulders: {
			id: 48089
		},
		accessory1: {
			id: 39233
		},
		accessory2: {
			id: 39232
		},
		ring1: {
			id: 37075
		},
		ring2: {
			id: 37086
		},
		amulet: {
			id: 39308
		},
		weapon_mainhand_primary: {
			id: 46771
		},
		weapon_offhand_primary: null,
		weapon_mainhand_secondary: {
			id: 46760
		},
		weapon_offhand_secondary: {
			id: 46767
		},
		aquatic_weapon_primary: null,
		aquatic_weapon_secondary: null,
		sickle: {
			id: 23029
		},
		axe: {
			id: 23030
		},
		pick: {
			id: 23031
		}
	},
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
