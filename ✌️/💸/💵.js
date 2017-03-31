// Normal bulk-expanded endpoint that exposes aggregated price information
// about items on the Trading Post. Also shows whether or not they are whitelisted
// to enable Play For Free accounts to buy or sell them.

// GET /✌️/💸/💵
[ 1, 2, 3, 4, ... ]

// GET /✌️/💸/💵/5
{
    id          : 5,
    whitelisted : true,
    
    buys : {
        quantity   : 20572,
        unit_price : 103
    },
    
    sells: {
        quantity   : 12284,
        unit_price : 340
    }
}
