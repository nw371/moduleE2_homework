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
