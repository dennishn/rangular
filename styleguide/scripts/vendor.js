
/*================================================================
=>                  App = rangular
==================================================================*/
/*global angular*/

var app = angular.module('rangular', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
	'use strict';

	$routeProvider
		.when('/', {
			templateUrl: 'app/main/main.tpl.html',
            controller: 'MainCtrl'
		})
		.otherwise({redirectTo: '/'});

	// This may help Browser-sync function properly
	// $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
=>                  rangular App Run()
==================================================================*/

app.run(['$rootScope', function ($rootScope) {

	'use strict';

	console.log('Angular.js run() function...');
}]);




/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */


/*================================================================
=>                  Controller = Main
==================================================================*/
/*global app*/

app.controller('MainCtrl', function ($scope) {

    'use strict';

    console.log('Controller ===  MainCtrl');
});


/*-----  End of Controller = Main  ------*/



