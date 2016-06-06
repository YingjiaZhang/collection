'use strict';

function collect_all_even(collection) {
  	
	var even_arr = [];
	
	for( var i=0; i<collection.length; i++ ){
		if( collection[i]%2 == 0 ){
			even_arr.push(collection[i]);
		}
	}

	return even_arr;
}

module.exports = collect_all_even;
