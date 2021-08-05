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
let materialList
let target;
let curTool = [], bestTool, bestStat = -1;

const verbose = true;

function Optimize()
{
	//reset values
	curTool = [];
	bestTool = [];
	bestStat = -1;
	
	//find tool
	findOptimizedTool();
	
	//display tool stats
	if(verbose)
		console.log(bestTool);
	//get display
	let display = document.getElementById("result");
	//clear display
	while(display.firstChild)
		display.removeChild(display.lastChild);
	//build text
	for(let i = 0; i < bestTool.length; i++)
	{
		display.appendChild(document.createTextNode(info.materials[bestTool[i]].name+" "+toolParts[i].name));
		display.appendChild(document.createElement("br"));
	}
	display.appendChild(document.createTextNode(bestStat));
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
	if(index == toolParts.length)
	{
		//evaluate material
		if(target == "durability")
		{
			let curStat = getDurability(curTool);
			if(curStat > bestStat)
			{
				bestStat = curStat;
				bestTool = curTool.slice(0);
			}
		}
		else if(target == "mining-speed")
		{
			
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
	let head = [];
	let limb = [];
	let extra = [];
	let handle = [];
	let modifier = [];
	let string = [];
	
	for(let i = 0; i < toolParts.length; i++)
		for(let part of toolParts[i].types)
			if(part == "head")
				head.push(info.materials[tool[i]].head.durability);
			else if(part == "limb")
				limb.push(info.materials[tool[i]].limb.durability);  //TODO: modify stats based on limb
			else if(part == "extra")
				extra.push(info.materials[tool[i]].extra.durability);
			else if(part == "handle")
			{
				handle.push(info.materials[tool[i]].handle.durability);
				modifier.push(info.materials[tool[i]].handle.modifier);
			}
			else if(part == "string")
				string.push(info.materials[tool[i]].string.durability);  //TODO: modify stats based on string
			else
				throw "Not Implemented Exception ("+JSON.stringify(part)+")";
	
	let avgHead = head.length ? avg(head) : 0;
	let avgLimb = limb.length ? avg(limb) : 0;
	let avgExtra = extra.length ? avg(extra) : 0;
	let avgHandle = handle.length ? avg(handle) : 0;
	let avgModifier = modifier.length ? avg(modifier) : 1;
	let avgString = string.length ? avg(string) : 0;
	
	let durability = (avgHead + avgExtra) * avgModifier + avgHandle;
	
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

function getMiningSpeed()
{
	
}

function getAttackSpeed()
{
	
}

function getAttackDamage()
{
	
}
