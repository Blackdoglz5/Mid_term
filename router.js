mainModule
	.config(Router);

Router.$inject = ['$routeProvider'];

function Router($routeProvider) {
	$routeProvider.otherwise( { redirectTo:'/' });

	 $routeProvider
	 	.when('/', { 
	 		templateUrl:'/home.html'})
        .when('/menu', {
            templateUrl:'/productSnippet.html'})
        .when('/about', {
        	templateUrl:'/about.html'})
        .when('/find', {
        	templateUrl: '/find.html'})
        .when('/beerDesc', {
        	templateUrl: '/beerDesc.html'})
    }