let nums=[14,9,6,8, 11, 12, 23, 4, 3, 30];
var compareNumber=10;
const numl=nums.reduce(function(a,b,index, array){
if(b>compareNumber || (a!=undefined && a>compareNumber)){
array.splice(1);
 console.log(`number is larger ${a}${b}`);
 return index;
}else{
console.log(`number is smaller ${a}${b}`);
}


}, null);

console.log(numl)

//a=accumulator
//b=iteration value
//index=index
//array=the array

//null=initiliaze accumulator to null so that reducing starts from zero index

