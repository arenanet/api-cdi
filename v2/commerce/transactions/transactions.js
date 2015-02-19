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
// GET /v2/commerce/transactions/history/buys
// GET /v2/commerce/transactions/history/sells

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
