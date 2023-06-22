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
