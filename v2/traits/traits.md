`/v2/traits` acts like a normal bulk-expanded endpoint. When requested with no parameters, it returns a list of ids for every trait object it exposes. These ids can be resolved via a variety of means:

 * `/v2/traits/:id` returns a single trait.
 * `/v2/traits?ids=2,3,4` returns a set of user-specified traits.
 * `/v2/traits?page=0&page_size=200` returns a paginated list of traits.
 
Additional metadata is contained in the response headers:

 * `X-Page-Size` (when using `?page=`) echos the requested page size.
 * `X-Page-Total` (when using `?page=`) contains the total number of pages.
 * `X-Result-Count` contains the number of objects returned in this response.
 * `X-Result-Total` contains the total number of objects.
 * `Link` (when using `?page=`) contains an RFC6690 link specifier.

These should all be exposed to CORS requests.

The following describes the result format.

## Traits

Returned traits will have the following structure --

```
{
    id: 238,
    tier: 3,
    order: 2,
    name: "Evasive Arcana",
    description: "Create an attunement-based spell after dodging.",
    slot: "Major",
    facts: <skill-fact-list>,
    traited_facts: <skill-fact-list>,
    skills: <skill-list>
    specialization: 11,
    icon: "url"
}
```

Where:

 * `id` is the numerical id of the trait.
 * `tier` is a value from `1-3` and indicates which set of three traits within the specialization the trait can be selected from.
 * `order` is the top-bottom ordering within the tier, from `0-2`. Minor traits will always have an order of `0`.
 * `name` is the localized name of the trait.
 * `description` is the localized description of the trait.
 * `slot` is either `"Major"` or `"Minor"`; `"Minor"` traits are the ones that are unselectable.
 * `facts` are the baseline tooltips that are displayed for the trait.
 * `traited_facts` are conditional modifications to `facts` when there's interplay between traits.
 * `skills` is a list of skills that may be triggered by this trait.
 * `specialization` is a reference to `/v2/specializations` to which this trait belongs.
 * `icon` is a URL to the in-game icon displayed for this trait.
 
## Skills
 
 The skills returned in `trait.skills` look like --
 
 ```
{
    name: "Flame Burst",
    facts: <skill-fact-list>,
    description: "Burn nearby foes.",
    traited_facts: <skill-fact-list>,
    icon: "url",
    id: 5794
}
```

Where:

 * `name` is the name of the skill.
 * `facts` are the baseline tooltips that are displayed for the skill.
 * `traited_facts` are the conditional modifications to facts when the skill is traited.
 * `icon` is a URL to the in-game icon displayed for this skill.
 * `id` is the numerical id of the skill.
 
## Traited Facts

The skill facts contained within `trait.traited_facts` and `skill.traited_facts` are the same as normal facts, except they have an additional `requires_trait` field and may have an `overrides` field. `requires_trait` contains a trait id which, when equipped, activates this fact. When activated, if `overrides` is defined it contains the index into the `facts` array that should be replaced by this fact. If `overrides` is undefined, this fact should be appended to the facts list.

As an example (note, chopped up for clarity):

```
{
    name: "Aim-Assisted Rocket",
    facts: [
        {
            text: "Range",
            value: 1500
        },
        {
            text: "Damage",
            hit_count: 1
        },
        {
            text: "Number of Targets",
            value: 3
        },
        {
            text: "Radius",
            distance: 120
        }
    ],
    traited_facts: [
        {
            text: "Damage",
            requires_trait: 429,
            hit_count: 1,
            overrides: 1
        },
        {
            text: "Apply Buff/Condition",
            status: "Vulnerability",
            requires_trait: 517
        }
    ]
}
```

When untraited, this skill has only the facts listed in the `facts` array. When trait `429` (Explosive Powder) is equipped, the first `traited_facts` entry overrides `facts[1]`. When trait `517` (Steel-Packed Powder) is equipped, the second `traited_facts` entry is appended to the `facts` list (since that traited fact does not have an `overrides` field).
 
## Trait/Skill Facts
 
The skill facts contained within `trait.facts` and `skill.facts` (and `.traited_facts`) are the same structure. Each skill fact has a `type` field which indicates what other fields will be present.

### `Percent`

```
{
    text: "Chance on Critical Hit",
    type: "Percent",
    percent: 33
}

{
    text: "Health Threshold",
    type: "Percent",
    icon: "url",
    percent: 25
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `percent` is the percentage.
 
### `AttributeAdjust`

```
{
    text: "Attribute Adjust",
    type: "AttributeAdjust",
    icon: "url",
    value: 150,
    target: "CritDamage"
}

