const items = require("consts.json");

var tools = document.getElementById("tools");
for(tool in items.tools)
{
    //radio button
    var input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "tool");
    input.setAttribute("id", tool);
    input.setAttribute("value", tool);
    
    //radio button label
    var label = document.createElement("label");
    label.setAttribute("for", tool);
    
    //tool icon
    var img = document.createElement("img");
    img.setAttribute("src", "icons/"+tool+".png");
    img.setAttribute("title", tool);
    img.setAttribute("width", "25");
    
    //add to tools
    label.appendChild(img);
    tools.appendChild(input);
    tools.appendChild(label);
}
