// Authenticated endpoint that outputs guild ranks.
// **only available with keys from guild leaders for now**
// Requires scope: "guilds"

// GET /v2/guilds/:id/ranks?access_token=:token

[
	{
		id: "Leader",
		order: 1,
		permissions: [
			"Admin",
			"EditRoles",
			"ClaimableEditOptions",
			...
		]
	},
	{
		id: "Member",
		order: 3,
		permissions: [
			"StartingRole"
		]
	},
	{
		id: "Officer",
		order: 2,
		permissions: [
			"Admin"
		]
	}
]

// "id" is both the unique id (referenced by /v2/guild/:id/members)
// and it's the displayed user-editable string in the UI.

// "order" is used for sorting.

// "permissions" are the permission flags granted to any member at
// this rank. They can be resolved against /v2/guild/permissions
// for the localized name/description.
