const people = [
    { name: "Rashid", age: 22, budget: 48000 },
    { name: "Shuhrat", age: 20, budget: 52000 },
    { name: "Abror", age: 19, budget: 38000 },
    { name: "Sorbon", age: 23, budget: 25000 },
    { name: "Shahzod", age: 17, budget: 61000 },
    { name: "Foruz", age: 18, budget: 31000 },
  ];
const newPeople=people.map(persone=>{
    return `${persone.age*3}`
})
console.log(newPeople);
