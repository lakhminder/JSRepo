var myModule = angular.module("otherModuleApp", []);

myModule.controller("OtherCtlr", OtherCtlr);

function OtherCtlr(){
    this.printText = "Called from Other Module";
    console.log("Called from Other Module");
}