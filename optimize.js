function Optimize()
{
	var selectedTool = document.querySelector("input[name='tool']:checked").value;
	console.log("selected "+selectedTool);
	
	var selectedMaterials = Array.from(document.querySelectorAll("input[name='material']:checked")).map(input => input.value);
	console.log("material list: "+selectedMaterials);
	
	
}