create folder
	cd node
	create Js file
run Js file on Node
	node <JS fileName>

Global Objects =>
	console.log();
	setTimeout();// to invoke function after certain time
	clearTimeout();
	setInterval();//to repeatidly invoke function in intervals
	clearInterval();
	
in browser these global objects are part of global scope window 
	window.console.log();// window. is appended by browser runtime if not there
however there is no window global object in Node
Instead it has 'global'
	global.console.log();
	
Also to note that any variable declared is added to global space in browser but not in Node
in browser
	var i =9;
	console.log(window.i);// prints 9
	
in Node
	var i =9;
	console.log(global.i);// prints undefined

Node have modules to not pollute the global scope/space
	Any variables/Functions defined in node file is part of that file scope(also called modules) only
	So every Node application has one main module
		console.log(module);// prints module object, its not a global object
		
To export stuff from module
	refer eg2
	
Refer Node Built In Modules
https://nodejs.org/en/docs/ => API link	

Node has some inbuilt class(es) as well under in built Modules(ES6 provides class and object style)
A class is a container for related properties and functions(methods)
	eg EventEmitter of events Module(class starts with capital letter)
	refer eg7