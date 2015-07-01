function() {
    var ratings = [2,3,1,4,5];
    
    // You should return an array containing only the largest rating. Remember that reduce always
    // returns an array with one item.
    return ratings.
	  reduce(function(a, b) {
		var largest = a;
		if (b > a)
		  largest = b;
		return largest;
	  });
	  // Complete this expression
}