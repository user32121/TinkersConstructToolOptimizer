const items = {
    tools: ["Pickaxe", "Shovel", "Hatchet", "Mattock", "Kama", "Scythe", "Hammer", "Excavator", "Lumberaxe", "Broadsword", "Longsword", "Rapier", "Battlesign", "Frypan", "Cleaver", "Arrow", "Shortbow", "Longbow", "Bolt", "Crossbow", "Shuriken"],
	materials: ["Naga Scale", "Steeleaf", "Fiery Ingot", "Knightly Metal", "Wood", "Stone", "Flint", "Cactus", "Bone", "Obsidian", "Prismarine", "End Stone", "Paper", "Sponge", "Firewood", "Iron", "Pig Iron", "Knightslime", "Slime", "Blue Slime", "Magma Slime", "Netherrack", "Cobalt", "Ardite", "Manyullyn", "Magical Wood", "Evil Infused Iron", "Enchanted Metal", "Demonic Metal"]
}

//tools
var tools = document.getElementById("tools");
for(tool of items.tools)
{
	//make string html compliant
	var tool2 = tool.toLowerCase().replace(" ", "-");
	
	//wrapper
	var wrapper = document.createElement("span");
	wrapper.setAttribute("class", "wrapper");
	
    //radio button
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "tool");
    input.setAttribute("id", tool2);
    input.setAttribute("value", tool2);
    
    //label
    var label = document.createElement("label");
    label.setAttribute("for", tool2);
    
    //tool icon
    var img = document.createElement("img");
    img.setAttribute("src", "icons/"+tool+".png");
    img.setAttribute("title", tool);
    img.setAttribute("width", "25");
    
    //add to tools
    label.appendChild(img);
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    tools.appendChild(wrapper);
}
tools.firstElementChild.setAttribute("checked", true);


//materials
var materials = document.getElementById("materials");
for(material of items.materials)
{
	//make string html compliant
	var material2 = material.toLowerCase().replace(" ", "-");
	
	//wrapper
	var wrapper = document.createElement("span");
	wrapper.setAttribute("class", "wrapper");
	
    //checkbox
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", material2);
    input.setAttribute("value", material2);
	input.setAttribute("checked", true);
    
    //label
    var label = document.createElement("label");
    label.setAttribute("for", material2);
    
    //material icon
    var img = document.createElement("img");
    img.setAttribute("src", "icons/"+material+".png");
    img.setAttribute("title", material);
    img.setAttribute("width", "25");
    
    //add to materials
    label.appendChild(img);
    wrapper.appendChild(input);
    wrapper.appendChild(label);
    materials.appendChild(wrapper);
}



//modifiers
