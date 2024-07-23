let layout = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>";
let result = [];

let nums = layout.match(/\d+/g);
let results = nums ? nums.map(n => parseInt(n, 10)) : []; // преобразовываем массив в числа


function resultNums(results){
for (let y = 0; y < results.length; y++){
     if(results[y]%2 == 0){
          let number = results[y]*results[y];
          result.push(number);
     }else {
          result.push(results[y]);
     }
}
return result;
}
console.log(resultNums(results));


// вывод между первым булевым и последним
let values = [false,"Строка","Числа",true, "Объект","Не число", "Не объект"];

const firstIndex = values.findIndex( e => e === false || e === true);
const lastIndex_1 = values.lastIndexOf(false);
const lastIndex_2 = values.lastIndexOf(true);
function last(){
    let lastIndex = 0;
    if (lastIndex_1 > lastIndex_2){
    lastIndex = lastIndex_1;
}else {
    lastIndex = lastIndex_2;
}
return lastIndex;
}

let lastResult = last()+1;

let result = [];
result = values.slice(firstIndex, lastResult);
console.log(result);

// В программе задана переменная users, которая хранит в себе массив. Элементы данного массива являются объектами. Определите индекс элемента, значение свойства role которого содержит больше одного слова. Результат выведите в консоль разработчика.

let users = [
     {login: "user1", role: "Admin"},
     {login: "user2", role: "State user"},
     {login: "user3", role: "Moderator"}
 ];
 
 let result = users.find(element => element.role.indexOf(" ") != -1);
 console.log(users.indexOf(result));

 // В программе задана переменная array, которая хранит в себе двумерный массив. Его элементы — массивы, состоящие из чисел. Отсортируйте массив по количеству элементов вложенного массива по возрастанию. Результат выведите в консоль.
 const array =  [[2,3,4],[1],[]];
const sortedArr1 = array.sort((a,b) => b-a);
const sortedArr = array.sort((arr1, arr2) => arr1.length - arr2.length);
console.log(sortedArr);

// В программе задана переменная words, которая хранит в себе массив строковых значений. Напишите скрипт, который считает количество палиндромов и непалиндромов в массиве words. Результат должен представлять собой массив из двух элементов, где первое значение — количество палиндромов, а второе — непалиндромов.
let words = ["Заказ", "Такси", "од","А ро упала на лапу Азора"];

let result = [0,0];
function palindrome(words){ 
words = String(words).toLowerCase().replace(/\s/g,'');
return words === words.split('').reverse().join('');
}

function res(words){
    for(let index = 0; index < words.length; index++){
        
        if(palindrome(words[index])){
            result[0] +=1;
        }else{
            result[1] +=1;
            
        }
        
    }
    return result;   
}

console.log(res(words));

// В программе задана переменная dates, которая хранит в себе строковое значение. В данной строке хранятся значения дат в формате ДД:ММ:ГГГГ, которые разделены пробелами. На основе значения переменной dates сформируйте новый массив, каждый элемент которого содержит одну дату переменной dates, преобразованную в формат ДД/ММ/ГГГГ. Выведите содержимое сформированного массива в консоль.
let dates = "23.04.1996 07.10.2002 15.08.1945";
function res(dates){
let result = dates.replace(/\./g, '/').split(' ').join(',').split(',');

return result;
}


console.log(res(dates));


// В программе задана переменная partNumbers, которая хранит в себе массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль.
let partNumbers = ["ER1234COM", "FIV987451RU","GE123JO","P4321NO"];
let re = /\d{2}\D{2}$/gi;
let result = [];
function res(partNumbers){
    for (let index = 0; index < partNumbers.length; index++){
        if(partNumbers[index].match(re)){
            result.push(partNumbers[index]);
        }
    }
return result;
}

console.log(res(partNumbers));

// В программе задана переменная numbers, которая хранит массив из чисел. Определите, какое максимальное количество элементов массива numbers (в порядке, который реализован в массиве) можно сложить, чтобы их итоговая сумма не превышала 50. Результат выведите в консоль.

let numbers = [23,4,2,4,3,11,3,12,3,23];
let num = 0;
let result = 0;
for (index = 0; index < numbers.length; index++){
    if(num + numbers[index] <= 50){
        num += numbers[index];
        result += 1; 
    } else {
        break;
    }
}
console.log(result);


// В программе задана переменная values, которая хранит массив из строк. Определите математическую сумму всех элементов, которые при преобразовании в число не вернут значение NaN. Результат выведите в консоль.let values = ["100", "30", "Не число", "20", "Тоже не число"];
let values = ["100", "30", "Не число", "20", "Тоже не число"];
let result = 0;

