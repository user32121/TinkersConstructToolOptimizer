//useful link: https://docs.google.com/document/d/1bJx2lKuM1O7UATKQ6JvP73va6zHl0DE7kj84VnkDIxQ/edit

//helper functions
function avg(ar)
{
	let sum = 0;
	for(let x of ar)
		sum += x;
	return sum / ar.length;
}

//declare globals
let selectedToolName, toolParts;
let useEmbossment, embossment;
let materialList
let target;
let curTool = [], bestTool, bestEmbossment, bestBaseStat = -1, bestBonusStat = -1;

const verbose = false;

function Optimize()
{
	//reset values
	curTool = [];
	bestTool = [];
	bestBaseStat = -1;
	bestBonusStat = -1;
	bestEmbossment = undefined;
	
	//get display
	let display = document.getElementById("result");
	//clear display
	while(display.firstChild)
		display.removeChild(display.lastChild);
	//error display in case function fails
	display.appendChild(document.createTextNode("error"));
	
	//find tool
	findOptimizedTool();
	
	//display tool stats
	if(verbose)
		console.log(bestTool);
	//build text
	display.removeChild(display.lastChild);
	if(bestBaseStat == -1)
	{
		display.appendChild(document.createTextNode("error"));
	}
	else
	{
		for(let i = 0; i < bestTool.length; i++)
		{
			display.appendChild(document.createTextNode(info.materials[bestTool[i]].name+" "+toolParts[i].name));
			display.appendChild(document.createElement("br"));
		}
		if(bestEmbossment != undefined)
		{
			display.appendChild(document.createTextNode(info.materials[bestEmbossment.material].name+" "+bestEmbossment.part.name+" Embossment"));
			display.appendChild(document.createElement("br"));
		}
		if(bestBonusStat == -1)
			display.appendChild(document.createTextNode(bestBaseStat));
		else
			display.appendChild(document.createTextNode(bestBaseStat+" + "+bestBonusStat));
	}
}

function findOptimizedTool()
{
	//get tool type
	selectedToolName = document.querySelector("input[name='tool']:checked").value;
	if(verbose)
		console.log("selected "+selectedToolName);
	toolParts = info.tools[selectedToolName].parts;
	if(verbose)
		console.log(toolParts);
	
	//material list
	materialList = Array.from(document.querySelectorAll("input[name='material']:checked")).map(input => input.value);
	if(verbose)
		console.log(materialList);
	
	//use embossment?
	useEmbossment = !!document.querySelector("input#embossment:checked");
	if(verbose)
		console.log(useEmbossment);
	
	//optimization target
	target = document.querySelector("select#optimization-target").value;
	if(verbose)
		console.log(target);
	
	//material matrix
	//TODO
	
	//iterate through all combinations
	selectToolPart(0);
}

function selectToolPart(index)
{
	if(index == toolParts.length+ (useEmbossment?1:0))
	{
		//evaluate material
		if(target == "durability")
		{
			let curStat = getDurability(curTool);
			if(curStat > bestBaseStat)
			{
				bestBaseStat = curStat;
				bestTool = curTool.slice(0);
			}
		}
		else if(target == "mining-speed")
		{
			let curStat = getMiningSpeed(curTool);
			if(curStat > bestBaseStat+bestBonusStat)
			{
				bestBaseStat = getMiningSpeed(curTool, true);
				bestBonusStat = curStat-bestBaseStat;
				bestTool = curTool.slice(0);
				if(useEmbossment)
					bestEmbossment = embossment;
			}
		}
		else if(target == "attack-speed")
		{
			
		}
		else if(target == "attack-damage")
		{
			
		}
		else if(target == "dps")
		{
			
		}
		
		return;
	}
	else if(index == toolParts.length && useEmbossment)
	{
		//select embossment
		for(let material of materialList)
			for(let part of toolParts)
			{
				let valid = true;
				for(let partType of part.types)
					if(info.materials[material][partType] == undefined)
						valid = false;
				if(valid)
				{
					embossment = { part, material };
					selectToolPart(index+1);
				}
			}
		return;
	}
	
	//select material
	for(let material of materialList)
	{
		let valid = true;
		for(let part of toolParts[index].types)
			if(info.materials[material][part] == undefined)
				valid = false;
		if(valid)
		{
			curTool[index] = material;
			selectToolPart(index+1);
		}
	}
}

