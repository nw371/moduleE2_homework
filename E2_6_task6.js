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
