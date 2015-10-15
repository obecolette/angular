(function() {

	var app = angular.module('store', []); // setter

	app.controller('StoreController', function($scope, $http) {
		console.log('scope: ', $scope);

		this.books = gem;

	});

	// model data

	var gem = [{
		title: 'East of Eden',
		author: 'John Steinbeck ',
		bookCover: 'http://ecx.images-amazon.com/images/I/51gcQhUb-yL._SX325_BO1,204,203,200_.jpg',
		buyNow: 'http://www.amazon.com/East-Penguin-Twentieth-Century-Classics/dp/0140186395'
	},
	{
		title: 'One River',
		author: 'Wade Davis',
		bookCover: 'http://ecx.images-amazon.com/images/I/519zAuOCCmL._SX329_BO1,204,203,200_.jpg',
		buyNow: 'http://www.amazon.com/One-River-Wade-Davis/dp/0684834960'
	},
	{
		title: '1Q84',
		author: 'Haruki Murakami',
		bookCover: 'http://ecx.images-amazon.com/images/I/416Zq07EtoL._SX323_BO1,204,203,200_.jpg',
		buyNow: 'http://www.amazon.com/1Q84-Vintage-International-Haruki-Murakami/dp/0307476464'
	},
	{
		title: 'Sway: The Irresistible Pull of Irrational Behavior',
		author: 'Ori Brafman + Rom Brafman',
		bookCover: 'http://ecx.images-amazon.com/images/I/41aQIJ3mOqL._SX323_BO1,204,203,200_.jpg',
		buyNow: 'http://www.amazon.es/Sway-Irresistible-Pull-Irrational-Behavior/dp/0385530609'
	},
	{
		title: 'Just Kids',
		author: 'Patti Smith',
		bookCover: 'http://ecx.images-amazon.com/images/I/41oXT7KHouL._SX331_BO1,204,203,200_.jpg',
		buyNow: 'http://www.amazon.es/Just-Kids-Patti-Smith/dp/0060936223'
	}];

})();
