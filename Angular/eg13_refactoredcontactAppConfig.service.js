(function () {
    var app = angular.module("refactoredContactApp");
    app.service("AppConfigSvc", PrepareApp);

    function PrepareApp(AppNameSvc) {// to be called in constructor mode
        //var this = {}; // added by JS runtime
        this.name = AppNameSvc;
        this.varsion = 1;
        this.builtDate = new Date().toDateString();
        //return this; //added by JS runtime
    }
})();