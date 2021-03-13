function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    monther: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

