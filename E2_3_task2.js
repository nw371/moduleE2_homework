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
