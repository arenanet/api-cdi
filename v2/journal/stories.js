// Bulk-expanded endpoint that provides access to the journal stories.
// Each "season" is a story in this sense.

// GET /v2/journal/stories

[
	"215AAA0F-CDAC-4F93-86DA-C155A99B5784",
	"67F0AE11-A58F-422F-8BB8-1B0F3948078A",
	// ...
]

// GET /v2/journal/stories/215AAA0F-CDAC-4F93-86DA-C155A99B5784
// GET /v2/journal/stories?id=215AAA0F-CDAC-4F93-86DA-C155A99B5784

{
	"id" : "215AAA0F-CDAC-4F93-86DA-C155A99B5784",
	"name" : "My Story",
	"description" : "",
	"sort" : 1,
	"episode" : [
		2, 7, 8, 3, // ...
	]
}

// GET /v2/journal/stories?page=0&page_size=200
// GET /v2/journal/stories?ids=all
// GET /v2/journal/stories?ids=215AAA0F-CDAC-4F93-86DA-C155A99B5784,...

[
	{ /* story 1 */ },
	{ /* story 2 */ },
	// ...
]

// NOTES:
//   * story.episode[n] has ids that can be referenced against 
//     /v2/journal/episode.
