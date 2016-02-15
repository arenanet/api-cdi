// GET /v2/commerce/transactions
// Authorization: Bearer access-token
// NOTE: requires 'account' and 'tradingpost' scopes.

[
	"current",
	"history"
]

// GET /v2/commerce/transactions/current
// GET /v2/commerce/transactions/history

[
	"buys",
	"sells"
]

// GET /v2/commerce/transactions/current/buys
// GET /v2/commerce/transactions/current/sells
//
// NOTE: These endpoints are paginated and accept both the
// ?page_size and ?page query parameters. In an odd twist of
// fate, the usual X-Page-Total and X-Result-Total headers
// are omitted, though, so you'll need to continue incrementing
// ?page until no more results are returned.

[
	{
		id: 1999,
		item_id: 19699,
		price: 1004,
		quantity: 20,
		created: "2014-12-15T14:43:36+00:00"
	},
	{
		id: 1997,
		item_id: 19699,
		price: 1003,
		quantity: 20,
		created: "2014-12-15T14:43:35+00:00"
	},
	...
]

// GET /v2/commerce/transactions/history/buys
// GET /v2/commerce/transactions/history/sells
//
// NOTE: These endpoints are also paginated. See the above note
// on usage/cavaets.

[
	{
		id: 1000,
		item_id: 19699,
		price: 1004,
		quantity: 20,
		created: "2014-12-15T14:59:38+00:00",
		purchased: "2014-12-15T14:59:39+00:00"
	},
	{
		id: 999,
		item_id: 19699,
		price: 1003,
		quantity: 20,
		created: "2014-12-15T14:59:36+00:00",
		purchased: "2014-12-15T14:59:37+00:00"
	}
	...
]


// Example transaction flow: buying an item.
// Initial state: no pending orders:
// GET /v2/commerce/transactions/current/buys
[]

// GET /v2/commerce/transactions/history/buys
[]

// List a buy order for something.
// GET /v2/commerce/transactions/current/buys
[
	{
		id : 42,
		item_id : 12138,
		price : 1002,
		quantity: 100,
		created: "2014-12-15T14:59:36+00:00"
	}
]

// Someone sells you some butter.
// GET /v2/commerce/transactions/current/buys
[
	{
		id : 42,
		item_id : 12138,
		price : 1002,
		quantity: 92,
		created: "2014-12-15T14:59:36+00:00"
	}
]

// GET /v2/commerce/transactions/history/buys
[
	{
		id : 103,
		item_id : 12138,
		price : 1002,
		quantity: 8,
		created: "2014-12-15T14:59:36+00:00"
		purchased: "2014-12-15T15:59:36+00:00"
	}
]

// Then someone sells you the rest.
// GET /v2/commerce/transactions/current/buys
[]

// GET /v2/commerce/transactions/history/buys
[
	{
		id : 112,
		item_id : 12138,
		price : 1002,
		quantity: 92,
		created: "2014-12-15T14:59:36+00:00"
		purchased: "2014-12-15T15:05:00+00:00"
	},
	{
		id : 103,
		item_id : 12138,
		price : 1002,
		quantity: 8,
		created: "2014-12-15T14:59:36+00:00"
		purchased: "2014-12-15T15:59:36+00:00"
	}
]

// Don't forget you may need to use the pagination parameters
// to see the entire result set.

// GET /v2/commerce/transactions/history/buys?page_size=200&page=0
[
	// First 200 results.
]
