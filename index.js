//ask user to guess
//if guess > random bigger
//guess < random smaller
//guess = random correct
 
//set ;round; to 1 and set ;point; to 0 at the beginning of the game

let randomName = ['Zoe', 'Anna', 'Georgia', 'Lily', 'Ella'];
let pickedRandomName = randomName[Math.floor(Math.random() * 4 + 0)];
let pickedRandomName2 = randomName[Math.floor(Math.random() * 4 + 0)];

let name1 = prompt('What is player 1 name?')
let name2 = prompt('What is player 2 name?')
// console.log('Welcome ' + name1 + ' and ' + name2)

if (name1  == '' && name2 == ''){
  console.log('Welcome ' + pickedRandomName + ' and ' + pickedRandomName2 + ' to the number guessing game!')
}
else {
  console.log('Welcome ' + name1 + ' and ' + name2 + ' to the number guessing game!')
}


let pointname1  = 0
let pointname2  = 0

play();
function play(){
random = Math.floor(Math.random() * 20 + 1);
let round = 1;

do{
guessname1 = prompt (' enter a number between 1 - 20')
if (guessname1 > random){
 console.log('enter a smaller number');
 }else if (guessname1 < random){
 console.log('enter a larger number');
}else {
 console.log('You got it!');
 pointname1++
 console.log('Your point now is ' + pointname1);
break;
}


guessname2 = prompt (name2 + ' enter a number between 1 - 20')
if (guessname2 > random){
 console.log('enter a smaller number');
 }else if (guessname2 < random){
 console.log('enter a larger number');
}else {
 console.log('You got it!');
 pointname2++
 console.log('Your point now is ' + pointname2);
break;
}
round ++
} while (round <= 3){
}

again = prompt ('Do you want to play again?')

if (again == 'yes'){
  play();
}
else {
  console.log(name1 + ' your final point is ' + name1point)
  console.log(name2 + ' your final point is ' + name2point)
  console.log('GAME OVER');
}
}





 
 


// play();
// function play(){
// random = Math.floor(Math.random() * 10 + 1);
// let round = 1;
 
// do{
// guess = prompt(name1 + ' Guess a number between 1 - 10')
// if (guess > random){
//  console.log('Your guess was too high, ');
//  }else if (guess < random){
//  console.log('Your guess was too low, Guess a bigger number');
// }else if (guess == random){
//  console.log('You got it!');
//  point++
//  console.log('Your point now is ' + point);
//  break;
//  }
 
//  round ++
// } while (round <= 3){
 
// }
// again = prompt('Do you want to play again?');
 
// if (again == 'y') {
// play();
// } else {
//   console.log('Your final point is ' + point)
//   console.log('GAME OVER');
// }
// }

