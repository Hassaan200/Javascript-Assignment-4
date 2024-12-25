// Assignment 38 to 42
// Q1

// function f1 (a,b){
// return a+b;
// }
// console.log(f1(10,40))

// Q2

// var year = parseInt(prompt("Enter a year: "));
// function leapYear(year){
// return year % 4 == 0 ? "Leap Year" : "Not a Leap Year";
// }
// console.log(leapYear(year))

// Q3

// var a = 4, b = 5, c= 6;
// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//     let s = calculateSemiPerimeter(a, b, c);
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// var area = calculateArea(a, b, c);
// console.log(area.toFixed(2))

// Q4

// function result(s1,s2,s3){
//  var final = s1+s2+s3;
//  return final / 300 * 100
// }
// console.log(result(64,71,85));

// Q5

// var a = "Hello world"
// function findIndex(str, char) {
//     return str.indexOf(char);
// }
// console.log(findIndex(a,"e"))

// Q6

// const deleteVowels =(a)=>{
//     if(a.length > 25){
//         return "sentence is more than 25 characters"
//     }
//     return a.replace(/[aeiouAEIOU]/g, "");
// }
// let a = "'This is a test sentence'";
// let result = deleteVowels(a);
// console.log("Sentence without vowel "+ result);


// Q7

// let sentence = "“Pleases read this application and give me gratuity”"
// const occurences = (a) => {
// let vowels = "aeiouAEIOU";
// let count = 0;
// for (let i = 0; i < a.length ; i++) {
//   const pair = a[i] + a[i + 1];
//   if (vowels.includes(a[i]) && vowels.includes(a[i + 1])) {
//    switch(pair){
//     case "ea":
//         case "EA":
//         case "ui":
//         case "UI":
//             count ++;
//             break;

//    }

//   }
// }
// return count;
// }
// let result = occurences(sentence);
// console.log("Number of successive vowels:", result);


// Q8

// const myfun = (a) => {
//    let input = document.getElementById("name").value;
//    if(input < 0){
//     alert("Please enter a positive number")
//    }
//    else{
//    console.log(input,"Km")
//    const meters = input * 1000;
//    const feet = input * 3280.84;
//    const inches = input * 39370.1;
//    const centimeters = input * 100000;
//    console.log("In Meters",meters, "In Feet",feet, "In Inches",inches, "In Centimeter",centimeters);}
// }


// Q9

// let user = +prompt("Enter number of hours worked by the employee: ");
// const func = (user) => {
//    const overtimerate = 12.00;
//    const workhour = 40;
//    let overtimeHours = 0;
//    let overtimePay = 0;
//    if (user > workhour) {
//       overtimeHours = user - workhour;
//       overtimePay = overtimeHours * overtimerate;
//    }
//    return "overtimehours "+ overtimeHours + " overtimepay " + overtimePay;


// }

// Q10

// const withdraw = +prompt("Enter amount to withDraw!");
// let denominations = (a) => {
//    let hundred = Math.floor(withdraw / 100);
//    let remain = withdraw % 100;
//    let fifty = Math.floor(remain / 50);
//    remain = remain % 50;
//    let ten = Math.floor(remain / 10);
//    return {
//       "Hundreds": hundred,
//       "Fifties": fifty,
//       "Tens": ten
//    }
// }
// console.log(denominations(withdraw));



// Assignment 43 to 48
// Q1

// Q2

const phone =()=>{
   alert('Thanks for Purchasing from Us')
  
}

// Q3

// const delete1 = ()=>{
// document.getElementById("l1").innerHTML = ""
// }
// const delete2 = ()=>{
//    document.getElementById("l2").innerHTML = ""
// }
// const delete3 = ()=>{
//    document.getElementById("l3").innerHTML = ""
// }
// const delete4 = ()=>{
//    document.getElementById("l4").innerHTML = ""
// }

// Q4

// const change =()=>{
   
//       document.getElementById("img1").src = "/cards/t1.jpg"
// }
// const change1=()=>{
//    document.getElementById("img1").src = "/cards/mobile1.jpg"
// }


// Q5


// const increase=()=>{
//    document.getElementById("counter").innerHTML = parseInt(document.getElementById("counter").innerHTML)+1
// }
// const decrease=()=>{
//    if(document.getElementById("counter").innerHTML > 0){
//    document.getElementById("counter").innerHTML = parseInt(document.getElementById("counter").innerHTML)-1
// }
// }
// const reset=()=>{
//    document.getElementById("counter").innerHTML = 0
// }


