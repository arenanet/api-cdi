// Authenticated endpoint (requires "contacts" permission) that
// dumps out the account's contacts.

// GET /v2/account/contacts

[ "friends", "followers", "blocked" ]

// GET /v2/account/contacts/friends
// Authorization: Bearer <contacts API key>

[
	{
		"id"       : "guid",
		"name"     : "Lawton.7615",
		"nickname" : "My Other Account"
	}
]

// GET /v2/account/contacts/blocked
// Authorization: Bearer <contacts API key>

[
	{
		"id"   : "guid",
		"name" : "Lawton II.1111"
	}
]

// GET /v2/account/contacts/followers
// Authorization: Bearer <contacts API key>

[
	{
		"id"   : "guid",
		"name" : "Lawton III.2948"
	}
]

// NOTES:
//  * "id" corresponds to the account id, as obtainable from
//    /v2/account.
//  * "nickname" is omitted if you've not set a nickname for
//    the contact.
