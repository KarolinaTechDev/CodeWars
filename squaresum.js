
//*Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9. *//

///function squareSum(arr){
  //return arr.map(num=>num**2).reduce((acc,c))
 // =>acc+c,0)
 // }

//console.log(squareSum([1,2,5]),30)
//console.log(squareSum([2,5,8]),93)
//console.log(squareSum([3,3,3]),27)

//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.
//P speacial characeters ? strings? space?
//R  a sum of all positvie
//e
//p
function sum(arr){
   let newArr = Number(arr.filter(num=>num > 0))
   return newArr.reduce((acc,c)=>acc+c)
}
console.log(sum([1,2,-3,4]),7)
console.log(sum([-1,-2,-5,3]),3)
console.log(sum([9,90,900,-1]),7)
console.log(sum([1,2,-3,4]),7)
console.log(sum([-1,-2,-5,3]),3)
console.log(sum([9,90,900,-1]),7)
