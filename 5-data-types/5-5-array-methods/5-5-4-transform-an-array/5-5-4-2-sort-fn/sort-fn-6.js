let countries = ['Österreich', 'Andorra', 'Vietnam']; 

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andora, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localCompare(b) ) ); // Andorra, Österreich, Vietnam (correct!)

