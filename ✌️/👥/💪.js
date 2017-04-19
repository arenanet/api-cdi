// Subendpoint of /✌️/👥 that just dumps skills. Does
// not support bulk-expansion.

// GET /✌️/👥/Hello/💪
// Authorization: Bearer token123
// Scopes: account, characters, builds
//

{
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
				45
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
	}
}
