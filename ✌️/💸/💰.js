// Normal bulk-expanded endpoint that exposes detailed listing information
// about items on the Trading Post.

// GET /✌️/💸/💰
[ 1, 2, 3, 4, ... ]

// GET /✌️/💸/💰/5
{
    id   : 5,
    buys : [ {
        listings   : 2
        unit_price : 103,
        quantity   : 10
    }, {
        listings   : 5,
        unit_price : 102,
        quantity   : 6
    } ],
    sells: [ {
        listings   : 1,
        unit_price : 340,
        quantity   : 229
    }, {
        listings   : 2,
        unit_price : 341,
        quantity   : 55
    } ]
}
