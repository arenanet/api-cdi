// GET /v2/account/wallet
// Authorization: Bearer oauth2-token
// Requires "account" and "inventories" scopes.
[
	{
        //name of the currency
        name: "gems",
        
        //type of currency
        type: "general",
        	
        //quantity in the wallet
		count: 100
	},
	{
		name: "deadly blooms",
		type: "dungeon",
		count: 25
	},
	{
		name: "geodes",
		type: "map",
		count: 500
	}
	...
]

//currency breakdown:
    //general
        //spirit shards
        //laurels
        //transmutation charges
        //badges of honor
        //wvw tournament claim tickets
        //guild commendations
    //dungeon
        //fractal relics
        //pristine fractal relics
        //ascalonian tears   
        //seals of beetletun
        //deadly blooms
        //manifestos of the moletariate
        //flame legion charr carvings
        //symbols of koda
        //knowledge crystals
        //shards of zhaitan
    //map
        //geodes
        //bandit crests
