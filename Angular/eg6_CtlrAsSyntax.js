var module = angular.module("multiCtlrApp", []);
module.controller("OuterCtlr1", OuterCtlr1);
module.controller("OuterCtlr2", OuterCtlr2);
module.controller("InnerCtlr1", InnerCtlr1);
module.controller("InnerCtlr2", InnerCtlr2);
//no need to inject scope as angular make is as below(assume)
function OuterCtlr1() {
    // this = $scope;// Assume angular do this incase of cotroller as Syntax
    this.someText = "From Outer Ctlr1";
}

function OuterCtlr2() {
    this.someText = "From Outer Ctlr2";
}

function InnerCtlr1() {
    this.someText = "From Inner Ctlr1";
}

function InnerCtlr2() {
    //$scope.someText = "From Inner Ctlr";
}