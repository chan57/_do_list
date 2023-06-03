let value = Math.PI.toFixed(2)

value = Math.min(15, 11, 16, 12, 51, 12, 13, 51)

value = (Math.random() * 10).toFixed(2)

value = Math.floor(Math.random() *10 )

value = (0.6 + 0.7).toFixed()

value =  parseInt('100$')

//------------------------------------

let string = "some test string";

/* Получить первую и последнюю буквы строки

Сделать первую и последнюю буквы в верхнем регистре

Найти положение слова ‘string’ в строке

Найти положение второго пробела (“вручную” ничего не считать)

Получить строку с 5-го символа длиной 4 буквы

Получить строку с 5-го по 9-й символы

Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)


Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
*/

let fistValue = string.slice(0,1)
let lastValue = string.slice(string.length-1,string.length)

let value1 =  string[0]
let value2 = string[string.length-1]
let aa = value1.toLocaleUpperCase()
let bb = value2.toLocaleUpperCase()

let nameString = string.indexOf('string')
let space = string.indexOf(' ', 8)
let stringFive = string.slice(5,9)
let stringNew =  string.replace('string', '')

// let a = 20, b = 16
// let stringg = String(a + '' + b)

//--------------------------------------------------

const obj = { 
    product: "iphone",
 }

obj.price = 1000;
obj.currency = 'dollar'

obj.details = {};

obj.details.model = " ";

obj.details.color = " ";


let a1 = true + undefined

//------------------------------------


let c = -1;

c = c ===0 ? 1  : c < 0 ?  'less then zero' : c *= 10
// console.log(c)

//------------------------

/* На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова

будут в верхнем регистре. Использовать for или while. */
// let str = 'i am in the easycode'
let str2 = ''
let counter = 0

for(let i = 0; i < str.length;i++){
    counter++;
    
    if(str[i] == ' ') {
        counter = 0; 
    }

    if(i === 0 || counter === 1) str2 += str[i].toLocaleUpperCase()
    else str2 += str[i]
    
    
}

//“tseb eht ma i”

let stri = 'tseb eht ma i'
let newStr = ''
for(let i = 1; i <= stri.length;i++){
    newStr += stri[stri.length-i]
}


//!10
let number = 1
for(let i = 1; i <= 10;i++) {
    number *= i
}


// chetnie chisla

const arg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

for(a of arg){
    let b = a % 2 == 0 ? a : false
    //if(b) console.log(b)
    
}

// ----------------------

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29,
    }

    for(o in list){
        if(typeof list[o] === 'string') list[o]= list[o].toLocaleUpperCase() 
    }





    function guessTheNumber(num) {
        if(typeof Number(num) === 'number'){
           if(num > 0 && num <= 10){
             num = Number(num);
             let ran =  (Math.random()*10 ).toFixed()
             if(ran == num) return 'You win!';
             else return `You are lose, your number is ${num}, the random number is ${ran}`;

         } else {
            return new Error("Please provide number in range 0 - 10")
            }     
        } else {
                return new Error("Please provide a valid number")
            }
    }
    
    function doubleArray(arr) {
        let ar = [];
        
        
        return ar.concat(arr, arr)
    }
    
    //----------------------------------

/* Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, 
    а возвращает массив из оставшихся значений.

    changeCollection([1,2,3], [‘a’, ’b’, ‘c’])  // [ [2,3], [‘b’, ‘c’] ]

    Не забудьте про проверкку того что массив является массивом. Это можно сделать с помощью метода Array.isArray(arr);*/

    function changeCollection() {
        let newAr = []
        
            for(let i = 0; i < arguments.length; i++){
                if(Array.isArray(arguments[i])){
                    arguments[i].shift()
                    newAr.push(arguments[i]) 
                }
            }
            return newAr
        
    }

    //----
    const users = [
        {
          "_id": "5e36b779dc76fe3db02adc32",
          "balance": "$1,955.65",
          "picture": "http://placehold.it/32x32",
          "age": 33,
          "name": "Berg Zimmerman",
          "gender": "male"
        },
        {
          "_id": "5e36b779d117774176f90e0b",
          "balance": "$3,776.14",
          "picture": "http://placehold.it/32x32",
          "age": 37,
          "name": "Deann Winters",
          "gender": "female"
        },
        {
          "_id": "5e36b779daf6e455ec54cf45",
          "balance": "$3,424.84",
          "picture": "http://placehold.it/32x32",
          "age": 36,
          "name": "Kari Waters",
          "gender": "female"
        }
      ]
      


    function filterUsers(arr, key, value) {
        if(arr == null || key == null || value == null){
            return new Error('Error message')
        }
        else {
            let result = arr.find((item) => {
              
               return item[key] === value;
                
            })
              return result
        }
    }
    //console.log(filterUsers(users, "age", 36))

