// Authenticated endpoint returning the character's unlocked pets (if ranger).
// Requires the "characters" and "progression" scopes.

// GET /v2/characters/Margrid%20The%20Sly/pets?access_token=<asdf>

[
	{
		pet_id: 2, // References /v2/pets -> id
		obtained: "2018-05-11T15:13:00Z", // The date at which the pet has been charmed (if available in the API).
		obtained_location: 3, // References /v2/continents/1/floors/1/regions/2/maps/21/sectors/372 -> id
		nickname: "Koss", // The nickname given in the interface, defaults to the localized specie string (Juvenile warthog).
		equipped: ["Terrestrial"] // If the pet is equipped in 1 or more of the 4 slots, it is displayed here. 
	}
]

// "equipped" possible values are "Terrestrial", "Aquatic". 
// Empty array means the pet's not equipped, and array with both values means it is equipped both as terrestrial and aquatic pet.