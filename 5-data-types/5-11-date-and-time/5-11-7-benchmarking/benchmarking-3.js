// added for "heating up" prior to the main loop 
bench(diffSubtract); 
bench(diffGetTime); 

// now benchmark
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

