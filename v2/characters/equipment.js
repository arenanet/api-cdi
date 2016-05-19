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
	]
}
