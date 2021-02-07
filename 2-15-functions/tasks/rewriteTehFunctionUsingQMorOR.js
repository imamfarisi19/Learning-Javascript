function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

// Using a question mark operator '?'
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}

// Using OR '||' (the shortest variant) 
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

