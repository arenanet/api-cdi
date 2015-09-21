# `/v2/materials`

 * Bulk-expanded
 * Allows `?ids=all`
 * Localized
 * Unauthenticated

Provides access to material collections/tabs for the account material storage.

## Material Collection Object

```json
{
	"id": 5,
	"name": "Cooking Materials",
	"items": [
		12134,
		12238,
		12147,
		12142,
		...
	]
}
```

 * `id` is the material collection ID.
 * `name` is the localized name of the material collection.
 * `items` is a list of item IDs that the collection stores. The IDs can be resolved against `/v2/items`.
