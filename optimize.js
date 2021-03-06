//useful link: https://docs.google.com/document/d/1bJx2lKuM1O7UATKQ6JvP73va6zHl0DE7kj84VnkDIxQ/edit

//helper functions
function avg(ar)
{
	let sum = 0;
	for(let x of ar)
		sum += x;
	return sum / ar.length;
}
const sleep = ms => new Promise(res => setTimeout(res, ms));

//declare globals
let selectedToolName, toolParts;
let useEmbossment, embossment;
let materialList
let target;
let environment = {};
let curTool = [], bestTool, bestEmbossment, bestBaseStat = -1, bestBonusStat = -1;

const verbose = false;

let progressBar = document.getElementById("progress-bar");

let mostRecentRequestID = 0;

async function Optimize()
{
	//prevent multiple sessions
	mostRecentRequestID++;
	
	//reset values
	curTool = [];
	bestTool = [];
	bestBaseStat = -1;
	bestBonusStat = -1;
	bestEmbossment = undefined;
	progressBar.value = 0;
	progressBar.hidden = false;
	
	//get display
	let display = document.getElementById("result");
	//clear display
	while(display.firstChild)
		display.removeChild(display.lastChild);
	//error display in case function fails
	//display.appendChild(document.createTextNode("error"));
	
	//find tool
	try
	{
		requestID = await findOptimizedTool(mostRecentRequestID);
		//check if newer request has been sent
		if(requestID != mostRecentRequestID)
			return;
	} catch(error) {
		console.log(error);
		display.appendChild(document.createTextNode("error"));
		return;
	}
	
	//display tool stats
	if(verbose)
		console.log(bestTool);
	//build text
	//display.removeChild(display.lastChild);
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
			display.appendChild(document.createTextNode(Number(bestBaseStat.toFixed(5))+" + "+Number(bestBonusStat.toFixed(5))));
	}
	progressBar.hidden = true;
}

async function findOptimizedTool(requestID)
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
	progressBar.max = materialList.length;
	
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
	await selectToolPart(requestID, 0, true);
	return requestID;
}

async function selectToolPart(requestID, index, useProgressBar=false)
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
			let curStat = getAttackSpeed(curTool);
			if(curStat > bestBaseStat+bestBonusStat)
			{
				bestBaseStat = getAttackSpeed(curTool, true);
				bestBonusStat = curStat-bestBaseStat;
				bestTool = curTool.slice(0);
				if(useEmbossment)
					bestEmbossment = embossment;
			}
		}
		else if(target == "attack-damage")
		{
			let curStat = getAttackDamage(curTool);
			if(curStat > bestBaseStat+bestBonusStat)
			{
				bestBaseStat = getAttackDamage(curTool, true);
				bestBonusStat = curStat-bestBaseStat;
				bestTool = curTool.slice(0);
				if(useEmbossment)
					bestEmbossment = embossment;
			}
		}
		else if(target == "dps")
		{
			let curStat = getAttackDamage(curTool) * getAttackSpeed(curTool);
			if(curStat > bestBaseStat)
			{
				bestBaseStat = curStat;
				bestTool = curTool.slice(0);
				if(useEmbossment)
					bestEmbossment = embossment;
			}
		}
		
		return;
	}
	else if(index == toolParts.length && useEmbossment)
	{
		//select embossment
		for(let material of materialList)
			for(let part of toolParts)
			{
				if(requestID != mostRecentRequestID)
					return;
				
				let valid = true;
				for(let partType of part.types)
					if(info.materials[material][partType] == undefined)
						valid = false;
				if(valid)
				{
					embossment = { part, material };
					await selectToolPart(requestID, index+1);
				}
			}
		return;
	}
	
	//select material	
	if(useProgressBar)
	{
		progressBar.value = 0;
		await sleep(1);
	}
	for(let i = 0; i < materialList.length; i++)
	{
		if(requestID != mostRecentRequestID)
			return;
		
		let valid = true;
		for(let part of toolParts[index].types)
			if(info.materials[materialList[i]][part] == undefined)
				valid = false;
		if(valid)
		{
			curTool[index] = materialList[i];
			await selectToolPart(requestID, index+1);
		}
		if(useProgressBar)
		{
			progressBar.value = i+1;
			await sleep(1);
		}
	}
	return;
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

