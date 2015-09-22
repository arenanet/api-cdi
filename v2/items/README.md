# `/v2/items`

 * Bulk-expanded
 * Localized
 * Unauthenticated

## Item Objects

Item objects have some common fields, then a bunch of type-specific fields (which are jammed into `.details`. The common fields are fairly straightforward

### Common Fields

```json
{
	"name": "Major Rune of the Flock",
	"description": "Double-click to apply to a piece of armor.",
	"type": "UpgradeComponent",
	"level": 39,
	"rarity": "Rare",
	"vendor_value": 108,
	"game_types": [
		"Activity",
		"Wvw",
		"Dungeon",
		"Pve"
	],
	"flags": [ ],
	"restrictions": [ ],
	"id": 24695,
	"icon": "https://render.guildwars2.com/file/2BA523C17A3BE0D6D2EC773361746A6FE3282E23/222500.png",
}
```

 * `name` is the localized name of the item.
 * `description` is a possibly empty localized description for the item. It may be stylized.
 * `level`, if set, indicates the minimum level required to use the item.
 * `rarity` is an enumeration indicating the item's rarity and may be one of the following values:
    * `Junk`
    * `Basic`
    * `Fine`
    * `Masterwork`
    * `Rare`
    * `Exotic`
    * `Ascended`
    * `Legendary`
 * `vendor_value` is the price (in copper) vendor NPCs will pay for this item.
 * `game_types` is an enumeration array indicating which contexts this item can be used in. It has the following possible values:
    * `Activity`
    * `Dungeon`
    * `Pve`
    * `Pvp`
    * `PvpLobby`
    * `Wvw`
 * `flags` are extra item attributes. The possible flag values are:
    * `AccountBound` - This item accountbinds when acquired.
    * `HideSuffix` - Don't display the e.g. "of Fire" name suffix from the default upgrade.
    * `MonsterOnly` - This item should never have been exposed via API.
    * `NoMysticForge` - The item cannot be tossed into the Mystic Forge.
    * `NoSalvage` - The item cannot be salvaged.
    * `NoSell` - The item cannot be sold to an NPC vendor.
    * `NotUpgradeable` - The item cannot have upgrades applied to it.
    * `SoulbindOnAcquire` - This item soulbinds as soon as it enters a player's inventory. Note the lowercase `b`.
    * `Unique` - Only one instance of the item may be equipped at a time (e.g., can't have two of the same `Unique` trinket equipped).
    * `NoUnderwater` - This item cannot be used while underwater.
    * `SoulBindOnUse` - The item is soulbound when it is used/equipped.
    * `AccountBindOnUse` - The item is accountbound when it is used/equipped.
 * `restrictions` is an enumeration array indicating which races/genders/professions can use this item. If empty, the item has no restrictions and can be used by any character.
    * `Female`
    * `Male`
    * `Asura`
    * `Charr`
    * `Human`
    * `Norn`
    * `Sylvari`
    * `Engineer`
    * `Elementalist`
    * `Guardian`
    * `Mesmer`
    * `Necromancer`
    * `Ranger`
    * `Thief`
    * `Warrior`
    * `Revenant`
 * `icon` is a link to the item's in-game icon.
 * `default_skin`, if set, references `/v2/skins`. NOTE: If `default_skin` is set, the skin's icon is used in-game, not the item icon.
 * `type` is an enumeration which indicates what's in the `.details` field. It has one of the following values:
    * `Armor`
    * `Back`
    * `Bag`
    * `Consumable`
    * `Container`
    * `CraftingMaterial`
    * `Gathering`
    * `Gizmo`
    * `MiniPet`
    * `Tool`
    * `Trait`
    * `Trinket`
    * `Trophy`
    * `UpgradeComponent`
    * `Weapon`

### `Armor`

### `Back`

### `Bag`

### `Consumable`

### `Container`

### `CraftingMaterial`

### `Gathering`

### `Gizmo`

### `MiniPet`

### `Tool`

### `Trait`

### `Trinket`

### `Trophy`

### `UpgradeComponent`

### `Weapon`
