let room = { 
  number: 23 
}; 

let meetup = { 
  title: "Conference", 
  participants: [{name: "John"}, {name: "Alice"}], 
  place: room // meetup references room 
}; 

room.occupiedBy = meetup; // room references meetup 

alert( JSON.stringify(meetup, ['title', 'participants']));
// {"title": "conference", "participants":[{},{}]}

