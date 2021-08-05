//make sure info is loaded
console.assert(info, "info is not defined");
console.assert(info.tools, "info.tools is not defined");
console.assert(info.materials, "info.materials is not defined");

//tools
let tools = document.getElementById("tools");
for(let tool of info.tools)
{
	//make string html compliant
	let tool2 = tool.name.toLowerCase().replaceAll(" ", "-");
	
	//wrapper
	let wrapper = document.createElement("span");
	wrapper.setAttribute("class", "wrapper");
	
	//radio button
	let input = document.createElement("input");
	input.setAttribute("type", "radio");
	input.setAttribute("name", "tool");
	input.setAttribute("id", tool2);
	input.setAttribute("value", tool2);
	
	//label
	let label = document.createElement("label");
	label.setAttribute("for", tool2);
	
	//tool icon
	let img = document.createElement("img");
	img.setAttribute("src", "icons/tools/"+tool2+".png");
	img.setAttribute("title", tool.name);
	img.setAttribute("width", "25");
	
	//add to tools
	label.appendChild(img);
	wrapper.appendChild(input);
	wrapper.appendChild(label);
	tools.appendChild(wrapper);
}
tools.firstElementChild.firstElementChild.setAttribute("checked", true);


//materials
let materials = document.getElementById("materials");
for(material of info.materials)
{
	//make string html compliant
	let material2 = material.name.toLowerCase().replaceAll(" ", "-");
	
	//wrapper
	let wrapper = document.createElement("span");
	wrapper.setAttribute("class", "wrapper");
	
	//checkbox
	let input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	input.setAttribute("name", "material");
	input.setAttribute("id", material2);
	input.setAttribute("value", material2);
	input.setAttribute("checked", true);
	
	//label
	let label = document.createElement("label");
	label.setAttribute("for", material2);
	
	//material icon
	let img = document.createElement("img");
	img.setAttribute("src", "icons/materials/"+material2+".png");
	img.setAttribute("title", material.name);
	img.setAttribute("width", "25");
	
	//add to materials
	label.appendChild(img);
	wrapper.appendChild(input);
	wrapper.appendChild(label);
	materials.appendChild(wrapper);
}

 
 
//modifiers
