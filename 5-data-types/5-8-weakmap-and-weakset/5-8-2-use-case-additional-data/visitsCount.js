let visitCountMap = new Map(); // map: user => visits count 

// increase the visits count 
function countUser(user) { 
  let count = visitsCountMap.get(user) || 0; 
  visitCountMap.set(user, count + 1); 
} 
