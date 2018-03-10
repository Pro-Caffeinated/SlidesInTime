var imageSearch = require('node-google-image-search');

var results = imageSearch('Michelangelo', callback, 0, 1);
console.log(results);

function callback(results) {
	console.log(results[0].link);
}
