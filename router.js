mainModule
	.config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {
	$routeProvider.otherwise( { redirectTo:'/' });
	 $routeProvider.when('/', { templateUrl:'/templates/home.html'})
        .when('/menu', {
            templateUrl:'/productSnippet.html'
        })