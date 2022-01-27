TASK1:
*****************************************************************

let erMessage = 'Упс, кажется, вы ошиблись'
let evMessage = 'Число чётное'
let odMessage = 'Число нечётное'
let input = prompt();

input = +input;

if(typeof(input) == 'number' && !isNaN(input)){
  if(input%2 === 0){
    console.log(evMessage)
  }else{
    console.log(odMessage)
  }

}else{
  console.log(erMessage)

*****************************************************************



TASK2:
*****************************************************************

let strMessage = 'X - строка'
let numMessage = 'X - число'
let logMessage = 'Х - логический тип'
let undMessage = 'Тип x не определён'
let X;

X = 'lo';

switch(typeof(X)){
    case "number":
      console.log(numMessage);
      break;
    case "string":
      console.log(strMessage);
      break;
    case "boolean":
      console.log(logMessage);
      break;
    default:
      console.log(undMessage);
      break;
}

*****************************************************************



TASK3:
*****************************************************************

let mystr = "Hello";

console.log( mystr.split('').reverse().join(''));

*****************************************************************



TASK4:
*****************************************************************

let rndNum = Math.random(0,100);

console.log(Math.round(rndNum*100));

*****************************************************************




TASK5:
*****************************************************************

let myarr = [1,2,'aa','bbb','abcd','a'+6,7];

console.log(myarr.length);

for (let indx = 0; indx < myarr.length; indx++){
  console.log(myarr.slice(indx, indx+1))
}

*****************************************************************



TASK6:
*****************************************************************

let myarr = [0,0,0,0];
let chck = 0;
let tmpvar;


tmpvar = myarr.slice(myarr.length - 1).toString();

for (let indx = 0; indx < myarr.length-1; indx++){


  if (myarr[indx] === tmpvar || myarr[indx] === +tmpvar){
    chck++;
  }


}
if (chck == (myarr.length - 1)){
  console.log(true)
}else{
  console.log(false);
     }

*****************************************************************



TASK7:
*****************************************************************

let myarr = [1,2,'e',0,null,5,6,7,8,0,4,3,'r','gggg'];
let odd = 0;
let even = 0;
let other = 0;
let zeros = 0;


for (let indx = 0; indx < myarr.length; indx++){


  switch(typeof myarr[indx]){
    case 'number':
        if (myarr[indx]%2 === 0 && myarr[indx] !== 0){
          even++;
        }else if(myarr[indx] !== 0){
          odd++;
        }else{
          zeros++;
        }
      break;
    default:
      other++;

  }

}

console.log("Odd = " + odd)
console.log("Even = " + even)
console.log("Other = " + other)
console.log("Zeros = " + zeros)

*****************************************************************



TASK8:
*****************************************************************

let demomap = new Map([
  ["A", "a"],
  ["B", "b"],
  ["C", "c"],
  ["D", "d"],
  ["E", "e"]

]);
for (let key of demomap) {
  console.log(`Ключ - ${key[0]}, Значение - ${key[1]}`);
}

*****************************************************************
