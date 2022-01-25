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
