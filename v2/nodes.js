// Normal bulk-expanded endpoint that returns the possible
// values from /v2/account/nodes.

// GET /v2/nodes

[
  "basic_ore_nodes",
  "basic_lumber_nodes",
  "basic_harvesting_nodes",
  "basic_cloth_rack",
  "basic_leather_rack",
  // ...
]

// Bulk expansion works but these objects just have ids, e.g.

// GET /v2/nodes/basic_ore_nodes

{
  "id": "basic_ore_nodes"
}
