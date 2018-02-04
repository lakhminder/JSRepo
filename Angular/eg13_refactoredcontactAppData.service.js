(function () {
    var app = angular.module("refactoredContactApp");
    app.service("AppDataSvc", PrepareData);

    function PrepareData($http) {//inject $http service

        this.getContacts = function () {
            var promise1 = $http.get('http://localhost:3000/contacts');
            var promise2 = promise1.then(function (response) {
                console.log("rest invoked!!");
                return response.data;// way of getting http(rest) data, <response> is angular return type
            });
            return promise2;
        }        
    }
})();