let meetup = {
  title: "Conference", 
  room: {
    number: 23, 
    participants: ["John", "ann"]
  }
};

alert( JSON.stringify(meetup) ); 
/* 
{ 
  "title": "Conference", 
  "room": {"number":23,"participants":["john","ann"]}, 
} 
*/ 

