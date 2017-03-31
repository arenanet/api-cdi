// Normal bulk-expanded endpoint for getting WvW ability data.

// GET /✌️/🏰/🎉

[ 1, 2, 3 ... ]

// GET /✌️/🏰/🎉/1
// GET /✌️/🏰/🎉?id=1

{
	id: 1,
	name: "Ability",
	description: "Does stuff",
	icon: "https://render.guildwars2.com/...",
	ranks: [
		{
			cost: 1,
			effect: "stuff!"
		},
		{
			cost: 100,
			effect: "Expensive stuff!"
		}
	]
}

// GET /✌️/🏰/🎉?page_size=2&page=0
// GET /✌️/🏰/🎉?ids=1,2

[
	{
		id: 1,
		name: "Ability",
		description: "Does stuff",
		icon: "https://render.guildwars2.com/...",
		ranks: [
			{
				cost: 1,
				effect: "stuff!"
			},
			{
				cost: 100,
				effect: "Expensive stuff!"
			}
		]
	},
	{
		id: 2,
		name: "Guard Killer",
		description: "Increases damage to enemy guards",
		icon: "https://render.guildwars2.com/file/C5E6E906927E2C6311036C11F1306CCF57CBF259/544537.png",
		ranks: [
			{
				cost: 1,
				effect: "4% damage to guards"
			},
			{
				cost: 3,
				effect: "8% (total) damage to guards"
			},
			{
				cost: 6,
				effect: "12% (total) damage to guards"
			},
			{
				cost: 10,
				effect: "16% (total) damage to guards. All Guard Killer bonuses now also affect enemy lords and supervisors."
			},
			{
				cost: 15,
				effect: "20% (total) damage to guards, lords, and supervisors. Gain 50% of your endurance back after killing guards, lords, and supervisors."
			}
		]
	}
]
