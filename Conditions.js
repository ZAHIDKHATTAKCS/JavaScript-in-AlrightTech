// let name = prompt("Enter your name");
// console.log(name);

// let age = prompt("Enter Your age!");
// console.log(age);
// age = Number.parseInt(age);
// let type= typeof(age);
// console.log(type);


let yourName = prompt("Enter your name");
console.log('Name :',yourName);

let youAge = prompt("Enter your Age");
console.log('Age :',youAge);


if(youAge >= 40){
    alert(`Congratulations ${yourName} , you are eligible to drive the car as per your age is ${youAge}`);
    console.log(`Congratulations ${yourName} , you are eligible to drive the car as per your age is ${youAge}`);
}else{
    alert(`Sorry! ${yourName} you are not eligible to drive a car as per your age is ${youAge}`);
    console.log(`Sorry! ${yourName} you are not eligible to drive a car as per your age is ${youAge}`);
}