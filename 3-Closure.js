Closure is a Function which remembers its scope

eg:
var a =10;

function outer(){
	var b =20;
	
	var inner = function(){
		console.log(a);
		console.log(b);
	};
	return inner;
}

var innerFunc = outer();

innerFunc();

o/p would be 
10
20// as closure in action and b scope is known
-------------------------
IMP: functions refer to single copy of variables it refers OR Variables are created for per execution of functions
eg:
var a =10;

function outer(){
	var b =20;
	
	var inner = function(){
		a++;
		b++;
		console.log(a);
		console.log(b);
	};
	return inner;
}

var innerFunc = outer();

innerFunc();

var innerFunc1 = outer();// new b is created

innerFunc1();

o/p would be 
11
21// new local copy
12// same Global copy
21// new local copy per execution of function
--------------------
The module pattern is a clever way to use closures to create private and public properties of an object (JavaScript doesn't provide that by default).

function createPerson(){
	var firstName = "ABC";
	var lastName = "xyz";
	
	var returnObj = {
		getFirstName : function(){
			return firstName;
		},
		getLastName : function(){
			return lastName;
		},
		setFirstName : function(name){
			firstName = name;
		}
	};
	
	return returnObj;
	
}

var person = createPerson();//a new firstName & lastName are created per execution of createPerson()
--------------------------------------------
Application of closures 
eg:
var i;

var print = function(){
	console.log(i);
};

for(i =0; i < 10; i++){
	setTimeout(print, 1000);// it invokes print after 1000 millis
}

o/p => this prints 10 10 times(wrong)

Sol:To set scope when calling print within loop using IIFE
var i;

var print = function(value){
	console.log(value);
};

for(i =0; i < 10; i++){
	(function(currVal){
		setTimeout(print(currVal), 1000);// it invokes print after 1000 millis
	})(i);
}

SOL with inline function:
var i;


for(i =0; i < 10; i++){
	(function(currVal){
		setTimeout(function(){
	     console.log(currVal);
        }, 1000);// it invokes print after 1000 millis
	})(i);
}

o/p => prints 0-9 after 1 sec as desired
---------------------------------------------------------
Functions Called as constructor

//Traditional function for creating new objects
function createBicycle(speed, gear){
	var newBicycle = {};
	newBicycle.speed = speed;
	newBicycle.gear = gear;
	return newBicycle;
}

// constructor function starts with caps as a convention(standard way of telling developers that its a constructor function)
function Bicycle(speed, gear){
	//var this = {};// see as if JS inserted this line when invoked using new keyword
	this.speed = speed;
	this.gear = gear;
	//return this;// see as if JS inserted this line when invoked using new keyword
}

var bicycle1 = createBicycle(20,4);
var bicycle2 = new Bicycle(10,4);// note new keyword
---------------------------------------
diff ways of calling Functions and this keyword

function foo(){
	console.log(this);
}

foo(); //Method #1 this refers to global object, 'this' is the implicit argument passed to every function call alongwith 'arguments'

var obj = {};
obj.foo = function (){
	console.log(this);// this refers to obj Object
};

obj.foo(); // Method #2

new foo(); // Method #3 //in this case 'this' is intialized with empty object each time is called with new operator => constructor mode

foo,call({});// Method #4 // in this foo is called with 'this' reference of object passed in call argument.

---------------------------------
Prototypes
1) Every function has a prototype Object.
2) there is only single Prototype object.
3) When new object is created by that function, a implicit property of __proto__ is set with the prototype object
4) when property lookup is done on object, it first chk in object, if not found it does make a lookup in prototype object as well.

Prototypes are used as inheritance in JS.
Prototype lookup is at runtime so new function/property added to prototype will be available to existing functions as well!!

eg
function foo(){}
foo.prototype => PROTOTYPE // points to prototype
var a = new foo();
a.__proto__ => PROTOTYPE // Also points to prototype
foo.prototype.constructor => function foo() // constructor property on prototype object points to function of which its the prototype is

--------------------------------
Global Object function
ways to create object
1) var obj1 = {};
2) var obj2 = new Object();

Both are exactly same
obj1.__proto__ === obj2.__proto__ === Object.prototype; => returns true

The automatically created prototype object is actually created using new Object();
eg
Function Employee(){}
Var emp = new Employee();

so emp.__proto__ === Employee.prototype
and emp.__proto__.__proto__ === Object.prototype
refer Js.doc as well











