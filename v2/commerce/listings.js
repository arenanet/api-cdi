// Endpoint that exposes detailed listing information
// about item listings on the Trading Post.

// GET /v2/commerce/listings
[ 1, 2, 3, 4, ... ]

// GET /v2/commerce/listings/5
// GET /v2/commerce/listings/5?page=0&page_size=200
{
    id : 5,

    buys_total  : 2,
    sells_total : 2,

    buys_listings_total  : 7,
    buys_quantity_total  : 16,
    sells_listings_total : 3,
    sells_quantity_total : 284,

    buys  : [
        {
            listings   : 2
            unit_price : 103,
            quantity   : 10
        },
        {
            listings   : 5,
            unit_price : 102,
            quantity   : 6
        }
    ],
    sells: [
        {
            listings   : 1,
            unit_price : 340,
            quantity   : 229
        },
        {
            listings   : 2,
            unit_price : 341,
            quantity   : 55
        }
    ]
}

// NOTES:
//  Pagination works a bit differently -- both buys/sells are
//  paginated simultaneously (moving outwards from the spread
//  as pages go up).
//
//  Normal pagination details are returned in the response
//  headers, though their meanings are a bit distorted:
//    * X-Page-Total   -- total number of pages
//    * X-Result-Total -- total  number of results
//    * X-Page-Count   -- (buys.length + sells.length) in response
//    * X-Result-Total -- (buys.length + sells.length) in total
