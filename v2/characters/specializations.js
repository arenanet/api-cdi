// Subendpoint of /v2/characters that just dumps specializations. Does
// not support bulk-expansion.

// GET /v2/characters/Hello/specializations
// Authorization: Bearer token123
// Scopes: account, characters, builds
//

{
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
	}
}
