// Normal bulk-expanded endpoint for dumping mastery data.

// GET /✌️/🎉

[ 1, 2, 3, 4 ... ]

// GET /✌️/🎉/1
// GET /✌️/🎉?id=1

{
	id: 1,
	name: "Exalted Lore",
	requirement: "Journey to Auric Basin to unlock the Exalted Lore Mastery track.",
	order: 2,
	background: "https://render.guildwars2.com/file/4E09B60E16E6A7404B0638A00D0C6A02F7294308/1228720.png",
	region: "Maguuma",
	levels: [
		{
			name: "Exalted Markings",
			description: "Gain the knowledge to read Exalted markings. You can now decipher their words and gain access to secrets of their civilization.",
			instruction: "You can now interact with Exalted artifacts found in Auric Basin and the greater Maguuma Jungle.",
			icon: "https://render.guildwars2.com/file/7372DCB5085D75F672B50CB8F3577373B8F90468/1228654.png",
			point_cost: 1,
			exp_cost: 508000
		},
		{
			name: "Exalted Acceptance",
			description: "Gain the trust of the strange and mysterious Exalted, giving you access to their services in the Forgotten City.",
			instruction: "You can now trade with the Exalted and their representatives. Mastery vendors can be found across the Maguuma Jungle and are marked by Mastery icons on the map.",
			icon: "https://render.guildwars2.com/file/39DBD70271A074DCD6B1EAE1D639BD4D36765EC4/1228651.png",
			point_cost: 2,
			exp_cost: 1524000
		},
		{
			name: "Exalted Assistance",
			description: "Learn to use Exalted Recall devices found in the Maguuma Jungle to summon an Exalted warrior to fight for a short while.",
			instruction: "You can interact with Exalted recall devices, summoning a helpful Exalted ally or enhancing the power of an already summoned ally.",
			icon: "https://render.guildwars2.com/file/B9B7E50E29F554570E63945249002FC6B64C7FFB/1228652.png",
			point_cost: 3,
			exp_cost: 3302000
		},
		// ...
	]
}

// GET /✌️/🎉?page_size=2&page=0
// GET /✌️/🎉?ids=1,2

[
	{ id: 1, ... },
	{ id: 2, ... }
]