//------------------------------
    
    
    
// function sum() {
//     const params = Array.prototype.slice.call(arguments);
    
    
//     if (!params.length) return 0;
    
    
//     return params.reduce(function (prev, next) { return prev + next; });
//     }
    
    
    
   // 10
    // sum(); // 0

     const sum = (...r)=>{
        console.log(...r)
        const params = [...r]
        console.log(params.length)
        if(!params.lehgth) return 0;

        return params.reduce((prev, next)=> prev + next)

     }
     console.log(sum(1, 2, 3, 4));


     // ------

     const numerator = {

        value: 1,
        
        double:function() {
            this.value*=2
            return this
        },
        
        plusOne:function() {
            this.value+=1
            return this
        },
        
        minusOne:function() {
            this.value-=1
            return this
        },
        
        }

        numerator.double().plusOne().plusOne().minusOne();
  console.log(numerator.value)


  const shop = {
     value:10,
     price:100,
      getSum(){
        return this.value*this.price
      }};

      const secondShop = {
        value:2,
        price:500
      }

shop.getSum.call(secondShop)


let element = {

    height: 25,
    
    getHeight: function () {return this.height;}
    
    };
    
    let getElementHeight = element.getHeight.bind(element);
    console.log(getElementHeight())
    //-------------

    let sizes = {width: 5, height: 10},

getSquare = function () {return this.width * this.height};
    console.log(getSquare.call(sizes))


//------------------------------------------

    const sum1 = (...arg) => {
const params = Array.prototype.slice.call(arg);


if (!params.length) return 0;


return params.reduce((prev, next)=> prev + next);
}

//1
//const ar = [1,2,3,5,8,9,10].map((el)=>{
  //      return {digit:el, odd:el%2==0}
//}) ;

//2
//const ar = [12, 4, 50, 1, 0, 18, 40].some((el)=>el==0)

//3
//const ar = ['yes', 'hello', 'no', 'easycode', 'what'].every((el)=>el.length>3)

//-----------

const convertToObject = (num) =>{

  const obj = {

      value: num,

      isOdd: Boolean(num % 2)

  }

  return obj;

}

// function convertToObject(num) {

//   const obj = {

//       value: num,

//       isOdd: Boolean(num % 2)

//   }

//   return obj;

// }

//-------------

const ar = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},

{char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},

{char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

const creatWord = array => {
  
    const newAr = []
    for(let i = 0; i<array.length;i++){
        
       array.map((el)=> {if(el.index==i) newAr.push(el.char)})
       
    }
    return newAr.join('')
}

//----------------------------------------


//console.log([ [14, 45], [1], ['a', 'c', 'd'] ].sort((a,b)=> a.length-b.length))


// console.log([

//     {cpu: 'intel', info: {cores:2, сache: 3}},
    
//     {cpu: 'intel', info: {cores:4, сache: 4}},
    
//     {cpu: 'amd', info: {cores:1, сache: 1}},
    
//     {cpu: 'intel', info: {cores:3, сache: 2}},
    
//     {cpu: 'amd', info: {cores:4, сache: 2}}
    
//     ].sort((a,b)=>a.info.cores-b.info.cores))
    
console.log('----------------------')

let products = [

{title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},

{title: 'prod3', price: 15}, {title: 'prod4', price: 25},

{title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},

{title: 'prod7', price: 19}, {title: 'prod8', price: 63}

];

const filterCollection = (ar, c1,c2) =>{
    return ar.filter(el=> el.price>c1 && el.price<c2).sort()
}

// console.log(filterCollection(products, 10,50))


const minus = (num) =>{
    return function(num2){
        return num - num2
    }
}

// console.log(minus(4)(2))

//-------------------------------------------------------------

const multiplyMaker = (num) =>{
    let two = num
    return function(num1 = 1) {
        return  (two *=  num1)
    }
}

const multiply = multiplyMaker(2);
// console.log(multiply())
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(3)); // 12 (4 * 3)


// function modul3() {
//         let strin = '';
//         return {
//             setString(str){
//                 if(str == undefined) return strin 
//                 if( str !== 'string') return strin = String(str)
//                 strin = str
    
//              
//                 return (strin)
//             },
    
//             getLength(){
//                 return strin.length
//             }, 
//             getStrin(){
//                 return strin
//             }
//         }
    
//     }  
// const modulee = modul3()
// console.log(modulee.setString())
// console.log(modulee.getLength())
// console.log(modulee.getStrin())