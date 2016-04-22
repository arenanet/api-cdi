// Bulk-expanded endpoint that provides localized data for
// ranger pets.

// GET /v2/pets

[ 1, 2, 3 ]

// GET /v2/pets/1
// GET /v2/pets?id=1

{
	"id": 1,
	"name": "Juvenile Jungle Stalker",
	"description": "Jungle stalkers rely on their power to take down prey. They enter battle with a mighty roar, inspiring allies as they lay into their victims with claws and teeth. They love tummy rubs. —Acht",
	"icon": "https://render.guildwars2.com/..."
}

// GET /v2/pets?ids=1,2
// GET /v2/pets?page=0&page_size=2

[
	{
		"id": 1,
		"name": "Juvenile Jungle Stalker",
		"description": "Jungle stalkers rely on their power to take down prey. They enter battle with a mighty roar, inspiring allies as they lay into their victims with claws and teeth. They love tummy rubs. —Acht",
		"icon": "https://render.guildwars2.com/..."
	},
	{
		"id": 2,
		"name": "Juvenile Boar",
		"description": "This boar is a tough, strong fighter with wicked tusks. It's difficult for foes to stay on their feet against his charges. Though polite society may not appreciate his charms, a boar can be a ranger's best friend. —Acht",
		"icon": "https://render.guildwars2.com/..."
	}
]
