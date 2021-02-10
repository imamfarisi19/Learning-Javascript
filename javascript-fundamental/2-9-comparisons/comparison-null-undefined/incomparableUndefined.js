alert(undefined > 0); // false (1)
alert(undefined < 0); // false (2)
alert(undefined == 0); // false (3)

/* We get these result because:
 * * Comparisons (1) and (2) return false bacause undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
 * * The equality check (3) returns false because undefined only equals null, undefined and no other value.
 * */
 
