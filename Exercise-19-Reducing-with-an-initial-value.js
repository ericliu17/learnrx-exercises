function() {
    var videos = [
        {
            "id": 65432445,
            "title": "The Chamber"
        },
        {
            "id": 675465,
            "title": "Fracture"
        },
        {
            "id": 70111470,
            "title": "Die Hard"
        },
        {
            "id": 654356453,
            "title": "Bad Boys"
        }
    ];
    
    // Expecting this output...
    // [
    //     {
    //         "65432445": "The Chamber",
    //         "675465": "Fracture",
    //         "70111470": "Die Hard",
    //         "654356453": "Bad Boys"
    //     }
    // ]    
    return videos.
        reduce(function(accumulatedMap, video) {
        
            // Object.create() makes a fast copy of the accumulatedMap by
            // creating a new object and setting the accumulatedMap to be the
            // new object's prototype.
            // Initially the new object is empty and has no members of its own,
            // except a pointer to the object on which it was based. If an
            // attempt to find a member on the new object fails, the new object
            // silently attempts to find the member on its prototype. This
            // process continues recursively, with each object checking its
            // prototype until the member is found or we reach the first object
            // we created.
            // If we set a member value on the new object, it is stored
            // directly on that object, leaving the prototype unchanged.
            // Object.create() is perfect for functional programming because it
            // makes creating a new object with a different member value almost
            // as cheap as changing the member on the original object!
            
            var copyOfAccumulatedMap = Object.create(accumulatedMap);
            
            // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
            // ----- NEW MAP USING THE VIDEO ID AS THE KEY     ----
            copyOfAccumulatedMap[video.id] = video.title;
            return copyOfAccumulatedMap;
        },
        // Use an empty map as the initial value instead of the first item in
        // the list.
        {});
}