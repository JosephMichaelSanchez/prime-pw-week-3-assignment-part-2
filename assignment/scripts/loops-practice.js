console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}
//END OF LOOP

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++){
  console.log(i);
}
//END OF LOOP
//We changed "i<4" to "i<6" to accomplish this.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++){
  console.log(i);
}
//END OF LOOP
// The initial value for 'i' needed to be changed from "0" to "3".

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<11; i+=2){
  console.log(i);
}
//END OF LOOP
// The operator has been changed from ++ to +=2 so that 2 is added each loop.

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i=5; i>(-1); i--){
  console.log(i);
}
//END OF LOOP
//We made the initial value of "i" 5 because is where we want to start the countdown.
//We made the 'to' part of the iteration "i>(-1)" because we want the countdown to stop at 0.
//We made the 'do' part of the iteration "i--" because we are subtracting 1 from "i" each time through the loop.

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let i=0; i<stars.length; i++){
  console.log(stars[i])
}
//END OF LOOP
//"i" is 0, because that is the number assigned to the first element in an array.
//"i<stars.length" as the 'to' part of the iteration will ensure we loop through all elements in the array.
//"i++" as the 'do' part of the iteration moves the loop through each element.
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i=0;
while (i<stars.length){
  console.log(stars[i])
  i++
}
//END OF LOOP
//"i" is set to '0' for the first element of the array.
//"(i<stars.length)"" as the condition will make sure we loop through the entire array.
//"console.log(stars[i])" in the statement will console.log the star located in the current loop's element.
//"i++" in the statement will increase the value of "i" by 1 after each console.log.

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let count=0;
while (count<6){
  console.log(count)
  count++
}
//END OF LOOP
//We create a variable named "count" and make it's initial value '0'.
//"(count<6)" is our condition because we want the loop to stop at '5'.
//"console.log(count)" in our statement will log it's value.
//"count++" will increase the value of "count" by 1 each time the loop is run.


// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let digits=10;
while (digits>4){
  console.log(digits)
  digits--
}
//END OF LOOP
//We create a variable named "digits" and set it's initial value at '10' because that is where our countdown will start.
//"(digits>4)" is our condition because we want the countdown to stop at 5.
//"console.log(digits)" in the statement will log the current value of "digits".
//"digits--" will decrease the value of "digits" by 1 each time through the loop.
