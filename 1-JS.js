--variables doesn't have type with it
--use scratchpad of mozila for JS
var a=10;
var b=true;
var c="hello world";
console.log(a);
c = null;-- nullyfying object

var d;--value is undefined ... very important to distinct it with null 


console.log(typeof c);-- => currently c as null returns 'object' which is bug in JS, typeof operator returns variable type like number,string,boolean
--so typeof operator can't be used to compare/check null

----------------------------------
var a = 10;

var b = "10";

if(a == b){-- it"==" type convert number 10 to string 10 and returns true
	console.log("vaues are equal");
}

if(a === b){-- it"===" checks for type as well and returns false
	console.log("vaues are equal");
}

-------------------------------
values of all types have an associated boolean value i.e. you can use it in if statement
--for eg var a = "" and var a = 0 , a = null, a= undefined returns false => basically not null/empty values are treated as true even -10
------------------------------

-----Objects
objects are freeform in Js
objects have properties associated with it

var myObj = {}; -- an empty object
myObj.prop = "UserDefinedProperty"; -- added property with name prop

-- definning object literal
var myObj = {
prop:"First Property",
prop2:123
};

console.log(obj.prop); -- dot notation
console.log(obj["prop"]); -- bracket notation

bracket notation is used for dynamic values & some invalid/reserved word

var myObj = {
"prop":"First Property",
"prop2":123
1: "one"		-- can't be accessed using dot notation but can be using [] notation
};

var propName = "prop";
console.log(myObj[propName]); -- dynamic value
One drawback is that runtime engine may not be able to optimize [] notation





------------------------------------
Nested Objects

var myObj = {
"prop":"First Property",
"prop2":123
nestedObj:{
	nestedProp:"Nested Prop Value"
}
};
console.log(myObj[nestedObj][nestedProp]);
console.log(myObj.nestedObj.nestedProp);

-------------------------------
TO delete property
delete <object>.<prop>;
--------------------
Arrays
var myArr = ["1","2"];
myArr[2] = "3"; -- adding element in array

Interesting that Arrays are Objects underneath with property names as numeric indexes... also length = highest porperty(index) +1

-------------------------------
Wrapper Objects are created auto as when any operations is done on primitive like
VAr str = "String Object";
str.length; -- this will create String wrapper object just for this line of execution

