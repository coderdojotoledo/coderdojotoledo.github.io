function sayMyName(name) {
	console.log("My name is " + name);
}

sayMyName("DogeMaster69420");

var names = ["John", "Jacob", "Jingleheimer", "Schmidt"];

for (var i = 0; i < names.length; i++) {
	var name = sayMyName(names[i]);
	document.getElementById("name" + i).innerHTML = name;
}