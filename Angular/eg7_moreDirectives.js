angular.module("showNHideApp", [])
.controller("Ctlr", CtlrFunction);

function CtlrFunction(){
    this.objList = [
        {'name': "Boo", 'age': 10},
        {'name': "Second", 'age': 30},
        {'name': "Joe", 'age': 50},
        {'name': "Roo", 'age': 70}
    ];//Array of Objects
}