// otherModule is imported in this application as below
// We can include multiple modules as dependency
var myModule = angular.module("multiModuleApp", ["otherModuleApp"]);

myModule.controller("MyCtlr", CtlrFunction);

function CtlrFunction(){
    this.printText = "Called from Main Module";
    console.log("Called from Main Module");
}