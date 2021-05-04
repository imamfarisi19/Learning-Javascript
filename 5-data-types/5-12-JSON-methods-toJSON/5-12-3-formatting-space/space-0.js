let user = {
  name: "John", 
  age: 25, 
  roles: {
    isAdmin: false, 
    isEditor: true
  }
};

alert( JSON.stringify(user, null, 2) );

/*
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/

/*  forJSON.stringify(user, null, 4) the result would be more indented: 
{
    "name": "John",
    "age": 25,
    "roles": {
        "isAdmin": false,
	"isEditor": true
    }
}
*/

