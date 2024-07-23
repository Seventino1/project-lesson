1)
Boolean
Number
String
Object
BigInt
Symbol - это уникальный, неизменяемый тип данных, который может быть использован как индификатор свойств объекта
undefined - незаданная переменная
null - нуль, переменная задана

2)
== - сравнение с приведением к одному типу данных( абсолютное)

=== - сравнение без приведения к одному типу данных (строгое)

3)
let a 
var a 
const a
a

5) 
Map - создает новый массив
Filter - фильтрация старого массива
reduce - прогон по каждому элементу(как for)
array.forEach(element => {- ничего не возвращает, его используют только для перебора
  
});

array.pop - удаляет в конце
array.push - добавляет в конец 
array.shift - добавляет в начало
array.unshift - удаляет в начале

6) область видимости
1 - блочная
2 - функционалная
3 - глобальная

7) Способы вызова функции
7.1 Декларативная
function newFunction(array){

}

7.2 Фкнциональное
const newFunction = function(array) => {

}

7.3 Стрелочная
const newFunction = (array) => {

}

7.4 анонимные функции 
7.5 самовызывающиеся 
(function(){
    alert('KuKu');
})();

7.6 анонимная функция

setTimeout( function(){
    alert('time to learn JS');
}, 5000);   

8. Классы

class Car {
    constructor(name,color){
        name.this = name;
        color.name = color;
    }
}


let car = class car2{
    constructor(name, color){
        name.this = name;
        color.this = color;
    }
}

9. Создание объектов

    используется оператор new

let car1 = new Car("Audi", "black")

10. Getter setter


