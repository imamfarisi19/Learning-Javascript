// A funny consequence
// it is possible that at the same time:
// * Two values are equal.
// * One of them is true as a boolean and the other one is false as a boolean.
// for example :

let a = 0;
alert(Boolean(a)); // false

let b = "0";
alert(Boolean(b)); // true

alert(a == b); //true!

