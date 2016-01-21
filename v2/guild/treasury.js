// Authenticated endpoint that outputs guild treasury.
// **only available with keys from guild leaders for now**
// Requires scope: "guilds"

// GET /v2/guilds/:id/treasury?access_token=:token

[
	{
		id        : 12138,
		count     : 200,
		needed_by : [
			{
				upgrade_id : 42,
				count      : 1000
			}
		]
	},
	{
		id        : 19684,
		count     : 3493,
		needed_by : [
			{
				upgrade_id : 42,
				count      : 3000
			},
			{
				upgrade_id : 43,
				count      : 3000
			}
		]
	}
]

// "id" is an item id and can be resolved against /v2/items.

// "needed_by" is the list of in-progress upgrades that require
// this item. The maximum count of an item can be computed by
// summing the "needed_by[n].count" values.