const miningSpeedIgnoredTraits = ["Autosmelt","Baconlicious","Beheading","Breakable","Cheap","Cheapskate","Cold-Blooded","Crude","Crude II","Duritae","Ecological","Enderference","Endspeed","Evil Aura","Experience Boost","Flammable","Fractured","Freezing","Hellish","Hovering","Insatiable","Jagged","Magically Brittle","Magically Modifiable","Magnetic","Magnetic II","Petramor","Prickly","Sharp","Slimey","Spiky","Splintering","Splitting","Squeaky","Stalwart","Superheat","Synergy","Tasty","Whispering","Writable","Writable II","Veiled"];
function getMiningSpeed(tool, baseStatOnly=false)
{
	let miningSpeed = [];
	let miningLevel = [];  //currently not being used (unnatural trait not yet implemented)
	let traits = new Set();
	
	//base mining speed
	for(let i = 0; i < toolParts.length; i++)
		for(let part of toolParts[i].types)
		{
			if(part == "head")
			{
				miningSpeed.push(info.materials[tool[i]].head["mining speed"]);
				miningLevel.push(info.materials[tool[i]].head["mining level"]);
			}
			else if(part == "extra"||part == "handle"||part == "shaft"||part == "fletchling"||part == "bow"||part == "bowstring") {}
			else
				throw "Not Implemented Exception (part "+JSON.stringify(part)+")";
			
			//traits
			for(trait of info.materials[tool[i]][part].traits)
				traits.add(trait);
		}
	
	let avgMiningSpeed = avg(miningSpeed);
	let maxMiningLevel = Math.max(...miningLevel);
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
	if(info.tools[selectedToolName].modifiers["mining level"])
		for(let [op, v] of info.tools[selectedToolName].modifiers["mining level"])
			if(op == "=")
				maxMiningLevel = info.materials[tool[v]].head["mining level"];
			else
				throw "Not Implemented Exception ("+JSON.stringify(op)+")";
	
	if(baseStatOnly)
		return toolSpeed;

	let finalSpeed = toolSpeed;
	
	//traits
	if(embossment != undefined)
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
			finalSpeed += toolSpeed * ((Math.pow(1.25, 3 * (0.5 + environment.temperature - environment.rainfall)) - 1.25) - environment.rainfall/2) / 10;
		}
		else if(trait == "Aquadynamic")
		{
			finalSpeed += toolSpeed * environment.rainfall/1.6;
		}
		else if(trait == "Crumbling")
		{
			if(environment["hand breakable"])
				finalSpeed += toolSpeed * 0.5;
		}
		else if(trait == "Lightweight")
		{
			finalSpeed *= 1.1;
		}
		else if(trait == "Momentum")
		{
			finalSpeed += toolSpeed * 0.4;
		}
		else if(trait == "Precipitate")
		{
			finalSpeed += toolSpeed * (1-environment["player health"]);
		}
		else if(trait == "Stonebound")
		{
			finalSpeed += Math.log((getDurability(tool)-1) / 72 + 1) * 2;
		}
		else if(trait == "Twilit")
		{
			if(environment["in twilight"])
				finalSpeed += 2;
		}
		else if(trait == "Unnatural")
		{
			if(environment["block level"] != -1 && maxMiningLevel > environment["block level"])
				finalSpeed += maxMiningLevel - environment["block level"];
		}
		else if(miningSpeedIgnoredTraits.includes(trait)) {}  //trait has no effect on mining speed
		else
			throw "Not Implemented Exception (trait "+JSON.stringify(trait)+")";
	}
	
	return finalSpeed;
}

const attackSpeedIgnoredTraits = ["Aquadynamic","Autosmelt","Baconlicious","Beheading","Breakable","Cheap","Cheapskate","Cold-Blooded","Crude","Crude II","Duritae","Ecological","Enderference","Endspeed","Evil Aura","Experience Boost","Flammable","Fractured","Freezing","Hellish","Hovering","Insatiable","Jagged","Magically Brittle","Magically Modifiable","Magnetic","Magnetic II","Petramor","Prickly","Sharp","Slimey","Spiky","Splintering","Splitting","Squeaky","Stalwart","Superheat","Synergy","Tasty","Whispering","Writable","Writable II","Veiled", "Twilit", "Alien", "Aridiculous", "Crumbling", "Momentum", "Precipitate", "Stonebound", "Unnatural"];
function getAttackSpeed(tool, baseStatOnly=false)
{
	let attackSpeed = 1;
	let drawSpeed = [];
	let traits = new Set();
	
	//get traits
	for(let i = 0; i < toolParts.length; i++)
		for(let part of toolParts[i].types)
		{
			if(part == "bow")
				drawSpeed.push(info.materials[tool[i]].bow.drawspeed);
			for(trait of info.materials[tool[i]][part].traits)
				traits.add(trait);
		}
	
	let avgDrawSpeed = (drawSpeed.length ? 1/avg(drawSpeed) : 1);
	let toolSpeed = attackSpeed * avgDrawSpeed;
	
	//tool modifiers
	if(info.tools[selectedToolName].modifiers["attack speed"])
		for(let [op, v] of info.tools[selectedToolName].modifiers["attack speed"])
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
	if(embossment != undefined)
		for(let partTypes of embossment.part.types)
			for(let trait of info.materials[embossment.material][partTypes].traits)
				traits.add(trait);
	for(trait of traits)
	{
		if(trait == "Lightweight")
		{
			finalSpeed *= 1.1;
		}
		else if(attackSpeedIgnoredTraits.includes(trait)) {}  //trait has no effect on mining speed
		else
			throw "Not Implemented Exception (trait "+JSON.stringify(trait)+")";
	}
	
	return finalSpeed;
}

