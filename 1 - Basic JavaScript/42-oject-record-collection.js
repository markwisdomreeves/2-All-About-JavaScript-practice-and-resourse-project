


// Basic JavaScript: Record Collection
// You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

// You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

// Your function must always return the entire object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.
// Note: A copy of the collection object is used for the tests.

// Setup: One
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(object, id, prop, value) {
    if (value === '') {
      delete object[id][prop];
    } else if (prop === "tracks") {
      object[id][prop] = object[id][prop] || [];
      object[id][prop].push(value);
    } else {
      object[id][prop] = value;
    }
  
    return object;
  }
  
  var res1 = updateRecords(collection, 5439, 'artist', 'ABBA');
  
  console.log(res1)


  // Code Explanation
  // First checks if value is a blank string. If so, then the key (prop) is removed from the object.
  // If that first check doesn’t pass, it next checks if prop is equal to tracks. The tracks array is initialized if it does not exist, and then value is pushed into the tracks array.
  // If both these checks fail (meaning value is not an empty string and prop is not tracks), then either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
  // Example Run
  
  // updateRecords(5439, "artist", "ABBA"); runs.
  // value is not a blank string, so the first condition of the else if statement fails.
  // prop is equal to “artist”, not “tracks”, so the second condition of the else if statement fails.
  // in the ‘else’ clause, artist: "ABBA" is added to the 5439 id.


//  Setup: Two
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

if(prop == "tracks" && !collection[id].hasOwnProperty("tracks")){
    collection[id].tracks = []; 
    collection[id].tracks.push(value);
}
if(prop !== "tracks" && value !== ""){ 
    collection[id][prop] = value; 
}
if(prop == "tracks" && value !== ""){
    collection[id].tracks.push(value);
}
if(value === ""){
    delete collection[id][prop];
}


// Setup: Three
var collection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };

function updateRecords(id, prop, value) {
  
    if(prop !== 'tracks' && value !== "") {
      collection[id][prop] = value;
    }
    
    if(prop === 'tracks' && collection[id][prop] === undefined) {
      collection[id][prop] = [];
    }
    
    if(prop === 'tracks') {
      let track = collection[id][prop];
      track.push(value)
    }
    
    if(value === "") {
      delete collection[id][prop]
    }
    
    console.log(collection)
    return collection;
  }
  
  // Alter values below to test your code
  updateRecords(5439, "artist", "ABBA");
  updateRecords(5439, "tracks", "Take a Chance on Me");
  updateRecords(2468, "tracks", "Free");

  
  
  