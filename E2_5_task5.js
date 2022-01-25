let myarr = [1,2,'aa','bbb','abcd','a'+6,7];

console.log(myarr.length);

for (let indx = 0; indx < myarr.length; indx++){
  console.log(myarr.slice(indx, indx+1))
}
