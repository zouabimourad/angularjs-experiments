angular.module('application', ['aux', 'ui.router']).config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider.state({
            name : 'home',
            url: '/',
            templateUrl: "main.html",
            controller: "mainController",
            data : {

                roles : []
            },
            resolve: {
                data: function ($q, $timeout) {

                    var deferred = $q.defer();
                    var promise = deferred.promise;

                    $timeout(function() {
                        deferred.resolve("mfx");
                    }, 100);

                    return promise;
                }
            }
        }).state({
            name : 'unauth',
            url: '/unauth',
            templateUrl: "unauth.html",

        });

    }).run(function ($rootScope, $transitions, AuxService, AuthService) {

        console.log("application run")

        $transitions.onBefore({}, function(trans) {

            console.log("auth check start.")

            const stateService = trans.router.stateService;
            const data = trans.to().data;

            return AuthService.isAuthenticated().then( function (r) {
                console.log("auth check end.")

                if (data && data.roles)

                    return stateService.target('unauth');
                else return r;

            });

        });

        AuxService.test();

    });

angular.module('application').controller('mainController', function ($scope, data) {

    console.log(data);
    $scope.data = data;
    $scope.user = '';
    $scope.personx ={test : "ddddddd"};

});


