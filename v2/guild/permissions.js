// Provides details about guild permission id strings.
// Bulk-expanded endpoint with string keys:

// GET /v2/guild/permissions
[
    "Admin",
    "TeamAdmin",
    ...
]

// GET /v2/guild/permissions/TeamAdmin
// GET /v2/guild/permissions?id=TeamAdmin

{
    "id": "TeamAdmin",
    "name": "Team Administrator",
    "description": "Create or delete teams and add or remove team members."
}

// GET /v2/guild/permissions?page=0&page_size=1
// GET /v2/guild/permissions?ids=TeamAdmin

[
	{
	    "id": "TeamAdmin",
	    "name": "Team Administrator",
	    "description": "Create or delete teams and add or remove team members."
	}
]