// Assignment 49 - 52

// Q1

// const data =(e,a,b,c)=>{
// e.preventDefault();
// console.log(document.getElementById('name').value,document.getElementById('email').value, document.getElementById('password').value)
// document.getElementById("t1").innerHTML = `<h1>Your Name:</h1>${document.getElementById("name").value}<br> <h1>Your Email:</h1>${document.getElementById("email").value}<br> <h1>Your Password:</h1>${document.getElementById("password").value}`
// }


// Q2

// const Readmore =(e)=>{
//    let more = e.innerHTML 
//    if(more === "Read more"){
//       e.innerHTML = "Read less"
//    document.getElementById("moredata").innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis beatae soluta tenetur ratione amet, asperiores voluptates reiciendis itaque nobis atque vitae accusantium quibusdam facere consectetur perspiciatis explicabo? Qui, reprehenderit necessitatibus!`
//    e.style.textDecoration = "none";}
//    else{
//       document.getElementById('moredata').innerHTML = document.getElementById('para').innerHTML
//    }
//    console.log(document.getElementById('moredata').innerHTML)
// }


// Q3



// const form=(e,a,b,c)=>{

//    const name = document.getElementById('name').value
//    const email = document.getElementById('age').value
//    const password = document.getElementById('grade').value
//    e.preventDefault();
//    console.log(name,email,password);
//    if (name === '' || age === '' || grade === '') {
//       alert('Please fill all the fields');
//       return;
//    }
//    let data =[];
//    data.push(name, email, password);
//    console.log(data)
//    let tbody = document.getElementById("tbody");
//    let row = "<tr>";
// data.forEach ((value)=>{
//   row += `<td>${value}</td>`
//   })
//   row += `
//   <td>
//   <button class="deleteBtn">Delete</button>
//   <button class="editBtn">Edit</button>
//   </td>
// `;
//   row += "</tr>";
//   tbody.innerHTML += row;
// document.getElementById('name').value= ""
// document.getElementById('age').value= ""
// document.getElementById('grade').value= ""

// }

// document.getElementById('tbody').addEventListener('click', function(e) {
//    if (e.target && e.target.classList.contains('deleteBtn')) {
//        const row = e.target.closest('tr');
//        row.remove();
//    }

//    if (e.target && e.target.classList.contains('editBtn')) {
      
//        const row = e.target.closest('tr');
//        const cells = row.getElementsByTagName('td');
//        const name = cells[0].textContent;
//        const age = cells[1].textContent;
//        const grade = cells[2].textContent;

//        document.getElementById('name').value = name;
//        document.getElementById('age').value = age;
//        document.getElementById('grade').value = grade;

//        row.remove();
//    }
// })


// Assignment 58 to 67

// Q1

// const myform =(e,a,b,c)=>{
//    e.preventDefault()
// const content = document.getElementById("main-content") ;
// const children = content.children;
// children[0].innerHTML = document.getElementById("first-name").value
// children[1].innerHTML = document.getElementById("last-name").value
// children[2].innerHTML = document.getElementById("email").value
// }
// const content = document.getElementById("main-content") ;
// const children = content.children;
// children[0].innerHTML = "Hello World" ;
// children[1].innerHTML = "Hello babu" ;
// children[2].innerHTML = "Hello Shani" ;

// Q2

// console.log(document.getElementById('form-content').nodeType);

// console.log(document.getElementById("main-content").children[0]) ;
// console.log(document.getElementById("main-content").children[1]) ;
// console.log(document.getElementById("main-content").children[2]) ;
// console.log(document.getElementById("main-content").children[3]) ;
// console.log(document.getElementById("main-content").children[4]) ;

// console.log(document.getElementById("lastName").nodeType) ;
// console.log(document.getElementById("lastName").childNodes) ;
// document.getElementById("main-content").children[1].setAttribute ("style", "background-color: red") ;
// console.log(document.getElementById("main-content").children[1].attributes);
// console.log(document.getElementById("main-content").firstChild);
// console.log(document.getElementById("main-content").lastChild);

// console.log(document.getElementById("lastName").previousSibling);
// console.log(document.getElementById("lastName").nextSibling);

// console.log(document.getElementById("email").parentNode);
// console.log(document.getElementById("email").nodeType);