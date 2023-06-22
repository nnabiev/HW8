"# HW8" 
# Что такое Array в JS.

---
## **Array - массив** это хранение значение переменных.
## С помощью некоторых массивов можно изменить главный массив.Например:
## **pop()** это для удаление из конца,**push()** для добавление из конца,**shift()** это удаление с начало,**unshift()** это для добавление с начало.

---

---

## Метод **toString()** Метод возвращает строку представляющую указанный массив и его элементы. Строка, представляющая элементы массива.
```js
let array = [1,2,3,4,"hi"]
console.log(array.toString());//1,2,3,4,hi
```
---
---
## **indexOf()** это метод который показывает index элемента.

``` js
let array = [1,2,3,4,"hi"]
console.log(array.indexOf(3));//2
```
---
---
## Mетод **includes()** позволяет определить, содержит ли массив искомый элемент. 
```js
let array = [1,2,3,4,"hi"]
console.log(array.includes("hi"));
```
---
---
## Mетод **slice ()** позволяет возвратить новый массив, который содержит копии элементов, вырезанных из исходного массива.
```js
let array = [1,2,3,4,"hi"]
console.log(array.slice(1,3));//[1,2]
```
---

---
## Mетод **concat ()** используется для объединения двух, или более массивов 
```js
let array = [1,2,3,4,"hi"]
console.log("hi".concat("3"));
```
---
---
## Mетод **splice()** позволяет изменить содержимое массива за счёт удаления существующих элементов
```js
let array = [1,2,3,4,"hi"]
console.log(array.splice(1,3));
```
---

---
## Метод **map()** создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
```js
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
```
---
---

## Метод **forEach()** выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива.
```js
const people = [
    { name: "Rashid", age: 22, budget: 48000 },
    { name: "Shuhrat", age: 20, budget: 52000 },
    { name: "Abror", age: 19, budget: 38000 },
    { name: "Sorbon", age: 23, budget: 25000 },
    { name: "Shahzod", age: 17, budget: 61000 },
    { name: "Foruz", age: 18, budget: 31000 },
  ];
 people.forEach(persone=> console.log(persone))
```
---
---
## Метод **find()** возвращает первый элемент в предоставленном массиве, который удовлетворяет предоставленной функции тестирования. 
```js
const people = [
    { name: "Rashid", age: 22, budget: 48000 },
    { name: "Shuhrat", age: 20, budget: 52000 },
    { name: "Abror", age: 19, budget: 38000 },
    { name: "Sorbon", age: 23, budget: 25000 },
    { name: "Shahzod", age: 17, budget: 61000 },
    { name: "Foruz", age: 18, budget: 31000 },
  ];
 const newPeople = people.find(person=> person.name === "Shuhrat")
 console.log(newPeople);
 ```
 ---
---
## Метод **reduce()** выполняет предоставленную пользователем функцию обратного вызова "reducer" для каждого элемента массива по порядку
```js
const people = [
    { name: "Rashid", age: 22, budget: 48000 },
    { name: "Shuhrat", age: 20, budget: 52000 },
    { name: "Abror", age: 19, budget: 38000 },
    { name: "Sorbon", age: 23, budget: 25000 },
    { name: "Shahzod", age: 17, budget: 61000 },
    { name: "Foruz", age: 18, budget: 31000 },
  ];
 const amount = people.reduce((total,person)=>{
return total + person.budget
 },0)
 console.log(amount);
 ```
 ---
 ---
 ## Метод **filter()** создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
 ```js
 const people = [
    { name: "Rashid", age: 22, budget: 48000 },
    { name: "Shuhrat", age: 20, budget: 52000 },
    { name: "Abror", age: 19, budget: 38000 },
    { name: "Sorbon", age: 23, budget: 25000 },
    { name: "Shahzod", age: 17, budget: 61000 },
    { name: "Foruz", age: 18, budget: 31000 },
  ];
 const abc = people.filter(person=>{
    if (person.age>=18){
        return true
    }
 })
 console.log(abc);
 ```
 ---