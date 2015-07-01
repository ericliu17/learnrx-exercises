function() {
    var lists = [
            {
                "id": 5434364,
                "name": "New Releases"
            },
            {
                "id": 65456475,
                name: "Thrillers"
            }
        ],
        videos = [
            {
                "listId": 5434364,
                "id": 65432445,
                "title": "The Chamber"
            },
            {
                "listId": 5434364,            
                "id": 675465,
                "title": "Fracture"
            },
            {
                "listId": 65456475,            
                "id": 70111470,
                "title": "Die Hard"
            },
            {
                "listId": 65456475,                        
                "id": 654356453,
                "title": "Bad Boys"
            }
        ];
    
  return lists.map(function(element) {
	return {
        name: element.name, 
        videos: videos.filter(function(video) {
            return element.id === video.listId;
	    }).map(function(vid) {
	        return {id: vid.id, title: vid.title};
	    })
    };
  });
	  // complete this expression
}