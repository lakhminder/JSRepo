(function () {
    var app = angular.module("refactoredContactApp");
    app.controller("HeaderCtlr", HeaderCtlr);

    //Controllers
    function HeaderCtlr(AppConfigSvc) {//value service injected
        this.appTitle = AppConfigSvc.name;
    }
})();