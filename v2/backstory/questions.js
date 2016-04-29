// Normal bulk-expanded endpoint that dumps backstory questions (the
// questions you're asked during character creation).

// GET /v2/backstory/questions

[ 1, 2, 3, /* ... */ ]


// GET /v2/backstory/questions?id=10
// GET /v2/backstory/questions/10

{
	"id": 10,
	"title": "My college",
	"description": "I'm a member of the College of ______.",
	"answers": [67, 68, 69],
	"order": 2,
	"races": ["Asura"]
}

// GET /v2/backstory/questions?page_size=1&page=0
// GET /v2/backstory/questions?ids=181

[{
	"id": 181,
	"title": "My Most Useful Tool.",
	"description": "My most useful tool is my ______.",
	"answers": [178, 179, 180],
	"order": 0,
	"professions": ["Engineer"]
}]

// NOTES:
//  * "answers" refers to /v2/backstory/answers ids.
//  * "professions" is omitted if applicable to all professions.
//  * "races" is omitted if applicable to all races.
