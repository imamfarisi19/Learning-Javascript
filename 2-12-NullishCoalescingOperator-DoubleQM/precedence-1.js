// without parentheses
let area = height ?? 100 * width ?? 50;

// ... works the same as this (probably not what we want);
let area = height ?? (100 * width) ?? 50;

