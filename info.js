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
			modifiers: {
				"attack damage": [["*", 1]],
				"attack speed": [["*", 1.2]]
			}
		},
		{
			name: "Shovel",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Shovel Head", types: ["head"] },
				{ name: "Binding", types: ["extra"] }
			],
			modifiers: {
				"attack damage": [["*", 0.9]],
				"attack speed": [["*", 1]]
			}
		},
		{
			name: "Hatchet",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Axe Head", types: ["head"] },
				{ name: "Binding", types: ["extra"] }
			],
			modifiers: {
				"attack damage": [["+", 0.5], ["*", 1.1]],
				"attack speed": [["*", 1.1]]
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
				"attack damage": [["+", 3], ["*", 0.9]],
				"attack speed": [["*", 0.9]],
				"mining speed": [["*", 0.95]]
			}
		},
		{
			name: "Kama",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Kama Head", types: ["head"] },
				{ name: "Binding", types: ["extra"] }
			],
			modifiers: {
				"attack damage": [["*", 1]],
				"attack speed": [["*", 1.3]]
			}
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
				durability: [["*", 2.2]],
				"attack damage": [["*", 0.75]],
				"attack speed": [["*", 0.9]]
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
				durability: [["*", 2.5]],
				"attack damage": [["*", 1.2]],
				"attack speed": [["*", 0.8]],
				"mining speed": [["*", 0.4]],
				"mining level": [["=", 1]]  //mining level takes trait from hammer head (use index)
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
				durability: [["*", 1.75]],
				"attack damage": [["*", 1.25]],
				"attack speed": [["*", 0.7]],
				"mining speed": [["*", 0.28]]
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
				durability: [["*", 2]],
				"attack damage": [["+", 2], ["*", 1.2]],
				"attack speed": [["*", 0.8]],
				"mining speed": [["*", 0.35]]
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
				"attack damage": [["+", 1], ["*", 1]],
				"attack speed": [["*", 1.6]]
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
				"attack damage": [["+", 0.5], ["*", 1.1]],
				"attack speed": [["*", 1.4]]
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
				durability: [["*", 0.8]],
				"attack damage": [["*", 0.55]],
				"attack speed": [["*", 3]]
			}
		},
		{
			name: "Battlesign",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Sign Plate", types: ["head"] }
			],
			modifiers: {
				"attack damage": [["*", 0.86]],
				"attack speed": [["*", 1.2]]
			}
		},
		{
			name: "Frypan",
			parts: [
				{ name: "Tool Rod", types: ["handle"] },
				{ name: "Pan", types: ["head"] }
			],
			modifiers: {
				"attack damage": [["*", 1]],
				"attack speed": [["*", 1.4]]
			}
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
				durability: [["*", 2]],
				"attack damage": [["*", 1.3], ["+", 3], ["*", 1.2]],
				"attack speed": [["*", 0.7]]
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
				"attack damage": [["+", 2], ["*", 1]],
				"attack speed": [["*", 1]]
			}
		},
		{
			name: "Shortbow",
			parts: [
				{ name: "Bowlimb", types: ["head", "bow"] },
				{ name: "Bowlimb", types: ["head", "bow"] },
				{ name: "Bowstring", types: ["bowstring"] }
			],
			modifiers: {
				"attack damage": [["*", 0.7]],
				"attack speed": [["*", 1.5]],
				"projectile damage": [["*", 0.8]]
			},
			"projectile damage": 0,
			"projectile speed": 3,
			"draw time": 12
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
				durability: [["*", 1.4]],
				"attack speed": [["*", 1.3]],
				"projectile damage": [["*", 1.25]]
			},
			"projectile damage": 2.5,
			"projectile speed": 5.5,
			"draw time": 30
		},
		{
			name: "Bolt",
			parts: [
				{ name: "Bolt Core (Shaft)", types: ["shaft"] },
				{ name: "Bolt Core (Head)", types: ["head"] },
				{ name: "Fletchling", types: ["fletchling"] }
			],
			modifiers: {
				durability: [["*", 0.8]],
				"attack damage": [["*", 1]],
				"attack speed": [["*", 1]]
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
				"attack damage": [["*", 0.8]],
				"bonus damage": [["*", 1.5]],
				"attack speed": [["*", 2]],
				"projectile damage": [["*", 1.3]]
			},
			"projectile damage": 3,
			"projectile speed": 7,
			"draw time": 45
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
				"attack damage": [["+", 1], ["*", 0.7]],
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
			},
			bow: {
				drawspeed: 1.67,
				"range multipler": 2,
				"bonus damage": 0,
				traits: ["Twilit", "Precipitate"]
			},
			shaft: {
				modifier: 1.4,
				"bonus ammo": 20,
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
			},
			bow: {
				drawspeed: 0.83,
				"range multipler": 1.5,
				"bonus damage": 2,
				traits: ["Twilit", "Synergy"]
			},
			shaft: {
				modifier: 0.6,
				"bonus ammo": 10,
				traits: ["Twilit", "Synergy"]
			},
			fletchling: {
				modifier: 0.8,
				"accuracy": 1,
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
			},
			bow: {
				drawspeed: 1,
				"range multipler": 0.9,
				"bonus damage": 4,
				traits: ["Twilit", "Flammable"]
			},
			shaft: {
				modifier: 0.8,
				"bonus ammo": 0,
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
			},
			bow: {
				drawspeed: 1,
				"range multipler": 1,
				"bonus damage": 0,
				traits: ["Ecological"]
			},
			shaft: {
				modifier: 1,
				"bonus ammo": 0,
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
			},
			bow: {
				drawspeed: 5,
				"range multipler": 0.4,
				"bonus damage": -1,
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
			},
			bow: {
				drawspeed: 5,
				"range multipler": 0.4,
				"bonus damage": -1,
				traits: ["Crude", "Crude II"]
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
			},
			bow: {
				drawspeed: 0.95,
				"range multipler": 0.9,
				"bonus damage": 0,
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
			},
			bow: {
				drawspeed: 1.05,
				"range multipler": 1.15,
				"bonus damage": 0,
				traits: ["Fractured"]
			},
			shaft: {
				modifier: 0.9,
				"bonus ammo": 5,
				traits: ["Splitting"]
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
				traits: ["Duritae"]
			},
			extra: {
				durability: 90,
				traits: ["Duritae"]
			},
			bow: {
				drawspeed: 5,
				"range multipler": 0.4,
				"bonus damage": -1,
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
			},
			bow: {
				drawspeed: 5,
				"range multipler": 0.4,
				"bonus damage": -1,
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
			},
			bow: {
				drawspeed: 5,
				"range multipler": 0.4,
				"bonus damage": -1,
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
				traits: ["Writable"]
			},
			handle: {
				durability: 5,
				modifier: 0.1,
				traits: ["Writable"]
			},
			extra: {
				durability: 15,
				traits: ["Writable"]
			},
			bow: {
				drawspeed: 0.67,
				"range multipler": 0.4,
				"bonus damage": -2,
				traits: ["Writable II"]
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
			},
			bow: {
				drawspeed: 0.87,
				"range multipler": 0.75,
				"bonus damage": 0,
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
			},
			bow: {
				drawspeed: 1,
				"range multipler": 1,
				"bonus damage": 0,
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
			},
			bow: {
				drawspeed: 2,
				"range multipler": 1.5,
				"bonus damage": 7,
				traits: ["Magnetic", "Magnetic II"]
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
			},
			bow: {
				drawspeed: 1.67,
				"range multipler": 1.4,
				"bonus damage": 7,
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
			},
			bow: {
				drawspeed: 2.5,
				"range multipler": 2,
				"bonus damage": 2,
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
			},
			bow: {
				drawspeed: 1.18,
				"range multipler": 1.3,
				"bonus damage": 0,
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
			},
			bow: {
				drawspeed: 0.95,
				"range multipler": 1,
				"bonus damage": 0,
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
			},
			bow: {
				drawspeed: 0.91,
				"range multipler": 1.05,
				"bonus damage": 1,
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
			},
			bow: {
				drawspeed: 5,
				"range multipler": 0.4,
				"bonus damage": -1,
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
			},
			bow: {
				drawspeed: 1.33,
				"range multipler": 1.3,
				"bonus damage": 3,
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
			},
			bow: {
				drawspeed: 2.22,
				"range multipler": 0.8,
				"bonus damage": 1,
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
			},
			bow: {
				drawspeed: 1.54,
				"range multipler": 1.2,
				"bonus damage": 4,
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
			},
			bow: {
				drawspeed: 1,
				"range multipler": 1,
				"bonus damage": 0,
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
			},
			bow: {
				drawspeed: 1.43,
				"range multipler": 1.1,
				"bonus damage": 4,
				traits: []
			}
		},
		{
			name: "String",
			bowstring: {
				modifier: 1,
				traits: []
			}
		},
		{
			name: "Slimevine",
			bowstring: {
				modifier: 1,
				traits: []
			}
		},
		{
			name: "Vines",
			bowstring: {
				modifier: 1,
				traits: []
			}
		},
		{
			name: "Blazerod",
			shaft: {
				modifier: 0.8,
				"bonus ammo": 3,
				traits: ["Hovering"]
			}
		},
		{
			name: "Reeds",
			shaft: {
				modifier: 1.5,
				"bonus ammo": 20,
				traits: ["Breakable"]
			}
		},
		{
			name: "Ice",
			shaft: {
				modifier: 0.95,
				"bonus ammo": 0,
				traits: ["Freezing"]
			}
		},
		{
			name: "Endrod",
			shaft: {
				modifier: 0.7,
				"bonus ammo": 1,
				traits: ["Endspeed"]
			}
		},
		{
			name: "Raven Feather",
			fletchling: {
				modifier: 1.15,
				"accuracy": 0.95,
				traits: ["Twilit", "Veiled"]
			}
		},
		{
			name: "Feather",
			fletchling: {
				modifier: 1,
				"accuracy": 1,
				traits: []
			}
		},
		{
			name: "Slimeleaf",
			fletchling: {
				modifier: 1.25,
				"accuracy": 0.8,
				traits: []
			}
		},
		{
			name: "LeaF",
			fletchling: {
				modifier: 1.5,
				"accuracy": 0.5,
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
	],
	traits: [
		"Alien",
		"Aquadynamic",
		"Aridiculous",
		"Autosmelt",
		"Baconlicious",
		"Beheading",
		"Breakable",
		"Cheap",
		"Cheapskate",
		"Cold-Blooded",
		"Crude",
		"Crude II",
		"Crumbling",
		"Duritae",
		"Ecological",
		"Enderference",
		"Endspeed",
		"Flammable",
		"Fractured",
		"Freezing",
		"Hellish",
		"Hovering",
		"Insatiable",
		"Jagged",
		"Lightweight",
		"Magnetic",
		"Magnetic II",
		"Momentum",
		"Petramor",
		"Precipitate",
		"Prickly",
		"Sharp",
		"Slimey",
		"Spiky",
		"Splintering",
		"Splitting",
		"Squeaky",
		"Stalwart",
		"Stonebound",
		"Superheat",
		"Tasty",
		"Twilit",
		"Unnatural",
		"Writable",
		"Writable II",
		"Veiled",
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

