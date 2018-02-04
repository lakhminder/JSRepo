// otherModule is imported in this application as below
var myModule = angular.module("externalModuleApp", ["ngTagsInput"]);

myModule.controller("MyCtlr", CtlrFunction);

function CtlrFunction(){
    this.tags = [
        { text: 'Tag1' },
        { text: 'Tag2' },
        { text: 'Tag3' }
      ];
}