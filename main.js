angular.module('application', ['aux', 'ngRoute'])
    .config(function ($routeProvider, NumberProvider) {
        console.log("application config")

        var originalWhen = $routeProvider.when;
        $routeProvider.when = function (path, route) {
            route.resolve || (route.resolve = {});
            angular.extend(route.resolve, {
                CurrentUser: function ($location) {

                    //$location.path('/infos');
                    return 'mourad';
                }
            });
            return originalWhen.call($routeProvider, path, route);
        };

        $routeProvider
            .when("/", {
                templateUrl: "main.html",
                controller: "mainController",
                resolve: {
                    data: function ($q, $timeout) {

                        var deferred = $q.defer();
                        var promise = deferred.promise;

                        $timeout(function () {
                            deferred.resolve("mfx");
                        }, 100);

                        deferred.resolve("mfx");
                        return promise;
                    }
                }
            })
            .when("/infos", {
                templateUrl: "infos.html"
            });

    })
    .run(function (AuxService) {
        console.log("application run")
        AuxService.test();
    })


angular.module('application').controller('mainController', function ($scope, data, CurrentUser) {

    console.log(data);

    $scope.data = data;
    $scope.user = CurrentUser;

});


