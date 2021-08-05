//construct data object
info = {
	tools: [
		{ 
			name: "Pickaxe", 
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Pickaxe Head", types: ["head"] },
				{ name: "Binding", types: ["extra"] }
			],
			modifiers: {}
		},
		{
			name: "Shovel",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Shovel Head", types: ["head"] },
				{ name: "Binding", types: ["extra"] }
			],
			modifiers: {}
		},
		{
			name: "Hatchet",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Axe Head", types: ["head"] },
				{ name: "Binding", types: ["extra"] }
			],
			modifiers: {
				"attack damage": [["+", 0.5]]
			}
		},
		{
			name: "Mattock",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Axe Head", types: ["head"] },
				{ name: "Shovel Head", types: ["head"] }
			],
			modifiers: {
				"attack damage": [["+", 3]]
			}
		},
		{
			name: "Kama",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Kama Head", types: ["head"] },
				{ name: "Binding", types: ["extra"] }
			],
			modifiers: {}
		},
		{
			name: "Scythe",
			parts: [
				{ name: "Tough Tool Rod", types: ["handle"] },
				{ name: "Scythe Head", types: ["head"] },
				{ name: "Tough Binding", types: ["extra"] },
				{ name: "Tough Tool Rod", types: ["handle"] }
			],
			modifiers: {
				durability: [["*", 2.2]]
			}
		},
		{
			name: "Hammer",
			parts: [
				{ name: "Tough Tool Rod", types: ["handle"] },
				{ name: "Hammer Head", types: ["head", "head"] },
				{ name: "Large Plate", types: ["head"] },
				{ name: "Large Plate", types: ["head"] }
			],
			modifiers: {
				durability: [["*", 2.5]]
			}
		},
		{
			name: "Excavator",
			parts: [
				{ name: "Tough Tool Rod", types: ["handle"] },
				{ name: "Excavator Head", types: ["head"] },
				{ name: "Large Plate", types: ["head"] },
				{ name: "Tough Binding", types: ["extra"] }
			],
			modifiers: {
				durability: [["*", 1.75]]
			}
		},
		{
			name: "Lumberaxe",
			parts: [
				{ name: "Tough Tool Rod", types: ["handle"] },
				{ name: "Broad Axe Head", types: ["head"] },
				{ name: "Large Plate", types: ["head"] },
				{ name: "Tough Binding", types: ["extra"] }
			],
			modifiers: {
				"attack damage": [["+", 2]],
				durability: [["*", 2]]
			}
		},
		{
			name: "Broadsword",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Sword Blade", types: ["head"] },
				{ name: "Wide Guard", types: ["extra"] }
			],
			modifiers: {
				durability: [["*", 1.1]],
				"attack damage": [["+", 1]]
			}
		},
		{
			name: "Longsword",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Sword Blade", types: ["head"] },
				{ name: "Hand Guard", types: ["extra"] }
			],
			modifiers: {
				durability: [["*", 1.05]],
				"attack damage": [["+", 0.5]]
			}
		},
		{
			name: "Rapier",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Sword Blade", types: ["head"] },
				{ name: "Cross Guard", types: ["extra"] }
			],
			modifiers: {
				durability: [["*", 0.8]]
			}
		},
		{
			name: "Battlesign",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Sign Plate", types: ["head"] }
			],
			modifiers: {}
		},
		{
			name: "Frypan",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Pan", types: ["head"] }
			],
			modifiers: {}
		},
		{
			name: "Cleaver",
			parts: [
				{ name: "Tough Tool Rod", types: ["handle"] },
				{ name: "Large Sword Blade", types: ["head"] },
				{ name: "Large Plate", types: ["head"] },
				{ name: "Tough Tool Rod", types: ["extra"] }
			],
			modifiers: {
				"attack damage": [["*", 1.3], ["+", 3]],
				durability: [["*", 3]]
			}
		},
		{
			name: "Arrow",
			parts: [
				{ name: "Arrow Shaft", types: ["shaft"] },
				{ name: "Arrow Head", types: ["head"] },
				{ name: "Fletchling", types: ["fletchling"] }
			],
			modifiers: {
				"attack damage": [["+", 2]]
			}
		},
		{
			name: "Shortbow",
			parts: [
				{ name: "Bowlimb", types: ["head", "bow"] },
				{ name: "Bowlimb", types: ["head", "bow"] },
				{ name: "Bowstring", types: ["bowstring"] }
			],
			modifiers: {}
		},
		{
			name: "Longbow",
			parts: [
				{ name: "Bowlimb", types: ["head", "bow"] },
				{ name: "Bowlimb", types: ["head", "bow"] },
				{ name: "Large Plate", types: ["extra"] },
				{ name: "Bowstring", types: ["bowstring"] }
			],
			modifiers: {
				durability: [["*", 1.4]]
			}
		},
		{
			name: "Bolt",
			parts: [
				{ name: "Bolt Core (Shaft)", types: ["shaft"] },
				{ name: "Bolt Core (Head)", types: ["head"] },
				{ name: "Fletchling", types: ["fletchling"] }
			],
			modifiers: {
				durability: [["*", 0.8]]
			}
		},
		{
			name: "Crossbow",
			parts: [
				{ name: "Tough Tool Rod", types: ["handle", "extra"] },
				{ name: "Bowlimb", types: ["head", "bow"] },
				{ name: "Tough Binding", types: ["extra"] },
				{ name: "Bowstring", types: ["bowstring"] }
			],
			modifiers: {
				"attack damage": [["*", 1.5]]
			}
		},
		{
			name: "Shuriken",
			parts: [
				{ name: "Knife Blade", types: ["head", "extra"] },
				{ name: "Knife Blade", types: ["head", "extra"] },
				{ name: "Knife Blade", types: ["head", "extra"] },
				{ name: "Knife Blade", types: ["head", "extra"] }
			],
			modifiers: {
				"attack damage": [["+", 1]],
				"accuracy": [["=", 1]]
			}
		}
	],
	materials: [
		{
			name: "Naga Scale",
			head: {
				durability: 460,
				"mining level": 2,
				"mining speed": 8.9,
				"attack damage": 4.3,
				traits: ["Twilit", "Precipitate"]
			}
		},
		{
			name: "Steeleaf",
			head: {
				durability: 180,
				"mining level": 3,
				"mining speed": 7,
				"attack damage": 6,
				traits: ["Twilit", "Synergy"]
			},
			handle: {
				durability: 100,
				modifier: 0.8,
				traits: ["Twilit", "Synergy"]
			},
			extra: {
				durability: 90,
				traits: ["Twilit", "Synergy"]
			}
		},
		{
			name: "Fiery Ingot",
			head: {
				durability: 720,
				"mining level": 4,
				"mining speed": 7.2,
				"attack damage": 6.6,
				traits: ["Twilit", "Autosmelt", "Superheat", "Flammable"]
			},
			handle: {
				durability: 400,
				modifier: 0.7,
				traits: ["Twilit", "Flammable"]
			},
			extra: {
				durability: 200,
				traits: ["Twilit", "Flammable"]
			}
		},
		{
			name: "Knightmetal",
			head: {
				durability: 900,
				"mining level": 5,
				"mining speed": 7,
				"attack damage": 6,
				traits: ["Twilit", "Stalwart"]
			},
			handle: {
				durability: 100,
				modifier: 1.25,
				traits: ["Twilit", "Stalwart"]
			},
			extra: {
				durability: 400,
				traits: ["Twilit", "Stalwart"]
			}
		},
		{
			name: "Wood",
			head: {
				durability: 35,
				"mining level": 1,
				"mining speed": 2,
				"attack damage": 2,
				traits: ["Ecological"]
			},
			handle: {
				durability: 25,
				modifier: 1,
				traits: ["Ecological"]
			},
			extra: {
				durability: 15,
				traits: ["Ecological"]
			}
		},
		{
			name: "Stone",
			head: {
				durability: 120,
				"mining level": 2,
				"mining speed": 4,
				"attack damage": 3,
				traits: ["Cheapskate"]
			},
			handle: {
				durability: -50,
				modifier: 0.5,
				traits: ["Cheap"]
			},
			extra: {
				durability: 20,
				traits: ["Cheap"]
			}
		},
		{
			name: "Flint",
			head: {
				durability: 150,
				"mining level": 2,
				"mining speed": 5,
				"attack damage": 2.9,
				traits: ["Crude II"]
			},
			handle: {
				durability: -60,
				modifier: 0.6,
				traits: ["Crude"]
			},
			extra: {
				durability: 40,
				traits: ["Crude"]
			}
		},
		{
			name: "Cactus",
			head: {
				durability: 210,
				"mining level": 2,
				"mining speed": 4,
				"attack damage": 3.4,
				traits: ["Prickly"]
			},
			handle: {
				durability: 20,
				modifier: 0.85,
				traits: ["Spiky"]
			},
			extra: {
				durability: 50,
				traits: ["Spiky"]
			}
		},
		{
			name: "Bone",
			head: {
				durability: 200,
				"mining level": 2,
				"mining speed": 5.09,
				"attack damage": 2.5,
				traits: ["Splintering"]
			},
			handle: {
				durability: 50,
				modifier: 1.1,
				traits: ["Fractured"]
			},
			extra: {
				durability: 65,
				traits: ["Fractured"]
			}
		},
		{
			name: "Obsidian",
			head: {
				durability: 139,
				"mining level": 5,
				"mining speed": 7.07,
				"attack damage": 4.2,
				traits: ["Duritae"]
			},
			handle: {
				durability: -100,
				modifier: 0.9,
				traits: ["Durite"]
			},
			extra: {
				durability: 90,
				traits: ["Duritae"]
			}
		},
		{
			name: "Prismarine",
			head: {
				durability: 430,
				"mining level": 2,
				"mining speed": 5.5,
				"attack damage": 6.2,
				traits: ["Jagged", "Aquadynamic"]
			},
			handle: {
				durability: -150,
				modifier: 0.6,
				traits: ["Aquadynamic"]
			},
			extra: {
				durability: 100,
				traits: ["Aquadynamic"]
			}
		},
		{
			name: "End Stone",
			head: {
				durability: 420,
				"mining level": 4,
				"mining speed": 3.23,
				"attack damage": 3.23,
				traits: ["Alien"]
			},
			handle: {
				durability: 0,
				modifier: 0.85,
				traits: ["Enderference"]
			},
			extra: {
				durability: 42,
				traits: ["Enderference"]
			}
		},
		{
			name: "Paper",
			head: {
				durability: 12,
				"mining level": 1,
				"mining speed": 0.51,
				"attack damage": 0.05,
				traits: ["Writeable"]
			},
			handle: {
				durability: 5,
				modifier: 0.1,
				traits: ["Writeable"]
			},
			extra: {
				durability: 15,
				traits: ["Writeable"]
			}
		},
		{
			name: "Sponge",
			head: {
				durability: 1050,
				"mining level": 1,
				"mining speed": 3.02,
				"attack damage": 0,
				traits: ["Squeaky"]
			},
			handle: {
				durability: 250,
				modifier: 1.2,
				traits: ["Squeaky"]
			},
			extra: {
				durability: 250,
				traits: ["Squeaky"]
			}
		},
		{
			name: "Firewood",
			head: {
				durability: 550,
				"mining level": 1,
				"mining speed": 6,
				"attack damage": 5.5,
				traits: ["Autosmelt"]
			},
			handle: {
				durability: -200,
				modifier: 1,
				traits: ["Autosmelt"]
			},
			extra: {
				durability: 150,
				traits: ["Autosmelt"]
			}
		},
		{
			name: "Iron",
			head: {
				durability: 204,
				"mining level": 3,
				"mining speed": 6,
				"attack damage": 4,
				traits: ["Magnetic II"]
			},
			handle: {
				durability: 60,
				modifier: 0.85,
				traits: ["Magnetic"]
			},
			extra: {
				durability: 50,
				traits: ["Magnetic"]
			}
		},
		{
			name: "Pig Iron",
			head: {
				durability: 380,
				"mining level": 3,
				"mining speed": 6.2,
				"attack damage": 4.5,
				traits: ["Baconlicious", "Tasty"]
			},
			handle: {
				durability: 0,
				modifier: 1.2,
				traits: ["Tasty"]
			},
			extra: {
				durability: 170,
				traits: ["Tasty"]
			}
		},
		{
			name: "Knightslime",
			head: {
				durability: 850,
				"mining level": 4,
				"mining speed": 5.8,
				"attack damage": 5.1,
				traits: ["Crumbling"]
			},
			handle: {
				durability: 500,
				modifier: 0.5,
				traits: ["Unnatural"]
			},
			extra: {
				durability: 125,
				traits: ["Unnatural"]
			}
		},
		{
			name: "Slime",
			head: {
				durability: 1000,
				"mining level": 1,
				"mining speed": 4.24,
				"attack damage": 1.8,
				traits: ["Slimey"]
			},
			handle: {
				durability: 0,
				modifier: 0.7,
				traits: ["Slimey"]
			},
			extra: {
				durability: 350,
				traits: ["Slimey"]
			}
		},
		{
			name: "Blue Slime",
			head: {
				durability: 780,
				"mining level": 1,
				"mining speed": 4.03,
				"attack damage": 1.8,
				traits: ["Slimey"]
			},
			handle: {
				durability: -50,
				modifier: 1.3,
				traits: ["Slimey"]
			},
			extra: {
				durability: 200,
				traits: ["Slimey"]
			}
		},
		{
			name: "Magma Slime",
			head: {
				durability: 600,
				"mining level": 1,
				"mining speed": 2.1,
				"attack damage": 7,
				traits: ["Superheat"]
			},
			handle: {
				durability: -200,
				modifier: 0.85,
				traits: ["Flammable"]
			},
			extra: {
				durability: 150,
				traits: ["Flammable"]
			}
		},
		{
			name: "Netherrack",
			head: {
				durability: 270,
				"mining level": 2,
				"mining speed": 4.5,
				"attack damage": 3,
				traits: ["Aridiculous", "Hellish"]
			},
			handle: {
				durability: -150,
				modifier: 0.85,
				traits: ["Hellish"]
			},
			extra: {
				durability: 75,
				traits: ["Hellish"]
			}
		},
		{
			name: "Cobalt",
			head: {
				durability: 780,
				"mining level": 5,
				"mining speed": 12,
				"attack damage": 4.1,
				traits: ["Momentum"]
			},
			handle: {
				durability: 100,
				modifier: 0.9,
				traits: ["Lightweight"]
			},
			extra: {
				durability: 300,
				traits: ["Lightweight"]
			}
		},
		{
			name: "Ardite",
			head: {
				durability: 990,
				"mining level": 5,
				"mining speed": 3.5,
				"attack damage": 3.6,
				traits: ["Stonebound"]
			},
			handle: {
				durability: -200,
				modifier: 1.4,
				traits: ["Petramor"]
			},
			extra: {
				durability: 450,
				traits: ["Petramor"]
			}
		},
		{
			name: "Manyullyn",
			head: {
				durability: 820,
				"mining level": 5,
				"mining speed": 7.02,
				"attack damage": 8.72,
				traits: ["Insatiable"]
			},
			handle: {
				durability: 250,
				modifier: 0.5,
				traits: ["Cold-Blooded"]
			},
			extra: {
				durability: 50,
				traits: ["Cold-Blooded"]
			}
		},
		{
			name: "Magical Wood",
			head: {
				durability: 35,
				"mining level": 1,
				"mining speed": 2,
				"attack damage": 2,
				traits: ["Magically Modifiable", "Magically Brittle"]
			},
			handle: {
				durability: 25,
				modifier: 1,
				traits: ["Magically Modifiable", "Magically Brittle"]
			},
			extra: {
				durability: 15,
				traits: ["Magically Modifiable", "Magically Brittle"]
			}
		},
		{
			name: "Evil Infused Iron",
			head: {
				durability: 666,
				"mining level": 5,
				"mining speed": 13,
				"attack damage": 13,
				traits: ["Evil Aura"]
			},
			handle: {
				durability: 0,
				modifier: 1,
				traits: []
			},
			extra: {
				durability: 66,
				traits: []
			}
		},
		{
			name: "Enchanted Metal",
			head: {
				durability: 350,
				"mining level": 2,
				"mining speed": 7,
				"attack damage": 3.5,
				traits: ["Experience Boost"]
			},
			handle: {
				durability: 20,
				modifier: 1.1,
				traits: ["Experience Boost"]
			},
			extra: {
				durability: 80,
				traits: ["Experience Boost"]
			}
		},
		{
			name: "Demonic Metal",
			head: {
				durability: 80,
				"mining level": 2,
				"mining speed": 0.5,
				"attack damage": 11.1,
				traits: ["Whispering"]
			},
			handle: {
				durability: 100,
				modifier: 0.25,
				traits: []
			},
			extra: {
				durability: 20,
				traits: []
			}
		}
	],
	modifiers: [
		{ name: "Haste", max: 5 },
		{ name: "Luck", max: 3 },
		{ name: "Sharp", max: 5 },
		{ name: "Diamond", max: 1 },
		{ name: "Emerald", max: 1 },
		{ name: "Silktouch", max: 1 },
		{ name: "Reinforced", max: 5 },
		{ name: "Beheading", max: 10 },
		{ name: "Smite", max: 5 },
		{ name: "Band of Arthropods", max: 5 },
		{ name: "Fiery", max: 5 },
		{ name: "Necrotic", max: 10 },
		{ name: "Knockback", max: 99 },
		{ name: "Height++", max: 1 },
		{ name: "Width++", max: 1 },
		{ name: "Mending Moss", max: 3 },
		{ name: "Blasting", max: 3 },
		{ name: "Glowing", max: 1 },
		{ name: "Shulking", max: 1 },
		{ name: "Webbed", max: 3 },
		{ name: "Fins", max: 1 },
		{ name: "Embossment", max: 1 },
	]
}

{
	//bind tool name to object
	let tools = [];
	for(let tool of info.tools)
		tools.push(tool);
	for(let tool of tools)
		info.tools[tool.name.toLowerCase().replaceAll(" ", "-")] = tool;
}
{
	//bind material name to object
	let materials = [];
	for(let material of info.materials)
		materials.push(material);
	for(let material of materials)
		info.materials[material.name.toLowerCase().replaceAll(" ", "-")] = material;
}

