// alert("Hello Class!!!")

/*
This is a multi-line cooment
We are trying out the types
of comment in Javascript
*/

// var let const

let fast = "Ford F-150";

console.log(fast);

fast = "Lamborgini Urus";
console.log(fast);

const num = 20;

console.log(num);

const bigerNum = num + num;

let num2 = 2;

num2 += 2;

// num2++
// num2++

console.log(num2);

// const beSure= prompt("Please enter your name")

// console beSure = confirm("Are you sure you want to continue?")

// if(beSure)
//   alert("Welcome " + username+!!!)

// const grade = prompt("What  is your score?");

// if(age < 18) {
// alert("You are not allowed access to this site")}
// else{
// alert("Welcome to the site!!!")
// }

// if(age >=12 && age <=13){
// alert("you are a private")
// }
// if(age >=14 && age <=16){
// alert("you are a leautenant")
// }
// if(age >=17 && age <=19){
// alert("you are a commando")
// }
// else{
// alert("you are not allowed in the camp")
// }

// if(grade >=0 && grade <=19) {
//   alert("You got a F in this subject")
// } if(grade >=20 && grade <=39) {
//   alert("you got a D in this subject ")
// } if(grade >=40 && grade <=59) {
//   alert("You got a B in this subject")
// } if(grade >=60 && grade <=75) {
//   alert("congratulations, you got an A in this subject")
// } if(grade >=76 && grade <=100) {
//   alert("congratulations!!! you are an outstanding student")
// }else {
//   alert("You failed to promote to the next class")
// } 

// const trans = parseInt(prompt("please select an option\n1. Check Balance\n2. By recharge card\n3. Buy data\n4. Call Customer Care "))

// switch(trans){
//   case 1:
//     alert("Your Balace is 2,000")
//     break
//   case 2:
//     alert("You have select to but recharge card")  
//     break
//   case 3:  
//     alert("You have select to buy data")
//     break
//   case 4:
//     alert("You have select to call customer care")  
//     break
//   default:
//     alert("you entered a wrong number")  
// }

// function greet(visitor = "user"){ 
// alert(`"Welcome ${visitor}!!!"`) 
// } 

// function add(x,y){
// console.log(x*y)
// } 
// add(52,10) 


//  greet("lekan") 


const foods = [ "Rice", "Beans", "Yam",
   "Egusi", "Amala", "Ewedu"
]

console.log("Original", foods)

// foods.pop()
// foods.push("fufu")
// foods.shift()
// ffoods.unshift("plantain")

// foods.splice(2,0, "oha", "eba")
// foods.splice(4,1, "porridge", "calamari") 
// console.log("altered", foods)


// const student= {
//   name: "Lekan",
//   age: 20,
//   gender: "Male",
//   hobbies: ["Football", "Basketball", "Coding"],
//   married: false
  
// }

// console.log("Original", student)

//  students.grade = "B+"
//  students.married = true

// delete  student.married

// console.log("Altered", student) 

// let x = 0
// while(x < 1000){
//   console.log(x, "I love you ")
//   x++
// }

const pin = "1234"

let userPin = prompt("Please enter your pin")
let count = 0
while(userPin !== pin && count < 3){
  count++
  userPin = prompt("Please enter correct pin")
}



