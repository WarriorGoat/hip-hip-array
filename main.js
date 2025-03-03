/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code
let i1 = 0

while (i1 < students.length) {
  console.log(students [i1]);
  i1++
}


  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code
let i2 = 0
let grades2 = grades.reverse()
while (i2 < grades.length) {
  console.log(grades2[i2]);
  i2++
}
  


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code

let i3 = 0

while (i3 < positiveNumbers.length) {
  if ((positiveNumbers[i3])%2 === 0) {
    console.log(positiveNumbers[i3]);
  }
  i3++
}


  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code
let i4 = 0

while (i4 < mixedSignNumbers.length) {
  if (mixedSignNumbers[i4]%2 ===0) 
  {
    console.log(mixedSignNumbers[i4]);
  }
  i4++
}


  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
    
  let i5 = 0
  symmetricalCapitals.shift()
  symmetricalCapitals.shift()
  symmetricalCapitals.pop()
while (i5 < symmetricalCapitals.length) {
  console.log(symmetricalCapitals[i5]);
  i5++
}


  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  
  let i6 = 0
  fibonacciNumbers.unshift(0)
  fibonacciNumbers.push(21, 34)
while (i6 < fibonacciNumbers.length) {
  console.log(fibonacciNumbers[i6]);
  i6++
}



  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code
const productionOrder = ["A New Hope", "The Empire Strikes Back", "Return of the Jedi", "The Force Awakens", "The Last Jedi"];
let i7 = 0
while (i7 < productionOrder.length) {
    console.log(productionOrder[i7]);
    i7++
  }


  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  
  // Challenge 8 Code

const chronologicalOrder = [];
let i8 = 0
chronologicalOrder.unshift("The Phantom Menace", "Attack of the Clones", "Revenge of the Sith")
chronologicalOrder.push("A New Hope", "The Empire Strikes Back");
while (i8 < chronologicalOrder.length) {
    console.log(chronologicalOrder[i8]);
    i8++
    }
  


  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code

let students9 = students.slice(3,11)
let i9=0
while (i9 < students9.length) {
      console.log(students9[i9]);
      i9++
      }




  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

  const student = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // let students10 = student.splice(3,8)
  // let i10=0
  // while (i10 < students10.length) {
  //   console.log(students10[i10]);
  //   i10++
  //   }
  
  let students10 = []
  let i10=3
  while (i10< 11) {
      students10.push(student[i10])
      console.log(student[i10]);
      i10++
      }


  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  
  let students11 = students.slice(3,11)
 
  let i11=0
  i = 0
  while (i11 < students11.length) {
    console.log(students11[i11]);
    i11++
    }
    console.log("");
  while (i<students.length){
    console.log(students[i]);
    i++
  }
  


  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code
  let dinosaurs2 = dinosaurs.splice(4,3)
  let i12=0
  while (i12 < dinosaurs.length) {
    console.log(dinosaurs[i12]);
    i12++
  }
  
  
  
  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

console.log(dinosaurs.join("*"));
  


  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

console.log(dinosaurs.reverse())
console.log(dinosaurs.reverse())

  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code
bones1 = ["foot bone", "leg bone", "knee bone", "thigh bone"]
bones2 = ["hip bone", "back bone", "neck bone", "head bone"]
let skeleton = bones1.concat(bones2);
let i15=0
while (i15 < skeleton.length){
  console.log(skeleton[i15]);
  i15++
}
console.log(bones1);
console.log(bones2);
  
