Array.prototype.flatMap = function(projectionFunctionThatReturnsArray) {
    return this.
        map(function(item) {
            // ------------   INSERT CODE HERE!  ----------------------------
            // Apply the projection function to each item. The projection
            // function will return an new child array. This will create a
            // two-dimensional array.
            // ------------   INSERT CODE HERE!  ----------------------------
		  return projectionFunctionThatReturnsArray(item);
        }).
        // apply the mergeAll function to flatten the two-dimensional array
        mergeAll();
};

/*
    var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];
    // collect all the words for each number, in every language, in a single, flat list
    var allWords = [0,1,2].
        flatMap(function(index) {
            return spanishFrenchEnglishWords[index];
        });
        
    return JSON.stringify(allWords) === '["cero","rien","zero","uno","un","one","dos","deux","two"]';
*/