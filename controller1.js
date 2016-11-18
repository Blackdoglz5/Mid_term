mainModule
	.controller("beerController", function($http) {

		var beer = this;
		beer.search = [];


	console.log("Finding Beer!");

	// beer.searchStyle = function () {
	// 	$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&glasswareID=5&styleId="+ beer.style).then(
	// 		function(res) {
	// 			beer.style = res.data;
	// 			beer.name = res.data;
	// 			console.log(res.data);
	// 			},
	// 			function(err) {
	// 			console.log(err)
	// 		});
	// },
	beer.searchGold = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=36&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	},
	beer.searchPale = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=25&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	},
	beer.searchIPA = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=30&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	},
	beer.searchPorter = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=19&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	},
	beer.searchStout = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=42&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	},
	beer.searchFruit = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=119&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	},
	beer.searchSour = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=39&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	},
	beer.searchBarrel = function () {
		$http.get("http://api.brewerydb.com/v2/beers/?key=dada1aa94d3bfdbbd1c2e6efd9a6f2c7&format=json&styleId=132&withBreweries=y").then(
			function(res) {
				beer.style = res.data;

				console.log(res.data);
				},
				function(err) {
				console.log(err)
			});
	}
	});
	//  style id #s = golden ale = 36
	// 				pale ale = 25
	// 				IPA = 30
	// 				Porter = 19
	// 				Stout = 42
	// 				Fruit = 119
	// 				Sour/Wild= 39
	// 				Barrel Aged = 132