const attackDamageIgnoredTraits = ["Aquadynamic","Autosmelt","Baconlicious","Beheading","Breakable","Cheap","Cheapskate","Crumbling","Duritae","Ecological","Enderference","Endspeed","Evil Aura","Experience Boost","Flammable","Freezing","Hovering","Lightweight","Magically Brittle","Magically Modifiable","Magnetic","Magnetic II","Momentum","Petramor","Precipitate","Sharp","Slimey","Spiky","Splitting","Stalwart","Stonebound","Synergy","Tasty","Unnatural","Whispering","Writable","Writable II","Veiled"]
function getAttackDamage(tool, baseStatOnly=false)
{
	let attackDamage = [];
	let bonusDamage = [];
	let traits = new Set();
	
	//base attack damage
	for(let i = 0; i < toolParts.length; i++)
		for(let part of toolParts[i].types)
		{
			if(part == "head")
				attackDamage.push(info.materials[tool[i]].head["attack damage"]);
			else if(part == "bow")
				bonusDamage.push(info.materials[tool[i]].bow["bonus damage"]);
			else if(part == "extra"||part == "handle"||part == "shaft"||part == "fletchling"||part == "bowstring") {}
			else
				throw "Not Implemented Exception (part "+JSON.stringify(part)+")";
			
			//traits
			for(trait of info.materials[tool[i]][part].traits)
				traits.add(trait);
		}
	
	let avgAttackDamage = avg(attackDamage);
	let avgBonusDamage = bonusDamage.length ? avg(bonusDamage) : 0;
	let toolDamage = avgAttackDamage;
	
	//tool modifiers
	if(info.tools[selectedToolName].modifiers["attack damage"])
		for(let [op, v] of info.tools[selectedToolName].modifiers["attack damage"])
			if(op == "+")
				toolDamage += v;
			else if(op == "*")
				toolDamage *= v;
			else
				throw "Not Implemented Exception ("+JSON.stringify(op)+")";
	
	if(baseStatOnly)
		return toolDamage + avgBonusDamage;

	let finalDamage = toolDamage + avgBonusDamage;
	
	//traits
	if(embossment != undefined)
		for(let partTypes of embossment.part.types)
			for(let trait of info.materials[embossment.material][partTypes].traits)
				traits.add(trait);
	for(trait of traits)
	{
		if(trait == "Alien")
		{
			finalDamage += 1.33;
		}
		else if(trait == "Aridiculous")
		{
			finalDamage += ((Math.pow(1.25, 3 * (0.5 + environment.temperature - environment.rainfall)) - 1.25) - environment.rainfall/2) * 2;
		}
		else if(trait == "Cold-Blooded")
		{
			if(environment["target full health"])
				finalDamage += toolDamage/2;
		}
		else if(trait == "Crude")
		{
			finalDamage += toolDamage*0.05;
		}
		else if(trait == "Crude II")
		{
			finalDamage += toolDamage*0.1;
		}
		else if(trait == "Fractured")
		{
			finalDamage += 1.5;
		}
		else if(trait == "Hellish")
		{
			if(!environment["target fire immune"])
				finalDamage += 4;
		}
		else if(trait == "Insatiable")
		{
			finalDamage += 10/3;
		}
		else if(trait == "Jagged")
		{
			finalDamage += Math.log((getDurability(tool)-1) / 72 + 1) * 2;
		}
		else if(trait == "Prickly")
		{
			finalDamage += 1;
		}
		else if(trait == "Splintering")
		{
			finalDamage += 0.3 * (5+1);
		}
		else if(trait == "Squeaky")
		{
			finalDamage = 0;
			toolDamage = 0;
		}
		else if(trait == "Superheat")
		{
			if(environment["target on immune"])
				finalDamage += toolDamage * 0.35;
		}
		else if(trait == "Twilit")
		{
			if(!environment["in twilight"])
				finalDamage += 2;
		}
		else if(attackDamageIgnoredTraits.includes(trait)) {}  //trait has no effect on mining speed
		else
			throw "Not Implemented Exception (trait "+JSON.stringify(trait)+")";
	}
	
	return finalDamage;
}



function sliderOnInput(caller)
{
	let property = caller.id.replaceAll("-"," ");
	environment[property] = caller.value;
	document.querySelector("label[for="+caller.id+"]").textContent = property.charAt(0).toUpperCase()+property.slice(1)+": "+caller.value;
}
for(let slider of document.querySelectorAll("input[oninput=\"sliderOnInput(this)\"]"))
	slider.oninput();
function checkboxOnInput(caller)
{
	let property = caller.id.replaceAll("-"," ");
	environment[property] = caller.checked;
}
for(let checkbox of document.querySelectorAll("input[oninput=\"checkboxOnInput(this)\"]"))
	checkbox.oninput();
function dropdownOnInput(caller)
{
	let property = caller.id.replaceAll("-"," ");
	environment[property] = caller.value;
}
