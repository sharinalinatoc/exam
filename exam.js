//Answer Code for question # 1

let number = 5;
function factorial(number){
  let answer = 1;
  if (number == 0 || number == 1){
    return answer;
  }else{
    for(var i = number; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  }  
}


console.log("The factorial of " + number + " is " + factorial(number));



//Answer Code for question # 2
const array1 = [1, 2, 3, 4, 5]

function itsInclude(arr){
  return console.log(array1.includes(4))
  
}
itsInclude(array1)



//Answer Code for question # 3

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function randomList(list){
list = list.sort(() => Math.random() - 0.5)
return list
}

console.log(randomList(list))





//Answer Code for question # 4
let arr1 = [{1: "a", 2: "b", 2: "c", 3: "d"}]


function duplicateArray(arr1) {
let arr2 = []
	for(let i = 0; i < arr1.length; i++) {
 
  if((arr1[i-1])!= (arr1[i])) {
    	arr2.push(arr1[i])
			
  }
  }
  return console.log(arr2)
}
duplicateArray(arr1)

//Answer Code for question # 5
const patterndate = ["01/14/2022", "1/4/2022", "01/4/2022", "1/14/2022"  ]
let date_regex = /^(1[0-2]|0[1-9]|\d)\/(0?[1-9]|[12][0-9]|3[01])\/([2-9]\d[1-9]\d|[1-9]\d)$/;


function patternmatch(date_regex){

patterndate.forEach((s) => {
  console.log(s.match(date_regex));
});
}
patternmatch(date_regex)
