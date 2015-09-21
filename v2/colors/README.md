# `/v2/colors`

 * Bulk-expanded
 * Allows `?ids=all`
 * Unauthenticated
 * Localized

Provides access to all colors (which are used as dyes, among other things).

## Color Objects

```json

{
	"id": 6,
	"name": "Celestial",
	"base_rgb": [
		128,
		26,
		26
	],
	"cloth": {
		"brightness": 52,
		"contrast": 1.44531,
		"hue": 10,
		"saturation": 0.0234375,
		"lightness": 1.5625,
		"rgb": [
			211,
			208,
			207
		]
	},
	"leather": {
		"brightness": 52,
		"contrast": 1.44531,
		"hue": 10,
		"saturation": 0.0234375,
		"lightness": 1.5625,
		"rgb": [
			211,
			208,
			207
		]
	},
	"metal": {
		"brightness": 52,
		"contrast": 1.91406,
		"hue": 10,
		"saturation": 0.0234375,
		"lightness": 1.91406,
		"rgb": [
			197,
			193,
			192
		]
	}
}
```

 * `id` is the object ID.
 * `name` is the localized name of the color.
 * `base_rgb` is a RGB tuple. Not sure what it's used for. 
 * `cloth`, `leather` and `metal` contain the values used in the material shader for each of the armor dyable types. There's currently no way to tell which dye slots use which shader.

When displayed as a flat UI color in-game, the cloth rgb tuple (`color.cloth.rgb`) is used.

All RGB tuple values are within the range `[0, 255]`.
