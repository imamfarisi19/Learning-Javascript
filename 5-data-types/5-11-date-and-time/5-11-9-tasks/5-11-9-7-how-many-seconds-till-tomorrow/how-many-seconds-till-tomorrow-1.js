function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes)
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday; 
} 

