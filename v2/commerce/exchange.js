// Provides programmatic access to the gem-gold exchange.

// GET /v2/commerce/exchange
[ "coins", "gems" ]

// GET /v2/commerce/gems?quantity=1000000
{
    "coins_per_gem": 1821,
    "quantity": 549
}

// "coins_per_gem" is the rate quoted for the provided quantity.
// "quantity" is how many gems the exchange would give you for the input quantity of gold.

// GET /v2/commerce/coins?quantity=549
{
    "coins_per_gem": 1257,
    "quantity": 690284
}

// "coins_per_gem" is the rate quoted for the provided quantity of gems.
// "quantity" is the amount of coin the exchange would give you for the input quantity of gems.
