var auxModule = angular.module('aux', ['ui.router']);


var InfoController = {

    templateUrl: 'infos.html',
    bindings: {person: '<'},

    controller: function () {

        console.log(this);

        this.var = 'jjjjj';
        this.user = {name: 'mourad'};


    }
};

auxModule.component("infosComponent", InfoController);

auxModule.config(function ($stateProvider) {

    console.log("aux config");

    $stateProvider.state({
        name: 'infos',
        url: "/infos",
        component: 'infosComponent',
        resolve: {
            person: function ($q) {
                var deferred = $q.defer();
                deferred.resolve({test: "tededeeeeest"});
                return deferred.promise;

            }
        }
    });


}).run(function (AuxService) {
    console.log("run run");

    AuxService.test();

});

auxModule.factory('AuxService', function (Number) {
    return {
        test: function () {
            console.log('hello !!' + Number.title);
        }
    }
});

auxModule.factory('AuthService', function (Number, $q) {
    return {
        isAuthenticated: function () {
            console.log("auth check ...");
            var deferred = $q.defer();
            deferred.resolve(true);
            return deferred.promise;
        }
    }
});

auxModule.provider('Number', function () {
    return {
        $get: function () {
            return {
                title: "StarCraft"
            };
        }
    };
});






