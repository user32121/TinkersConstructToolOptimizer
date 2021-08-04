//make sure info is loaded
console.assert(info, "info is not defined");
console.assert(info.tools, "info.tools is not defined");
console.assert(info.materials, "info.materials is not defined");

//tools
var tools = document.getElementById("tools");
for(tool of info.tools)
{
	//make string html compliant
	var tool2 = tool.name.toLowerCase().replaceAll(" ", "-");
	
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
	img.setAttribute("src", "icons/tools/"+tool2+".png");
	img.setAttribute("title", tool);
	img.setAttribute("width", "25");
	
	//add to tools
	label.appendChild(img);
	wrapper.appendChild(input);
	wrapper.appendChild(label);
	tools.appendChild(wrapper);
}
tools.firstElementChild.firstElementChild.setAttribute("checked", true);


//materials
var materials = document.getElementById("materials");
for(material of info.materials)
{
	//make string html compliant
	var material2 = material.name.toLowerCase().replaceAll(" ", "-");
	
	//wrapper
	var wrapper = document.createElement("span");
	wrapper.setAttribute("class", "wrapper");
	
	//checkbox
	var input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.setAttribute("name", "material");
	input.setAttribute("id", material2);
	input.setAttribute("value", material2);
	input.setAttribute("checked", true);
	
	//label
	var label = document.createElement("label");
	label.setAttribute("for", material2);
	
	//material icon
	var img = document.createElement("img");
	img.setAttribute("src", "icons/materials/"+material2+".png");
	img.setAttribute("title", material);
	img.setAttribute("width", "25");
	
	//add to materials
	label.appendChild(img);
	wrapper.appendChild(input);
	wrapper.appendChild(label);
	materials.appendChild(wrapper);
}


 
//modifiers
