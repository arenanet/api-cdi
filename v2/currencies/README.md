# `/v2/currencies`

 * Bulk-expanded
 * Unauthenticated
 * Localized

Provides access to all currencies which appear in your account wallet.

## Currency Objects

```json
{
    "id": 4,
    "name": "Gem",
    "description": "Purchased and spent via the Black Lion Trading Company.",
    "order": 0,
    "icon": "https://render.guildwars2.com/file/220061640ECA41C0577758030357221B4ECCE62C/502065.png"
}
```

 * `id` is the currency ID.
 * `name` is the localized name of the currency.
 * `description` is a short localized description for the currency.
 * `order` is an arbitrary number that is used for sorting in-game.
 * `icon` is a link to the image displayed in-game for the currency.