{
    text: "Healing",
    type: "AttributeAdjust",
    icon: "url",
    value: 1302,
    target: "Healing"
}
```

 * `text` is an arbitrary localized string. Sometimes omitted.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `value` is the "adjustment" made at level 80 with base stats.
 * `target` is the adjusted stat. Note that `"Healing"` indicates it's a heal instead of a stat boost, and `Ferocity` is encoded as `"CritDamage"`.

### `Range`

```
{
    text: "Range",
    type: "Range",
    value: 150
}
```

 * `text` is an arbitrary localized string. Sometimes omitted.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `value` is the range of the effect/skill.
 
### `Damage`

```
{
    text: "Damage",
    type: "Damage",
    icon: "url",
    hit_count: 1
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `hit_count` is the number of times the skill hits.

Eventually I'd like to have the *amount* of damage done in here, but I'm still waffling between exposing the actual base/multipliers or just exposing damage with level 80 baseline stats.

### `Buff`

```
{
    text: "Apply Buff/Condition",
    type: "Buff",
    icon: "url",
    duration: 5,
    status: "Vulnerability",
    description: "Damage and condition damage taken are increased; stacks intensity.",
    apply_count: 1
}

{
    text: "Apply Buff/Condition",
    type: "Buff",
    icon: "url",
    duration: 5,
    status: "Arcane Shield",
    description: "Blocks attacks. Explodes after blocking three attacks.",
    apply_count: 3
}

{
    text: "Apply Buff/Condition",
    type: "Buff",
    icon: "url",
    duration: 0,
    status: "Chilled",
    description: "Movement speed decreased by 66%; skill cooldown increased by 66%; stacks duration.",
    apply_count: 1
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `duration` is the number of seconds the applied buff lasts. Note that some facts of this type are just used to display the buff icon with text (e.g., for Dogged March) -- in this case `duration` is usually `0`. Additionally, this field is sometimes omitted entirely.
 * `status` is the name of the buff applied. Could be a boon, condition or other effect. Always present.
 * `description` an arbitrary localized string. Sometimes omitted.
 * `apply_count` the number of stacks applied. Sometimes omitted.

### `PrefixedBuff`

This is basically the same as a `Buff`, except that it has a second buff icon prefixing it. This is usually used to indicate effects that only occur with a specific attunement or turret.

```
{
    text: "Apply Buff/Condition",
    type: "PrefixedBuff",
    icon: "url",
    duration: 20,
    status: "Might",
    description: "Increased outgoing damage; stacks intensity.",
    apply_count: 1,
    prefix: {
        text: "Apply Buff/Condition",
        icon: "url",
        status: "Fire Attunement",
        description: "Cast fire spells."
    }
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `duration` is the number of seconds the applied buff lasts. Note that some facts of this type are just used to display the buff icon with text (e.g., for Dogged March) -- in this case `duration` is usually `0`. Always present.
 * `status` is the name of the buff applied. Could be a boon, condition or other effect. Always present.
 * `description` an arbitrary localized string. Always present.
 * `apply_count` the number of stacks applied. Always present.
 * `prefix.text` is an arbitrary localized string. Always present.
 * `prefix.icon` is the icon that is displayed before `icon`. Always present.
 * `prefix.status` is the localized name of the buff. Sometimes omitted!
 * `prefix.description` is an arbitrary localized string. Sometimes omitted.

### `BuffConversion`

```
{
    text: "Attribute Conversion",
    type: "BuffConversion",
    icon: "url",
    percent: 10,
    source: "Toughness",
    target: "ConditionDamage"
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `percent` is what percent of `source` is converted to `target`. Always present.
 * `source` is which stat is used to compute the attribute adjustment. Always present.
 * `target` is which stat is adjusted. Always present.

### `NoData`

```
{
    text: "Combat Only",
    type: "NoData",
    icon: "url"
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 
This is mostly used to display the "Combat Only" fact, though I swear I've seen it used to indicate unblockablility (instead of an `Unblockable` fact).

### `Recharge`

```
{
    text: "Recharge",
    type: "Recharge",
    value: 40
}
```

 * `text` is an arbitrary localized string. Always present.
 * `value` is the recharge value, in seconds. Always present.
 
### `Number`

```
{
    text: "Conditions Removed",
    type: "Number",
    icon: "url",
    value: 3
}

{
    text: "Number of Targets",
    type: "Number",
    icon: "url",
    value: 5
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `value` is the number referred to by the `text`. Always present.

### `Radius`

```
{
    text: "Radius",
    type: "Radius",
    icon: "url",
    distance: 180
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `distance` is the radius value. Always present.

### `Distance`

```
{
    text: "Radius",
    type: "Distance",
    icon: "url",
    distance: 180
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `distance` is the distance value. Always present.
 
### `ComboFinisher`

```
{
    text: "Combo Finisher",
    type: "ComboFinisher",
    percent: 100,
    finisher_type: "Blast"
}
```

 * `text` is an arbitrary localized string. Always present.
 * `percent` is how likely this is to be a combo finisher. Always present.
 * `finisher_type` is one of `Blast`, `Leap`, `Projectile`, `Whirl`. Always present.

### `ComboField`

```
{
    text: "Combo Field",
    type: "ComboField",
    field_type: "Ethereal"
}
```

 * `text` is an arbitrary localized string. Always present.
 * `field_type` is one of `Air`, `Dark`, `Fire`, `Ice`, `Light`, `Lightning`, `Poison`, `Smoke`, `Ethereal`, `Water`. Always present.
 
### `Time`

```
{
    text: "Duration Increase",
    type: "Time",
    icon: "url",
    duration: 2
}
```

 * `text` is an arbitrary localized string. Always present.
 * `icon` is a URL to an icon displayed with the fact. Sometimes omitted.
 * `duration` is the value, in seconds. Always present.

### `Unblockable`

```
{
    text: "Unblockable",
    type: "Unblockable",
    value: true
}
```

 * `text` is an arbitrary localized string. Always present.
 * `value` is always true. It seems kind of silly, in retrospect, to include it.
