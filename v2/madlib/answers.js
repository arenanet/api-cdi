// Normal bulk-expanded endpoint that dumps the possible madlib
// answers (e.g., answers to the questions you're asked during
// character creation).

// GET /v2/madlib/answers

[ 1, 2, 3, /* ... */ ]

// GET /v2/madlib/answers?id=181
// GET /v2/madlib/answers/181

{
	"id": 181,
	"title": "Wolf",
	"description": "A wolf companion is considered a great prize. When fully grown, it's a shrewd hunter and devoted ally.",
	"journal": "<br><br>I'm a ranger, and I have a wolf that fights at my side and guards my back.<br><br>This is my story.<br>",
	"question": 183,
	"professions": ["Ranger"],
	"races": ["Norn"]
}

// GET /v2/madlib/answers?ids=157,159
// GET /v2/madlib/answers?page_size=2&page=0

[{
	"id": 157,
	"title": "Lyssa",
	"description": "Lyssa wears many masks. She is the dual-faced goddess of beauty, water, and illusion. She is the patron of the most attractive and graceful among us. Her blessings have touched me all my life.",
	"journal": "Lyssa, the goddess of beauty, blessed me when I was young.",
	"question": 36,
	"races": ["Human"]
}, {
	"id": 159,
	"title": "Water",
	"description": "Water, whether frozen or flowing, is life, and its currents run deep in us.",
	"journal": "<br><br>I'm an elementalist, and I study all the elements. I wear a gem that symbolizes my love of water.<br><br>This is my story.<br>",
	"question": 186,
	"professions": ["Elementalist"]
}]

// NOTES:
//  * "question" references /v2/madlib/questions.
//  * "races" is omitted if applicable to all races.
//  * "professions" is omitted if applicable to all professions.
//  * "journal" is the string displayed in your story journal.
