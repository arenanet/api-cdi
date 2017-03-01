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

// The following are the possible nodes:
//
//   "basic_ore_nodes"
//   "basic_lumber_nodes"
//   "basic_harvesting_nodes"
//   "basic_cloth_rack"
//   "basic_leather_rack"
//   "hard_wood_node"
//   "ancient_wood_node"
//   "elder_wood_node"
//   "iron_ore_node"
//   "platinum_ore_node"
//   "mithril_ore_node"
//   "orichalcum_ore_node"
//   "omnomberry_node"
//   "snow_truffle_node"
//   "lotus_node"
//   "orrian_truffle_node"
//   "flaxseed_node"
//   "ghost_pepper_node"
//   "aurilium_node"
//   "enchanted_treasure_chest"
//   "candy_corn_node"
//   "wintersday_tree"
//   "quartz_node"
//   "sprocket_generator"
//   "krait_obelisk"
//   "bandit_chest"
//   "bloodstone_crystals"
//   "king_sized_candy_corn"
//   "airship_cargo"
//   "crystallized_supply_cache"
//   "exalted_chest"
//   "petrified_stump"
//   "winterberry_bush"
//   "jade_fragment"
//   "noxious_pod"
