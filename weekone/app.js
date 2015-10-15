(function() {

	var app = angular.module('store', []); // setter

	app.controller('StoreController', function($scope) {
		console.log('scope: ', $scope);

		this.products = gem;
	});

	// model data

	var gem = [{
		name: 'diamond',
		price: '8,000',
		description: 'This is the bling!',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'diamond',
		price: '8,000',
		description: 'This is the best!',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'diamond',
		price: '8,000',
		description: 'This is the jam!',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'diamond',
		price: '8,000',
		description: 'This is the lean!',
		canPurchase: true,
		soldOut: false
	},
	{
		name: 'diamond',
		price: '8,000',
		description: 'This is the mean!',
		canPurchase: true,
		soldOut: false
	}];

})();
// look up js closer, cloaking