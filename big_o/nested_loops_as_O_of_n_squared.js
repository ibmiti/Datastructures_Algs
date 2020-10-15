// Logging all pairs of array
// this file will show the big o notation of nested loops which evals to O(N2)
const boxes = ['a','b','c','d','e'];

function log_all_pairs_of_array(array){
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
      console.log(array[i], array[j]);
    }
  }
}

log_all_pairs_of_array(boxes);

// what is happening in plain english above?
// start a for loop , which will rotate ( increment ) as long the number of index in an array given
//
// i represents the index of the array on the first loop - as it moves through the array it will increase it's value
//   from 0 to n
//
//   we can use this to access the array given by its index...
//     e.g :
//
//         array[i] on the first loop will equate as boxes[0]
//           on the second loop it will be boxes[1] ... and so on... allowing us the ability to print out each el
//           of the array
//
//   the second loop :
//
//   j represents the index of the array on the second or nested looping action
//
//   we can use j as we did i ; it will represent the each index of the array
//
//
