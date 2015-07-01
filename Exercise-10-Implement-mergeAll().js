Array.prototype.mergeAll = function() {
    var results = [];
    this.forEach(function(subArray) {
        // ------------   INSERT CODE HERE!  ----------------------------
        // Add all the items in each subArray to the results array.
        // ------------   INSERT CODE HERE!  ----------------------------
	  subArray.forEach(function(element) {
		  results.push(element);
	  });
    });
    
    return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].mergeAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].mergeAll(); // throws an error because this is a one-dimensional array