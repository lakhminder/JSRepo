//var debugTest = "not declared"; // used to debug purpose by having global var
(function () {
    var app = angular.module("refactoredContactApp");
    app.controller("ContactCtlr", ContactCtlr);

    function ContactCtlr(AppDataSvc) {
        var self = this;//VV IMP as asynchronous we need 'this' reference at later stage
        this.contacts = [];
        //this.contacts = AppDataSvc.contacts;
        AppDataSvc.getContacts()//gets promise
        .then(function(data){
            console.log("Http returned!!");
            self.contacts = data;//can't use 'this' as it has diff scope inside this very function: normal JS functionality
            self.selectedContact = self.contacts[0];
            //debugTest = data;
        });

        console.log("setting selected Contact");
        this.selectedContact = this.contacts[0];

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
        }

    }
})();