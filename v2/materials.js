// Normal bulk-expanded endpoint that dumps the metadata associated
// with categories in the account bank's material storage.

// GET /v2/materials
[ 5, 6, 29, 30, 37, 38 ]

// GET /v2/materials/5
{
	id: 5,
	name: "Cooking Materials",
	order: 16,
	items: [
		12134,
		12238,
		12147,
		...
	]
}

// Also supports the ?lang parameter to get the localized names.

// GET /v2/materials?ids=all&lang=de
[
	{
		id: 5,
		order: 16
		name: "Zutaten zum Kochen",
		items: [
			12134,
			12238,
			12147,
			...
		]
	},
	...
]

// NOTES:
//  * "order" is used for sorting in the UI; it's not necessarily
//    monotonically incrementing.
