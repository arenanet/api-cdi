// Bulk-expanded endpoint for fetching achievement category groups.
// These are the broad category headings shown in the UI. They don't
// have integer keys; instead they use guids.

// GET /v2/achievements/groups

[
    "65B4B678-607E-4D97-B458-076C3E96A810",
    "A4ED8379-5B6B-4ECC-B6E1-70C350C902D2",
]

// GET /v2/achievements/groups/65B4B678-607E-4D97-B458-076C3E96A810
// GET /v2/achievements/groups?id=65B4B678-607E-4D97-B458-076C3E96A810

{
	"id": "65B4B678-607E-4D97-B458-076C3E96A810",
	"name": "Heart of Thorns",
	"description": "Achievements for accomplishments throughout the jungle.",
	"order": 4,
	"categories": [108, 109, 110, 111, 112, 116]
}

// GET /v2/achievements/groups?ids=65B4B678-607E-4D97-B458-076C3E96A810,A4ED8379-5B6B-4ECC-B6E1-70C350C902D2
// GET /v2/achievements/groups?page=0&page_size=2

[{
	"id": "65B4B678-607E-4D97-B458-076C3E96A810",
	"name": "Heart of Thorns",
	"description": "Achievements for accomplishments throughout the jungle.",
	"order": 4,
	"categories": [108, 109, 110, 111, 112, 116]
}, {
	"id": "A4ED8379-5B6B-4ECC-B6E1-70C350C902D2",
	"name": "Story Journal",
	"description": "Achievements related to the story journal.",
	"order": 2,
	"categories": [121, 122, 123, 104, 71, 72, 68, 100, 81, 83, 82, 70]
}]

// "categories" refers to /v2/achievement/categories.
