(function () {
    var app = angular.module("refactoredContactApp");
    app.controller("ContactCtlr", ContactCtlr);

    function ContactCtlr(AppDataSvc) {
        var self = this;
        this.contacts = [];
        this.editMode = false;

        AppDataSvc.getContacts()//gets promise
        .then(function(data){
            console.log("Http returned!!");
            self.contacts = data;
            self.selectedContact = self.contacts[0];            
        });

        this.selectedContact = this.contacts[0];

        this.selectContact = function (index) {
            this.selectedContact = this.contacts[index];
            this.successMessage = null;//undefined will also do
            self.errorMessage = null;
        }

        this.toggleEditMode = function(){
            this.editMode = !this.editMode;
        }

        this.updateUser = function(){
            this.toggleEditMode();
            console.log("updating userData");
            var userData = this.selectedContact;
            AppDataSvc.updateUser(userData)
            .then(function(){// This is F1 => success Function
                self.successMessage = "User Updated successfully!!";
            },
            function(){// Error Handler
                self.errorMessage = "there was error in persisting info.Please try Again";
            }
        );
        }

    }
})();