function getDurability(tool)
{
	let head = [];  //head durability
	let extra = [];  //extra durability
	let handle = [];  //handle durability
	let modifier = [];  //handle multiplier
	let fletchlings = [];  //fletchling multiplier
	let shafts = [];  //shaft multiplier
	let shaftBonus = [];  //shaft bonus
	let bowstrings = [];  //bowstring multiplier
	
	for(let i = 0; i < toolParts.length; i++)
		for(let part of toolParts[i].types)
			if(part == "head")
				head.push(info.materials[tool[i]].head.durability);
			else if(part == "extra")
				extra.push(info.materials[tool[i]].extra.durability);
			else if(part == "handle")
			{
				handle.push(info.materials[tool[i]].handle.durability);
				modifier.push(info.materials[tool[i]].handle.modifier);
			}
			else if(part == "fletchling")
				fletchlings.push(info.materials[tool[i]].fletchling.modifier);
			else if(part == "shaft")
			{
				shafts.push(info.materials[tool[i]].shaft.modifier);
				shaftBonus.push(info.materials[tool[i]].shaft["bonus ammo"]);
			}
			else if(part == "bow") {}  //no durability stat
			else if(part == "bowstring")
				bowstrings.push(info.materials[tool[i]].bowstring.modifier);
			else
				throw "Not Implemented Exception (part "+JSON.stringify(part)+")";
	
	let avgHead = head.length ? avg(head) : 0;
	let avgExtra = extra.length ? avg(extra) : 0;
	let avgHandle = handle.length ? avg(handle) : 0;
	let avgModifier = modifier.length ? avg(modifier) : 1;
	let avgFletchling = fletchlings.length ? avg(fletchlings) : 1;
	let avgShaft = shafts.length ? avg(shafts) : 1;
	let avgshaftBonus = shaftBonus.length ? avg(shaftBonus) : 0;
	let avgBowstring = bowstrings.length ? avg(bowstrings) : 1;
	
	let durability = ((avgHead + avgExtra) * avgModifier * avgFletchling * avgShaft + avgHandle + avgshaftBonus) * avgBowstring;
	
	//tool modifiers
	if(info.tools[selectedToolName].modifiers["durability"])
		for(let [op, v] of info.tools[selectedToolName].modifiers["durability"])
			if(op == "=")
				durability = v;
			else if(op == "+")
				durability += v;
			else if(op == "*")
				durability *= v;
			else
				throw "Not Implemented Exception ("+JSON.stringify(op)+")";
	
	return Math.round(durability);
}

const miningSpeedIgnoredTraits = ["Aquadynamic","Autosmelt","Baconlicious","Beheading","Breakable","Cheap","Cheapskate","Cold-Blooded","Crude","Crude II","Duritae","Ecological","Enderference","Endspeed","Evil Aura","Experience Boost","Flammable","Fractured","Freezing","Hellish","Hovering","Insatiable","Jagged","Magically Brittle","Magically Modifiable","Magnetic","Magnetic II","Petramor","Prickly","Sharp","Slimey","Spiky","Splintering","Splitting","Squeaky","Stalwart","Superheat","Synergy","Tasty","Whispering","Writable","Writable II","Veiled"];
function getMiningSpeed(tool, baseStatOnly=false)
{
	let miningSpeed = [];
	let miningLevel = [];  //currently not being used (unnatural trait not yet implemented)
	let traits = new Set();
	
	//base mining speed
	for(let i = 0; i < toolParts.length; i++)
		for(let part of toolParts[i].types)
			if(part == "head")
			{
				miningSpeed.push(info.materials[tool[i]].head["mining speed"]);
				miningLevel.push(info.materials[tool[i]].head["mining level"]);
				for(trait of info.materials[tool[i]].head.traits)
					traits.add(trait);
			}
			else if(part == "extra")
				for(trait of info.materials[tool[i]].extra.traits)
					traits.add(trait);
			else if(part == "handle")
				for(trait of info.materials[tool[i]].handle.traits)
					traits.add(trait);
			else if(part == "shaft"||part == "fletchling"||part == "bow"||part == "bowstring") {}  //no durability stat
			else
				throw "Not Implemented Exception (part "+JSON.stringify(part)+")";
	
	let avgMiningSpeed = avg(miningSpeed);
	let toolSpeed = avgMiningSpeed;
	
	//tool modifiers
	if(info.tools[selectedToolName].modifiers["mining speed"])
		for(let [op, v] of info.tools[selectedToolName].modifiers["mining speed"])
			if(op == "+")
				toolSpeed += v;
			else if(op == "*")
				toolSpeed *= v;
			else
				throw "Not Implemented Exception ("+JSON.stringify(op)+")";
	
	if(baseStatOnly)
		return toolSpeed;

	let finalSpeed = toolSpeed;
	
	//traits
	for(let partTypes of embossment.part.types)
		for(let trait of info.materials[embossment.material][partTypes].traits)
			traits.add(trait);
	for(trait of traits)
	{
		if(trait == "Alien")
		{
			finalSpeed += 1.862;
		}
		else if(trait == "Aridiculous")
		{
			//TODO: Advanced
		}
		else if(trait == "Crumbling")
		{
			//TODO: Advanced
			//finalSpeed *= toolSpeed * 0.5;
		}
		else if(trait == "Lightweight")
		{
			finalSpeed *= 1.1;
		}
		else if(trait == "Momentum")
		{
			finalSpeed += avgMiningSpeed * 0.4;
		}
		else if(trait == "Precipitate")
		{
			//TODO: Advanced
		}
		else if(trait == "Stonebound")
		{
			finalSpeed += Math.log((getDurability(tool)-1) / 72 + 1) * 2;
		}
		else if(trait == "Twilit")
		{
			//TODO: Advanced
		}
		else if(trait == "Unnatural")
		{
			//TODO: Advanced
		}
		else if(miningSpeedIgnoredTraits.includes(trait)) {}  //trait has no effect on mining speed
		else
			throw "Not Implemented Exception (trait "+JSON.stringify(trait)+")";
	}
	
	return finalSpeed;
}

function getAttackSpeed(tool)
{
	
}

function getAttackDamage(tool)
{
	
}
