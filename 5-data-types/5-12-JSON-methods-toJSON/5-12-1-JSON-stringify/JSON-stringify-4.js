let room = { 
  number: 23 
}; 

let meetup = {
  title: "Conference",
  participants: ["john", "ann"]
};

meetup.place = room; // meetup references room 
room.occupiedBy = meetup; // room references meetup 

JSON.stringify(meetup); // Error: Converting circular structure to JSON

