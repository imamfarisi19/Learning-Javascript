alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1); // 1 (1 is the first truthy value)
alert( null || 0 || 1); // 1 (the first truthy value)

alert( undefined || null || 0); // 0 (all falsy, returns the last value)

