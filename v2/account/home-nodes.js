// Authenticated endpoint that returns a list of nodes that
// the account has unlocked for their home instance. Requires
// the "progression" scope _or_ the "unlocks" scope. Nodes have
// arbitrary ids but should be fairly self-explanatory.
//
// Refer to https://wiki.guildwars2.com/wiki/Home_instance

// GET /v2/account/home/nodes?access_token=foo

[
  "krait_obelisk",
  "ancient_wood_node",
  "mithril_ore_node",
  "snow_truffle_node",
  "iron_ore_node"
]
