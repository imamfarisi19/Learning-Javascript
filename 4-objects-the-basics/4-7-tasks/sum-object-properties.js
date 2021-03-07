let salaries = {
  John: 100,
  Amm: 160,
  Pete: 130
};

let sum = 0;
for (let prop in salaries) {
  sum += salaries[prop];
}

alert(sum); // 390

