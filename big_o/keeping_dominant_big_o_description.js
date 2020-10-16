// example of ignoring the less dominant operation wthin big O eval

// O(n)
numbers = [1,2,3,4,5];
function big_o_n(numbers){
  console.log('o(n)')
  numbers.forEach(function(number){
    console.log('here is the o(n) process');
    console.log(number);
  });

  // O(n^2)
  console.log("this process' evals to O(n^2)");
  numbers.forEach(function(number1){
    numbers.forEach(function(number2){
      console.log(number1 + number2);
    });
  });
}

// to have 1 function run 2 loops concurrently we must nest them which will eval to O(n^2)
//
// the above function evals to :
//
//   O(n + n^2) -- but we should remember to drop non dominant terms :
//
//   O(n^2)     -- the n^2 will be the most memory expensive operation making the 'n' operations
//                 seem neglible - so we drop it from consideration
