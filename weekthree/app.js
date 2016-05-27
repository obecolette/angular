(function() {

	// angular setter
	var app = angular.module('store', []);

	// Store Controller
	app.controller('StoreController', function($scope) {
		console.log('scope: ', $scope);
		// assign to the view
		this.products = gems;
		this.date = new Date();
	});

	// Panel / Tabs Controller
	app.controller('PanelController', function() {
		console.log('panel controller');
		this.tab = 1;

		this.selectTab = function(tabIndex) {
			this.tab = tabIndex;
		};

		this.isSelected = function(tabIndex) {
			return tabIndex === this.tab;
		};
	});

	app.controller('ReviewFormController', function() {
		this.formReview = {
			stars: '5'
		};

		this.addReview = function(product) {
			product.reviews.push(this.formReview);
		}
	});

	// model data
	var gems = [{
		name: 'Diamond',
		price: 8000,
		description: 'This is the bling!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				thumb: 'images/img1.jpg'
			},
			{
				thumb: 'images/img2.jpg'
			},
			{
				thumb: 'images/img3.jpg'
			}
		],
		reviews: [
			{
				stars: 1,
				body: "blows",
				author: "rebecca@rr.com"
			},
			{
				stars: 5,
				body: "best",
				author: "rebecca@rr.com"
			}
		]
	},
	{
		name: 'Ruby',
		price: 2000,
		description: 'We are red!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				thumb: 'images/img1.jpg'
			},
			{
				thumb: 'images/img2.jpg'
			},
			{
				thumb: 'images/img3.jpg'
			}
		],
		reviews: [
			{
				stars: 1,
				body: "blows",
				author: "rebecca@rr.com"
			},
			{
				stars: 5,
				body: "best",
				author: "rebecca@rr.com"
			}
		]
	},
	{
		name: 'Sapphire',
		price: 4000,
		description: 'We are blue!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				thumb: 'images/img1.jpg'
			},
			{
				thumb: 'images/img2.jpg'
			},
			{
				thumb: 'images/img3.jpg'
			}
		],
		reviews: [
			{
				stars: 1,
				body: "blows",
				author: "rebecca@rr.com"
			},
			{
				stars: 5,
				body: "best",
				author: "rebecca@rr.com"
			}
		]
	},
	{
		name: 'Garnet',
		price: 6000,
		description: 'We are golden!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				thumb: 'images/img1.jpg'
			},
			{
				thumb: 'images/img2.jpg'
			},
			{
				thumb: 'images/img3.jpg'
			}
		],
		reviews: [
			{
				stars: 1,
				body: "blows",
				author: "rebecca@rr.com"
			},
			{
				stars: 5,
				body: "best",
				author: "rebecca@rr.com"
			}
		]
	},
	{
		name: 'Emerald',
		price: 10000,
		description: 'We are green!',
		canPurchase: true,
		soldOut: false,
		images: [
			{
				thumb: 'images/img1.jpg'
			},
			{
				thumb: 'images/img2.jpg'
			},
			{
				thumb: 'images/img3.jpg'
			}
		],
		reviews: [
			{
				stars: 1,
				body: "blows",
				author: "rebecca@rr.com"
			},
			{
				stars: 5,
				body: "best",
				author: "rebecca@rr.com"
			}
		]
	}];

})();