function sayHello(name){
	console.log("Hello" + name);
}

function overloading is not there in JS
extra parameters are ignored and the under supplied are filled with undefined

------------
function expression
var f = function foo(){
	console.log("Hey");
};  --assigning function to variable ... since its an expression ; is needed

f(); -- invoking function

var f2 = function (){
	console.log("Hey");
}; 

----------------------
Function as arguments

var f = function(){
	console.log("Hello");
};

var executor = function(fn){
	fn();
};

executor(f);
----------------------
Functions can be assigned as object properties as well... use 'this' keyword

var person = {
"firstName" : "Lucky",
"lastName" : "Singh",
"getFullName" : function(){
		return this.firstName + " " + this.lastName;
	}
};
-----------------------
There are two default arguments to every function call: 'arguments' and 'this'.	
Default function 'arguments' --provides all args passed by a callle of function available to function

var add = function(){
	var i,sum = 0;
	for(i = 0; i < arguments.length;i++){
		sum += arguments[i];
	}
	return sum;
};

console.log(add(1,2,3,4));

'arguments' is a object which is used as an array above
-----------------
Functions are basically objects in JS
-------------------------------------------Inbuilt Objects---------------------------------------	
-----------------------------------------------------------------------Arrays-------------------
Since Arrays are built in Object , below are some built-in functions of Array objects
myArr.push(100); => insert at last 
myArr.pop();=> pops the last element
myArr.shift();=> takes first element
myArr.unshift(10); => insert at first position	

Array's forEach method (inbuilt method which takes a function as argument)
JS predefined function with 3 params
myArr.forEach(function(item, index, array){
	console.log(item, index);
});
----------------
usage of forEach

var myArr = [10,20,"Hello", {}];

var myfun = function(item){
	console.log(item);
};

myArr.forEach(myfun);-- passing/using only one param

----------------------------------
refer for JS inbuilt Object's like Math,Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

----------------------------
Functions are also used to define scope of a variables in JS
var declared inside function can't be accessed outside function though it overrides the global one for function itself
Simply putting blocks{} like if doesnot create scopes in JS
--------------------------
IIFE => Immediately invoke function expression
it is used to not form global functions and pollute global namespace
eg:
function myFun(){
	var a = 10;
	var b = 10;
	console.log(a + b);
}
myFun();

IIFE converted eg:
(function (){
	var a = 10;
	var b = 10;
	console.log(a + b);
})();--- anonymous function called as soon as its created
----------------------------------
window is the global object (in case of browser)
any global variable is a property in global object

-----------------------
JS is a 2 step process
1) JS is compiled 
2) JS is interpreted/executed
Always use var to declare variables else it will get created in global space

eg:
var a = 10;

function myFun(){
	var b =a;
	console.log(b);
	c = a; // since its a write operation so JS(executor step/interpretor) will create the variable in global space instead of myFun space
	console.log(d);// since its a read operation,Js(Executor step/interpretor) will throw error
}

myFun();

-----------------------------------
eg :
console.log(a); //it will give undefined as compilation step occurs before Interpretor
var a =10;//compiler creates variable a in global space// Executor will assign(write operation) 10 to a 

-------------------------------------
Hoisting -- it is the variable/function hoisting that occurs before execution
i.e at compile time variables/function always gets register in scope even if they are declared at last

eg
a=10;
console.log(b);
c++;

var a,b,c;// this runs fine as variables will be hoisted as if it was declared at first line and program executes
-----------------------

Use strict mode to coverup some JS goofups
eg:

"use strict";
var myName = "abc";


myname = xyz;//would have been fine in normal mode as it will create new variable in global scope and writes to it but
// using strict mode disables that behaviour of JS and it throws error

strict mode can be used inside functions as well and applies only to function scope then.
For other changed behaviour refer MDN(Mozzila development network ) site
------------------
