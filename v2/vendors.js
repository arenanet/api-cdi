// Bulk-expanded endpoint that provides localized vendor data. Note
// that "vendors" in GW2 aren't NPCs -- they're simply the inventories
// that are presented for sale when a shop window opens up.
//
// Correlation between NPCs and vendors is left for a future release,
// but gizmo-type items that open a vendor window should have a 
// details.vendors field with an array of vendor ids.

// GET /v2/vendors

[ 1, 2, 3, /* ... */ ]

// GET /v2/vendors/1
// GET /v2/vendors?id=1


// GET /v2/vendors?page_size=2&page=0
// GET /v2/vendors?ids=69,258


[
  {
    "id": 69,
    "tabs": [
      {
        "name": "",
        "purchase_limit": 1,
        "items": [
          {
            "id": 73141,
            "count": 1,
            "costs": []
          },
          /* ... */
        ]
      },
      /* ... */
    ]
  },
  {
    "id": 258,
    "tabs": [
      {
        "name": "Material",
        "items": [
          {
            "id": 62942,
            "count": 1,
            "costs": [
              {
                "currency_id": 1,
                "count": 8
              }
            ]
          },
          {
            "id": 19704,
            "count": 10,
            "costs": [
              {
                "item_id" : 62942,
                "count": 1
              }
            ]
          }
          /* ... */
        ]
      },
      /* ... */
    ]
  }
]

// NOTES:
// * purchase_limit is the total number of items that may be purchased
//   per day from this tab.
// * items[n].costs may be empty; this means the item is free.
// * items[n].costs.currency_id refers to /v2/currencies.
// * items[n].costs.item_id may be set if the vendor's price is by item
//   rather than currency (e.g., for the guild decoration vendor). It refers
//   to /v2/items.
// * Vendors that have a rotating inventory (e.g., fractal reliquary) are
//   displayed with the current stock (+/- 5 minutes). In those cases, the
//   stock updates daily and is totally random.
