function() {
    var boxarts = [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
            { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
        ];
    
    // You should return an array containing only the largest box art. Remember that reduce always
    // returns an array with one item.
    return boxarts.
	  reduce(function(a, b) {
		var largest = a.width * a.height, areaB = b.width * b.height;
		if (areaB > largest)
		  largest = areaB;
		  return b;
		return a;
	  }).map(function(item) {
		return item.url;
	  });
	  // Complete this expression
}