for (let index = 0; index < values.length; index++){
    if(Number(values[index])){
        result += Number(values[index]);
    }   
}

console.log(result);

//В программе заданы два массива array_1 и array_2, элементы которого являются числами. Значения внутри одного массива уникальные. Реализуйте функцию intersection, которая принимает в качестве аргументов два массива и возвращает новый массив. Он должен содержать значения, которые встречаются в обоих массивах-аргументах, и быть отсортирован по убыванию.

let array_1 = [2, 4, 7, 8, 1];

let array_2 = [2, 5, 11, 6, 1];
let result = [];
function intersection(array_1, array_2){
    for(let index = 0; index < array_1.length; index++){
        for (let z = 0; z <array_2.length;z++){
            if (array_1[index] === array_2[z]){
                result.push(array_1[index]);
            }
        }
    }
    return result;
    }
console.log(intersection(array_1, array_2));



// В программе объявлены объекты pet_1 и pet_2. Напишите функцию getName() и присвойте ее объектам pet_1 и pet_2 в качестве метода. При вызове метода getName() он должен вернуть имя и возраст питомца через пробел. Решить задачу необходимо с использованием this
pet_1 = { name: "Шарик", age: 10 };
pet_2 = { name: "Жучка", age: 5 };

function getName() {
  return [this.name, this.age].join(' ');
}

pet_1.getName = getName;
pet_2.getName = getName;

pet_1.getName(); // Шарик 10
pet_2.getName(); // Жучка 5

console.log(pet_1.getName());

// В программе объявлен объект input и функция sayHi(), которая выводит в консоль сообщение из примера. Используя метод присвоения контекста, свяжите контекст объекта input с функцией sayHi() и вызовите функцию sayHi(
    const input = {
        id: 1,
        value: "Добрый вечер",
        firstName: "Григорий",
        lastName: "Стрельников" 
      }
      
      function sayHi() {
        console.log(`${this.value}, ${this.firstName} ${this.lastName}!`)
      }
      
      
      sayHi.call(input);


      // В программе объявлен объект pet со свойствами name и breed и функция getDescription(), которая выводит эту информацию, используя this. Привяжите к функции getDescription() контекст pet и присвойте получившуюся функцию переменной getDescription.

      const pet = { 
        name: "Диксон", 
        breed: "Немецкая овчарка" 
      }
      
      function getDescription() { 
        console.log("Имя питомца: " + this.name + ", Порода: " + this.breed) 
      }
      
      
      
      getDescription = getDescription.call(pet);

      // В программе объявлен объект props, у которого задан набор свойств. Объявите функцию getValue(), которая выводит в консоль строку со всеми свойствами и их значениями (без методов). Привяжите объект props в качестве контекста функции getValue() и присвойте получившуюся функцию переменной getValue.



      let props= { 
        name: "Анатолий", 
        age: 29,
        sayHi: ()=>"привет"
      }
      
      function getValue(obj) {
        return JSON.stringify(obj,null," ");
      }
      const pattern = /\"/g;
      const pattern2 = /\n/g;
      const pattern3 = /{/;
      const pattern4 = /}/;
      const result = getValue(props).replace(pattern2,"").replace(pattern,"").replace(/\s/, "").replace(pattern3, "(").replace(pattern4, ")");
      console.log('Значения свойств объекта props ' + result);



      
// В программе объявлены переменные firstName и lastName. Создайте объект user со свойствами firstName и lastName и добавьте getter и setter fullName. Сеттер fullName должен принимать имя и фамилию пользователя через пробел, разделять и присваивать свойствам firstName и lastName соответственно. Геттер fullName должен формировать строку, состоящую из имени и фамилии через пробел.

let user = {
    firstName: firstName,
    lastName: lastName,
    get fullName(){
    return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
    [this.firstName, this.lastName] = value.split(" ")
    }
    }


    // В программе задан объект employees, который содержит ряд свойств и методов. Сформируйте строку с именами всех свойств через запятую и пробел (, ) и выведите в консоль. Имена методов добавляться не должны.

    let employees = {
        firstName: "Петя",
        lastName: "Иванов",
        ratePerDay: 2500,
        workingDays: 5,
        getSalary() { console.log(employees.ratePerDay * employees.workingDays )} 
      }
      let result = "";
      for (k in employees){
        if (typeof employees[k] != 'function'){
          result += `${k}, `;
        }
      }
      
      console.log(result.slice(0,-2));