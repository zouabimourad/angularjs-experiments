angular.module('aux', ['ngRoute'])
    .config(function ($routeProvider) {
        console.log("aux config")

        $routeProvider
            .when("/infos", {
                templateUrl: "infos.html"
            });

    })
    .run(function (AuxService) {
        console.log("run run")
        AuxService.test();
    })


angular.module('aux')
    .factory('AuxService', function (Number) {
        return {
            test: function () {
                console.log('hello !!' + Number.title);
            }
        }
    });


angular.module('aux').provider('Number', function () {
    return {
        $get: function () {
            return {
                title: "StarCraft"
            };
        }
    };
});
