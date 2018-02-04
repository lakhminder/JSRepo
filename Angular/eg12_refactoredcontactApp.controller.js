(function () {
    var app = angular.module("refactoredContactApp");
    app.controller("ContactCtlr", ContactCtlr);

    function ContactCtlr(AppDataSvc) {
        this.contacts = AppDataSvc.contacts;

        this.selectedContact = this.contacts[0];

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
        }

    }
})();