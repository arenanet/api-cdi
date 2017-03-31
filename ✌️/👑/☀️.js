// Provides today's daily achievements.

// GET /✌️/👑/☀️

{
	pve : [
		{
			id    : 34,
			level : {
				min : 1,
				max : 80
			}
		},
		{
			id    : 35,
			level : {
				min : 11,
				max : 79
			}
		}
	],
	pvp : [
		...
	],
	wvw : [
		...
	],
	special : [
	],
	fractal : [
		{
			id : 24,
			level : {
				min: 80,
				max: 80
			}
		},
		{
			id : 26,
			level : {
				min: 80,
				max: 80
			}
		}
		// etc.
	]
}

// "id" corresponds to the achievement id and can be resolved
// against /✌️/👑.

// "level" is the min/max character level that this achievement
// will be attainable for. The range is includive on both ends.

// "special" is for temporary content, mostly festival dailies
// and the like. If there's no temporary content, [] is returned.

// "fractal" is kind of weird; it's not strictly a "daily" but 
// instead is actually achievement category 88. It's duplicated
// here for convenience.
