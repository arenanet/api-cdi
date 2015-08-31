// Normal bulk-expanded endpoint that exposes aggregated price information
// about items on the Trading Post.

// GET /v2/commerce/prices
[ 1, 2, 3, 4, ... ]

// GET /v2/commerce/prices/5
{
    id   : 5,
    buys : {
        quantity   : 20572,
        unit_price : 103
    },
    sells: {
        quantity   : 12284,
        unit_price : 340
    }
}
