// other comparisons (<, >, <=, >=)

// null/undefined are converted to numbers : null becomes 0, while undefined becomes NaN.

alert( null > 0); // (1) false
alert( null == 0); // (2) false
alert( null >= 0); // (3) true

// the reason null have 3 different output is that an equality check and comprasions work differently. 
// Comparisons convert null to a number, treating it as 0. that's why null >= 0 is true and null > 0 is false.
// on the other hand, the equality check == for undefined and null is defined such that, without any conversions, they equal each other and don't equal anything else. that's why null == 0 is false. 
