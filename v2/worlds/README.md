# `/v2/worlds`

 * Bulk-expanded
 * Unauthenticated
 * Localized

Provides access to the list of worlds.

## World Objects

```json
{
	"id" : 1001,
	"name" : "Anvil Rock",
	"population" : "Medium"
}
```

 * `id` is the object ID.
 * `name` is the localized name of the world.
 * `population` is an enumeration which is displayed in-game and affects transfer costs and such. It is one of the following:
   * `Low`
   * `Medium`
   * `High`
   * `VeryHigh`
   * `Full`

