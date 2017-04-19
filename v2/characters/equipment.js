// Subendpoint of /v2/characters that just dumps equipment. Does
// not support bulk-expansion.

// GET /v2/characters/Hello/equipment
// Authorization: Bearer token123
// Scopes: account, characters, (builds or inventories)
//

{
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
				// id refers to /v2/itemstats.
				id: 161,
				attributes: {
					Power: 251,
					Precision: 179,
					CritDamage: 179
				}
			},
			// dyes only present if equipment is dyed. Always
			// has four entries; check the item's skin to see
			// how many channels there actually are. Default
			// dye is 'null'. Dyes refer to /v2/colors.
			dyes : [
				2,
				4,
				null,
				null
			]
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
		},
		{
			id: 22992,
			slot: "Sickle",
			charges: 33
		}
	]
}
